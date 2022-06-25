// Styles
import styles from '../../styles/components/global/text.module.scss';

// Types
type TextType = {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'li';
  className?: string;
  children?: React.ReactNode;
  dangerouslySetInnerHTML?: { __html: string };
  'data-testid'?: string;
};

const Text = ({
  tag = 'p',
  className = '',
  children,
  dangerouslySetInnerHTML,
  'data-testid': datatestid,
}: TextType) => {
  const mainClass = 'text';
  const Tag = tag as keyof JSX.IntrinsicElements;
  const classes = [
    className,
    styles[mainClass],
    styles[`${mainClass}--${tag}`],
  ];
  return (
    <Tag
      className={classes.join(' ')}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      data-testid={datatestid || mainClass}
    >
      {children}
    </Tag>
  );
};

export default Text;
