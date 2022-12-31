import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonHiking } from '@fortawesome/free-solid-svg-icons';

/**
 * The not found component type
 */
type NotFoundProps = {
  text: string;
};

/**
 * Creates a not found component to be used throughout the pages.
 *
 * @param {String} text the not found error text
 * @returns a not found component
 */
const NotFound = ({ text }: NotFoundProps) => (
  <section
    css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 343,
      width: 343,
      borderRadius: '50%',
      backgroundColor: '#313135',
      padding: 16,
      margin: '48px 0',
    }}
    data-testid="not-found"
  >
    <FontAwesomeIcon
      css={{
        width: 50,
        height: 66.67,
        marginBottom: 32,
      }}
      icon={faPersonHiking}
    />
    <div
      style={{
        fontFamily: 'Inconsolata, monospace',
        fontSize: 20,
        textAlign: 'center',
      }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  </section>
);

export default NotFound;
