import Link from '../../global/Link';
import Text from '../../global/Text';
import ListMenu from '../ListMenu';
import DrawerMenu from '../DrawerMenu';
import style from './style';

/**
 * Creates a header component to be used throughout the pages.
 *
 * @returns a header component
 */
const Header = () => {
  return (
    <header
      css={style.header}
      data-testid="header"
    >
      <Link to="/">
        <Text style={style.title}>AM</Text>
      </Link>
      <nav css={style.drawer}>
        <DrawerMenu />
      </nav>
      <nav css={style.list}>
        <ListMenu />
      </nav>
    </header>
  );
};

export default Header;
