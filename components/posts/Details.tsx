import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMap,
  faLocationPin,
  faBoltLightning,
  faStopwatch,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import Link from '../global/Link';
import PostType from '../../types/Post';
import styles from '../../styles/components/posts/details.module.scss';

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
      <h2 className={styles[`${mainClass}__title`]}>{title}</h2>
      <div className={styles[`${mainClass}__row`]}>
        {location && locationUrl && (
          <Link
            to={locationUrl}
            className={styles[`${mainClass}__location`]}
          >
            <FontAwesomeIcon icon={faLocationPin} />
            {location}
          </Link>
        )}
        <p className={styles[`${mainClass}__date`]}>
          <FontAwesomeIcon icon={faCalendar} />
          {date}
        </p>
      </div>
      <div className={styles[`${mainClass}__row`]}>
        {distance && (
          <p className={styles[`${mainClass}__distance`]}>
            <FontAwesomeIcon icon={faMap} />
            {distance}
          </p>
        )}
        {duration && (
          <p className={styles[`${mainClass}__duration`]}>
            <FontAwesomeIcon icon={faStopwatch} />
            {duration}
          </p>
        )}
        {intensity && (
          <p className={styles[`${mainClass}__intensity`]}>
            <FontAwesomeIcon icon={faBoltLightning} />
            {intensity}
          </p>
        )}
      </div>
    </section>
  );
};

export default Details;
