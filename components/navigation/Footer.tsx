import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Styles
import styles from '../../styles/components/navigation/footer.module.scss';

// Components
import Link from 'next/link';
import Text from '../global/Text';

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
      <div>
        <Link href="https://www.linkedin.com/in/aaron-mathews-953408150/">
          <a
            className={styles[`${mainClass}__icon`]}
            data-testid="footer-linkedin"
            target="_blank"
            aria-label="linkedin profile"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Link>
        <Link href="https://github.com/aamathews23">
          <a
            className={styles[`${mainClass}__icon`]}
            data-testid="footer-github"
            target="_blank"
            aria-label="github profile"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Link>
      </div>
      <div>
        <Text
          className={styles[`${mainClass}__copyright`]}
          data-testid="footer-copyright"
        >
          Designed and built by Aaron Mathews
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
