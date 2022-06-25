import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMap,
  faLocationPin,
  faBoltLightning,
  faStopwatch,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';

// Styles
import styles from '../../styles/components/posts/details.module.scss';

// Components
import Link from '../global/Link';
import Text from '../global/Text';

// Types
import PostType from '../../types/Post';

const Details = ({
  title,
  date,
  location,
  locationUrl,
  distance,
  duration,
  intensity,
}: PostType) => {
  const mainClass = 'details';
  return (
    <section
      className={styles[mainClass]}
      data-testid={mainClass}
    >
      <Text
        tag="h2"
        className={styles[`${mainClass}__title`]}
      >
        {title}
      </Text>
      <div className={styles[`${mainClass}__row`]}>
        {location && locationUrl && (
          <Link
            to={locationUrl}
            className={styles[`${mainClass}__item`]}
          >
            <FontAwesomeIcon icon={faLocationPin} />
            {location}
          </Link>
        )}
        <Text className={styles[`${mainClass}__item`]}>
          <FontAwesomeIcon icon={faCalendar} />
          {date}
        </Text>
      </div>
      <div className={styles[`${mainClass}__row`]}>
        {distance && (
          <Text className={styles[`${mainClass}__item`]}>
            <FontAwesomeIcon icon={faMap} />
            {distance}
          </Text>
        )}
        {duration && (
          <Text className={styles[`${mainClass}__item`]}>
            <FontAwesomeIcon icon={faStopwatch} />
            {duration}
          </Text>
        )}
        {intensity && (
          <Text className={styles[`${mainClass}__item`]}>
            <FontAwesomeIcon icon={faBoltLightning} />
            {intensity}
          </Text>
        )}
      </div>
    </section>
  );
};

export default Details;
