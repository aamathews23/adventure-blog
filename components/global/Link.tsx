import NextLink from 'next/link';

/**
 * The link type
 */
type LinkProps = {
  to: string;
  className?: string;
  children?: React.ReactNode;
};

/**
 * Creates a link component to be used throughout the app.
 *
 * @param {String} to
 * @param {React.ReactNode} children
 * @returns a link component
 */
const Link = ({ to, children }: LinkProps) => (
  <NextLink
    href={to}
    passHref
  >
    <a
      css={{
        color: '#fff',
        textDecoration: 'none',
        fontFamily: 'Karla, sans-serif',
        position: 'relative',
        paddingBottom: 8,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 3,
          backgroundColor: '#fff',
          transform: 'translate3d(-105%, 0, 0)',
          transition: 'opacity 300ms, transform 300ms',
        },
        '&:hover, &:focus': {
          '&::before': {
            transform: 'translate3d(0, 0, 0)',
          },
        },
        '&:focus': {
          borderRadius: 4,
          outline: '2px solid #fff',
          outlineOffset: 4,
        },
      }}
      data-testid="link"
    >
      {children}
    </a>
  </NextLink>
);

export default Link;
