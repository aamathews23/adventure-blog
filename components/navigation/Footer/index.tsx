import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Text from '../../global/Text';
import style from './style';

/**
 * Creates a footer component to be used throughout the pages.
 *
 * @returns a footer component
 */
const Footer = () => {
  return (
    <footer
      css={style.footer}
      data-testid="footer"
    >
      <div>
        <Link href="https://www.linkedin.com/in/aaron-mathews-953408150/">
          <a
            css={style.icon}
            data-testid="footer-linkedin"
            target="_blank"
            aria-label="linkedin profile"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Link>
        <Link href="https://github.com/aamathews23">
          <a
            css={style.icon}
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
          style={style.copyright}
          data-testid="footer-copyright"
        >
          Designed and built by Aaron Mathews
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
