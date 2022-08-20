import { Remarkable } from 'remarkable';
import Text from '../../global/Text';
import JobType from '../../../types/home/Job';
import style from './style';

const Job = ({ title, duration, description, isActive }: JobType) => {
  const md = new Remarkable();
  return (
    <li
      css={style.job}
      data-testid="job"
    >
      <Text
        tag="h3"
        style={isActive ? style.titleActive : style.title}
        data-testid="job-title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <Text
        style={style.duration}
        data-testid="job-duration"
      >
        {duration}
      </Text>
      <div
        css={style.description}
        data-testid="job-description"
        dangerouslySetInnerHTML={{ __html: md.render(description) }}
      />
    </li>
  );
};

export default Job;
