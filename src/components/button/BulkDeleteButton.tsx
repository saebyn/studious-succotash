import type { ReactElement } from 'react';
import type { ButtonProps } from 'react-admin';
import Button from './Button';

export interface BulkDeleteButtonProps extends ButtonProps {
  confirmContent?: React.ReactNode;
  confirmTitle?: React.ReactNode;
  confirmColor?: 'primary' | 'warning';
  icon?: ReactElement;
  successMessage?: string;
}

const BulkDeleteButton = (props: BulkDeleteButtonProps) => {
  return <Button {...props} />;
};

export default BulkDeleteButton;
