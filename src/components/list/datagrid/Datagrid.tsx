import type React from 'react';
import { Children, isValidElement } from 'react';
import {
  type DatagridProps as RADatagridProps,
  type RaRecord,
  useListContext,
  useTranslateLabel,
} from 'react-admin';
import BulkDeleteButton from '../../button/BulkDeleteButton';
import BulkActionsToolbar from '../BulkActionsToolbar';

type DatagridProps = RADatagridProps;

const defaultBulkActionButtons = <BulkDeleteButton />;

const Datagrid = (props: DatagridProps) => {
  console.warn('Not implemented: Datagrid');
  const {
    children,
    className,
    empty,
    isRowSelectable,
    rowClick,
    size,
    bulkActionButtons,

    title,
  } = props;
  const {
    sort,
    data,
    isLoading,
    onSelect,
    onToggleItem,
    selectedIds,
    setSort,
    total,
    resource,
  } = useListContext();

  if (isLoading === true) {
    return <p>Loading...</p>;
  }

  if (total === 0 || !data) {
    return empty ? empty : <p>No results found</p>;
  }

  return (
    <>
      {bulkActionButtons !== false ? (
        <BulkActionsToolbar>
          {isValidElement(bulkActionButtons)
            ? bulkActionButtons
            : defaultBulkActionButtons}
        </BulkActionsToolbar>
      ) : null}

      <Table className={className || ''}>
        <TableHead>
          {Children.map(children, (field, index) =>
            isValidElement(field) ? (
              <TableHeaderCell
                field={field}
                index={index}
                resource={resource}
              />
            ) : null,
          )}
        </TableHead>
        <TableBody>
          {data.map((record) =>
            record ? (
              <TableRow record={record} key={record.id}>
                {Children.map(children, (field) =>
                  isValidElement(field) ? (
                    <Field
                      record={record}
                      source={field.props.source}
                      key={record.id}
                    />
                  ) : null,
                )}
              </TableRow>
            ) : null,
          )}
        </TableBody>
      </Table>
    </>
  );
};

const Table: React.FC<{
  children: React.ReactNode;
  className: string;
}> = ({ children, className }) => (
  <table
    className={`table-striped table-bordered table-hover table-condensed table ${className}`}
  >
    {children}
  </table>
);

const TableHead: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <thead>
    <tr>{children}</tr>
  </thead>
);

const TableHeaderCell = ({
  field,
  index,
  resource,
}: {
  field: React.ReactElement | React.ReactPortal;
  index: number;
  resource: string;
}) => {
  const translateLabel = useTranslateLabel();

  return (
    <th
      key={field.props.source || index}
      className={`column-${field.props.source}`}
    >
      {translateLabel({
        label: field.props.label,
        resource,
        source: field.props.source,
      })}
    </th>
  );
};

const TableBody: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => <tbody>{children}</tbody>;

const TableRow: React.FC<{
  record: RaRecord;
  children: React.ReactNode;
}> = ({ record, children }) => <tr key={record.id}>{children}</tr>;

const Field: React.FC<{
  record: RaRecord;
  source: string;
}> = ({ record, source }) => (
  <td className={`column-${source}`}>{record[source]}</td>
);

export default Datagrid;
