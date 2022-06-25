// Styles
import styles from '../../styles/components/global/text.module.scss';

// Types
import TextType from '../../types/Text';

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
