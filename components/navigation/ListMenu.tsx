import Link from '../global/Link';
import breakpoints from '../../common/breakpoints';

/**
 * Creates a list menu component to be used throughout the pages.
 *
 * @returns a list menu component
 */
const ListMenu = () => (
  <ul
    css={{
      display: 'flex',
      flexDirection: 'column',
      listStyle: 'none',
      li: {
        display: 'flex',
        width: 'fit-content',
        marginBottom: 16,
      },
      [breakpoints.sm]: {
        flexDirection: 'row',
        li: {
          marginBottom: 0,
          marginLeft: 16,
        },
      },
    }}
    data-testid="list-menu"
  >
    <li>
      <Link to="/">
        <span
          css={{
            marginRight: 8,
            color: '#53d670',
          }}
        >
          1.
        </span>
        Home
      </Link>
    </li>
    <li>
      <Link to="/adventures">
        <span
          style={{
            marginRight: 8,
            color: '#53d670',
          }}
        >
          2.
        </span>
        Adventures
      </Link>
    </li>
  </ul>
);

export default ListMenu;
