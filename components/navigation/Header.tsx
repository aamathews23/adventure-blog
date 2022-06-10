import Link from 'next/link';
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
      <Link href={to}>
        <a
          className={styles[`${mainClass}__link`]}
          data-testid="header-link"
        >
          <h1 className={styles[`${mainClass}__title`]}>{title}</h1>
        </a>
      </Link>
      {body && <p className={styles[`${mainClass}__body`]}>{body}</p>}
    </header>
  );
};

export default Header;
