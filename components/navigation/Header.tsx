import Link from 'next/link';
import styles from '../../styles/components/navigation/header.module.scss';
import HeaderType from '../../types/Header';

/**
 * Creates a header component to be used throughout the pages.
 *
 * @param {String} title the header title
 * @param {String} to the header link
 * @returns a header component
 */
const Header = ({ title, to }: HeaderType) => {
  const mainClass = 'header';
  return (
    <header
      className={styles[mainClass]}
      data-testid="header"
    >
      <h1 className={styles[`${mainClass}__title`]}>
        <Link href={to}>
          <a className={styles[`${mainClass}__link`]}>{title}</a>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
