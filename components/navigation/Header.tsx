import Link from '@/global/Link';
import ListMenu from '@/navigation/ListMenu';
import DrawerMenu from '@/navigation/DrawerMenu';
import Logo from '@/navigation/Logo';
import breakpoints from '@/common/breakpoints';

/**
 * Creates a header component to be used throughout the pages.
 *
 * @returns a header component
 */
const Header = () => (
  <header
    css={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 48,
      [breakpoints.lg]: { height: 64 },
    }}
    data-testid="header"
  >
    <Link to="/">
      <span
        css={{
          display: 'block',
          width: 48,
          [breakpoints.sm]: { width: 64 },
        }}
      >
        <Logo />
      </span>
    </Link>
    <nav
      css={{
        [breakpoints.sm]: {
          display: 'none',
        },
      }}
    >
      <DrawerMenu />
    </nav>
    <nav
      css={{
        display: 'none',
        [breakpoints.sm]: {
          display: 'initial',
        },
      }}
    >
      <ListMenu />
    </nav>
  </header>
);

export default Header;
