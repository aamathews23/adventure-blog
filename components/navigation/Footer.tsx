import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import breakpoints from '../../common/breakpoints';

/**
 * Creates a footer component to be used throughout the pages.
 *
 * @returns a footer component
 */
const Footer = () => (
  <footer
    css={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      height: 96,
      [breakpoints.sm]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 64,
      },
    }}
    data-testid="footer"
  >
    <div>
      <Link
        href="https://www.linkedin.com/in/aaron-mathews-953408150/"
        passHref
      >
        <a
          css={{
            color: '#fff',
            height: 24,
            '& svg': {
              height: 24,
              width: 24,
              overflow: 'hidden',
            },
            '&:not(:last-child)': { marginRight: 16 },
            '&:hover, &:focus': {
              cursor: 'pointer',
              '& svg': {
                transform: 'scale(1.25)',
                transition: 'transform 300ms',
              },
            },
            '&:focus': { outline: 'none' },
          }}
          data-testid="footer-linkedin"
          target="_blank"
          aria-label="linkedin profile"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </Link>
      <Link
        href="https://github.com/aamathews23"
        passHref
      >
        <a
          css={{
            color: '#fff',
            height: 24,
            '& svg': {
              height: 24,
              width: 24,
              overflow: 'hidden',
            },
            '&:not(:last-child)': { marginRight: 16 },
            '&:hover, &:focus': {
              cursor: 'pointer',
              '& svg': {
                transform: 'scale(1.25)',
                transition: 'transform 300ms',
              },
            },
            '&:focus': { outline: 'none' },
          }}
          data-testid="footer-github"
          target="_blank"
          aria-label="github profile"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </Link>
    </div>
    <div>
      <p
        style={{
          fontSize: 16,
          fontFamily: 'Inconsolata, monospace',
          color: '#53d670',
          marginTop: 24,
        }}
        data-testid="footer-copyright"
      >
        Designed and built by Aaron Mathews
      </p>
    </div>
  </footer>
);

export default Footer;
