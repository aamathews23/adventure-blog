import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Styles
import styles from '../../styles/components/navigation/footer.module.scss';

// Components
import Link from 'next/link';
import Text from '../global/Text';

// Types
import FooterType from '../../types/Footer';

/**
 * Creates a footer component to be used throughout the pages.
 *
 * @param {String} copyright the copy right text
 * @param {String} linkedinUrl the url to the linkedin account
 * @param {String} githubUrl the url to the github account
 * @returns a footer component
 */
const Footer = ({ copyright, linkedinUrl, githubUrl }: FooterType) => {
  const mainClass = 'footer';
  return (
    <footer
      className={styles[mainClass]}
      data-testid="footer"
    >
      <div>
        <Link href={linkedinUrl}>
          <a
            className={styles[`${mainClass}__icon`]}
            data-testid="footer-linkedin"
            target="_blank"
            aria-label="linkedin profile"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Link>
        <Link href={githubUrl}>
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
          {copyright}
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
