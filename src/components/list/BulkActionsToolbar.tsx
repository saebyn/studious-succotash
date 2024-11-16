import { Children, cloneElement, isValidElement } from 'react';
import type { BulkActionsToolbarProps } from 'react-admin';
import { useListContext, useTranslate } from 'react-admin';

const BulkActionsToolbar = (props: BulkActionsToolbarProps) => {
  const { label = 'ra.action.bulk_actions', children, className } = props;
  const { selectedIds = [], onUnselectItems } = useListContext();
  const translate = useTranslate();

  return (
    <div className={`bg-white p-4 ${className}`}>
      <div>
        {translate(label, {
          _: label,
          smart_count: selectedIds.length,
        })}
      </div>

      <div>
        <button type="button" onClick={onUnselectItems}>
          {translate('ra.action.cancel')}
        </button>
      </div>

      <div>
        {Children.map(children, (child) =>
          isValidElement(child) ? cloneElement(child, {}) : null,
        )}
      </div>
    </div>
  );
};

export default BulkActionsToolbar;
