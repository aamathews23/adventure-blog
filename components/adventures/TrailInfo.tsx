import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faStar, faCalendar } from '@fortawesome/free-solid-svg-icons';
import Link from '@/global/Link';

type TrailInfoProps = {
  trail: string;
  link: string;
  rating: number;
  date: string;
};

/**
 * Creates a trail info component
 *
 * @param {String} trail the trail name
 * @param {String} link the washington state trail link for hike
 * @param {Number} rating the rating of the hike
 * @param {String} date the date of the hike
 * @returns trail info component
 */
const TrailInfo = ({ trail, link, rating, date }: TrailInfoProps) => (
  <div
    css={{
      display: 'flex',
      gap: 16,
      position: 'relative',
      width: 'fit-content',
      '& > *': {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        paddingBottom: 8,
      },
    }}
    data-testid="trail-info"
  >
    <Link to={link}>
      <FontAwesomeIcon icon={faMap} />
      {trail}
    </Link>
    <span
      css={{
        fontFamily: 'Karla, sans-serif',
      }}
    >
      <FontAwesomeIcon icon={faStar} />
      {rating}
    </span>
    <span
      css={{
        fontFamily: 'Karla, sans-serif',
      }}
    >
      <FontAwesomeIcon icon={faCalendar} />
      {date}
    </span>
  </div>
);

export default TrailInfo;
