import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonHiking } from '@fortawesome/free-solid-svg-icons';

// Styles
import styles from '../../styles/components/global/not-found.module.scss';

// Components
import Text from '../global/Text';

type NotFoundType = {
  text: string;
};

/**
 * Creates a not found component to be used throughout the pages.
 *
 * @param {String} text the not found error text
 * @returns a not found component
 */
const NotFound = ({ text }: NotFoundType) => {
  const mainClass = 'not-found';
  return (
    <section
      className={styles[mainClass]}
      data-testid={mainClass}
    >
      <FontAwesomeIcon
        className={styles[`${mainClass}__icon`]}
        icon={faPersonHiking}
      />
      <Text
        className={styles[`${mainClass}__text`]}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </section>
  );
};

export default NotFound;
