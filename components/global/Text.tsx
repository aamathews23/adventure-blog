// Types
import TextType from '../../types/Text';

const Text = ({
  tag = 'p',
  className = '',
  children,
  dangerouslySetInnerHTML,
  'data-testid': datatestid,
}: TextType) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      data-testid={datatestid || 'text'}
    >
      {children}
    </Tag>
  );
};

export default Text;
