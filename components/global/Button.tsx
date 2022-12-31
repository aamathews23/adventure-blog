/**
 * The button type
 */
type ButtonProps = {
  label: string;
  tag?: 'a' | 'button';
  anchor?: string;
  onClick?: () => void;
};

/**
 * Creates a button component to be used throughout the app.
 *
 * @param {String} label
 * @param {String} tag
 * @param {String} anchor
 * @returns a button component
 */
const Button = ({ label, tag = 'button', anchor }: ButtonProps) => {
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <Tag
      css={{
        display: 'inline-flex',
        fontFamily: 'Karla, sans-serif',
        fontSize: 16,
        fontWeight: 'bold',
        border: '1px solid #53d670',
        padding: '12px 32px',
        width: 'fit-content',
        textDecoration: 'none',
        borderRadius: 4,
        '&:hover, &:focus': {
          backgroundColor: '#53d670',
          color: '#28282c',
          transition: 'background-color 300ms, color 300ms',
        },
        '&:focus': {
          borderRadius: 4,
          outline: '2px solid #fff',
          outlineOffset: 4,
        },
      }}
      dangerouslySetInnerHTML={{ __html: label }}
      data-testid="button"
      href={anchor}
    />
  );
};

export default Button;
