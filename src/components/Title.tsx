import { useTranslate } from 'ra-core';

interface TitleProps {
  title: string | React.ReactElement | undefined | null | false;
  defaultTitle?: string;
  className?: string;
}

const Title = ({
  title,
  defaultTitle = '',
  className,
  ...rest
}: TitleProps) => {
  const translate = useTranslate();

  return (
    <span className={className}>
      {!title ? (
        <span {...rest}>{translate(defaultTitle, { _: defaultTitle })}</span>
      ) : typeof title === 'string' ? (
        <span {...rest}>{translate(title, { _: title })}</span>
      ) : (
        title
      )}
    </span>
  );
};

export default Title;
