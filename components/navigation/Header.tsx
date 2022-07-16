// Styles
import styles from '../../styles/components/navigation/header.module.scss';

// Components
import Link from '../global/Link';
import Text from '../global/Text';
import ListMenu from './ListMenu';
import DrawerMenu from './DrawerMenu';

/**
 * Creates a header component to be used throughout the pages.
 *
 * @returns a header component
 */
const Header = () => {
  const mainClass = 'header';
  return (
    <header
      className={styles[mainClass]}
      data-testid="header"
    >
      <Link to="/">
        <Text className={styles[`${mainClass}__title`]}>AM</Text>
      </Link>
      <nav className={styles[`${mainClass}__drawer-menu`]}>
        <DrawerMenu />
      </nav>
      <nav className={styles[`${mainClass}__list-menu`]}>
        <ListMenu />
      </nav>
    </header>
  );
};

export default Header;
