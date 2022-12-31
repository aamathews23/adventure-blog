import Link from '../global/Link';
import ListMenu from './ListMenu';
import DrawerMenu from './DrawerMenu';
import breakpoints from '../../common/breakpoints';

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
          fontSize: 24,
          fontWeight: 'bold',
          fontFamily: 'Karla, sans-serif',
          color: '#53d670',
          [breakpoints.sm]: { fontSize: 32 },
        }}
      >
        AM
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
