import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import styles from '../../styles/components/navigation/footer.module.scss';

/**
 * Creates a footer component to be used throughout the pages.
 *
 * @returns a footer component
 */
const Footer = () => {
  const mainClass = 'footer';
  return (
    <footer
      className={styles[mainClass]}
      data-testid="footer"
    >
      <Link href="https://www.linkedin.com/in/aaron-mathews-953408150/">
        <a
          className={styles[`${mainClass}__icon`]}
          data-testid="footer-linkedin"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </Link>
      <Link href="https://github.com/aamathews23">
        <a
          className={styles[`${mainClass}__icon`]}
          data-testid="footer-github"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Link>
    </footer>
  );
};

export default Footer;
