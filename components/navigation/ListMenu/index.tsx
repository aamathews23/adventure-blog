import Link from '../../global/Link';
import Text from '../../global/Text';
import style from './style';

/**
 * Creates a list menu component to be used throughout the pages.
 *
 * @returns a list menu component
 */
const ListMenu = () => {
  return (
    <ul
      css={style.list}
      data-testid="list-menu"
    >
      <Text tag="li">
        <Link to="/">
          <Text
            tag="span"
            style={style.number}
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
            style={style.number}
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
