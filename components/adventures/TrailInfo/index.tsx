import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap, faStar, faCalendar } from '@fortawesome/free-solid-svg-icons';
import style from './style';
import Link from '../../global/Link';
import Text from '../../global/Text';

type TrailInfoProps = {
  trail: string;
  link: string;
  rating: number;
  date: string;
};

const TrailInfo = ({ trail, link, rating, date }: TrailInfoProps) => {
  return (
    <div
      css={style.container}
      data-testid="trail-info"
    >
      <Link to={link}>
        <FontAwesomeIcon icon={faMap} />
        {trail}
      </Link>
      <Text
        tag="span"
        style={style.rating}
      >
        <FontAwesomeIcon icon={faStar} />
        {rating}
      </Text>
      <Text
        tag="span"
        style={style.date}
      >
        <FontAwesomeIcon icon={faCalendar} />
        {date}
      </Text>
    </div>
  );
};

export default TrailInfo;
