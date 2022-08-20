import TextType from '../../../types/global/Text';

/**
 * Creates a text component to be used throughout the app.
 *
 * @param {String} tag
 * @param {Interpolation<Theme>} css
 * @param {React.ReactNode} children
 * @param {Object} dangerouslySetInnerHTML
 * @param {String} datatestid
 * @returns a text component
 */
const Text = ({
  tag = 'p',
  style,
  children,
  dangerouslySetInnerHTML,
  'data-testid': datatestid,
}: TextType) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <Tag
      css={style}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      data-testid={datatestid || 'text'}
    >
      {children}
    </Tag>
  );
};

export default Text;
