import {
  type ListViewProps as RAListViewProps,
  type RaRecord,
  useListContext,
} from 'react-admin';
import Title from '../Title';

export type ListViewProps = RAListViewProps;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function ListView<RecordType extends RaRecord = any>(
  props: ListViewProps,
) {
  const {
    title,
    children,
    emptyWhileLoading = true,

    aside,
    actions,
    filters,
  } = props;

  const { defaultTitle, data, error, isLoading, filterValues, resource } =
    useListContext<RecordType>();

  if (!children || (!data && isLoading && emptyWhileLoading)) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <Title title={title} defaultTitle={defaultTitle} />

      {actions && <div>{actions}</div>}
      {filters && <div>{filters}</div>}

      {error && <p className="text-red-500">{error.message}</p>}
      {isLoading ? <p>Loading...</p> : children}

      {aside && <aside>{aside}</aside>}
    </div>
  );
}
