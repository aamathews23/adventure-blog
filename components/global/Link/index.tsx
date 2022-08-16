import NextLink from 'next/link';
import style from './style';
import LinkType from '../../../types/global/Link';

/**
 * Creates a link component to be used throughout the app.
 *
 * @param {String} to
 * @param {React.ReactNode} children
 * @returns a link component
 */
const Link = ({ to, children }: LinkType) => {
  const mainClass = 'link';
  return (
    <NextLink
      href={to}
      passHref
    >
      <a
        css={style}
        data-testid={mainClass}
      >
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
