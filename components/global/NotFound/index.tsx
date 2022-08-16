import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonHiking } from '@fortawesome/free-solid-svg-icons';
import style from './style';
import Text from '../Text';
import NotFoundType from '../../../types/global/NotFound';

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
      css={style.notFound}
      data-testid={mainClass}
    >
      <FontAwesomeIcon
        css={style.icon}
        icon={faPersonHiking}
      />
      <Text
        css={style.text}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </section>
  );
};

export default NotFound;
