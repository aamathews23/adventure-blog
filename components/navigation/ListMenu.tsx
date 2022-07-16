// Styles
import styles from '../../styles/components/navigation/list-menu.module.scss';

// Components
import Link from '../global/Link';
import Text from '../global/Text';

/**
 * Creates a list menu component to be used throughout the pages.
 *
 * @returns a list menu component
 */
const ListMenu = () => {
  const mainClass = 'list-menu';
  return (
    <ul
      className={styles[mainClass]}
      data-testid={mainClass}
    >
      <Text tag="li">
        <Link to="/">
          <Text
            tag="span"
            className={styles[`${mainClass}__number`]}
          >
            1.
          </Text>
          Home
        </Link>
      </Text>
      <Text tag="li">
        <Link to="/blog">
          <Text
            tag="span"
            className={styles[`${mainClass}__number`]}
          >
            2.
          </Text>
          Blog
        </Link>
      </Text>
    </ul>
  );
};

export default ListMenu;
