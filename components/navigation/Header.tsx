import Link from '../global/Link';
import styles from '../../styles/components/navigation/header.module.scss';
import HeaderType from '../../types/Header';

/**
 * Creates a header component to be used throughout the pages.
 *
 * @param {String} title the header title
 * @param {String} to the header link
 * @param {String} body the header body
 * @returns a header component
 */
const Header = ({ title, to, body }: HeaderType) => {
  const mainClass = 'header';
  return (
    <header
      className={styles[mainClass]}
      data-testid="header"
    >
      <Link
        to={to}
        className={styles[`${mainClass}__title`]}
      >
        <h1>{title}</h1>
      </Link>
      {body && <p className={styles[`${mainClass}__body`]}>{body}</p>}
    </header>
  );
};

export default Header;
