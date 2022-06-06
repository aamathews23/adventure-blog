import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import styles from '../../styles/components/navigation/footer.module.scss';
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
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Link>
        <Link href={githubUrl}>
          <a
            className={styles[`${mainClass}__icon`]}
            data-testid="footer-github"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Link>
      </div>
      <div>
        <p
          className={styles[`${mainClass}__copyright`]}
          data-testid="footer-copyright"
        >
          {copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
