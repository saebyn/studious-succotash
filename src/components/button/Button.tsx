import type { FC } from 'react';
import { type ButtonProps, useTranslate } from 'react-admin';

const Button: FC<ButtonProps> = ({
  className,
  //alignIcon = "left",
  //startIcon,
  //endIcon,
  color = 'primary',
  //size = "small",
  label,
  //children,
}) => {
  console.warn('Not implemented: Button');
  const translate = useTranslate();

  const translatedLabel = label ? translate(label, { _: label }) : undefined;

  return (
    <button
      type="button"
      aria-label={translatedLabel}
      className={`btn btn-${color} ${className}`}
    >
      {translatedLabel}
    </button>
  );
};

export default Button;
