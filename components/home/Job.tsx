import { Remarkable } from 'remarkable';
import styles from '../../styles/components/home/job.module.scss';
import Text from '../global/Text';
import JobType from '../../types/home/Job';

const Job = ({ title, duration, description, isActive }: JobType) => {
  const md = new Remarkable();
  const mainClass = 'job';
  const jobTitleClasses = [
    styles[`${mainClass}__title`],
    isActive ? styles[`${mainClass}__title--active`] : '',
  ];
  return (
    <li
      className={styles[mainClass]}
      data-testid={mainClass}
    >
      <Text
        className={jobTitleClasses.join(' ')}
        data-testid={`${mainClass}-title`}
        tag="h3"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <Text
        className={styles[`${mainClass}__duration`]}
        data-testid={`${mainClass}-duration`}
      >
        {duration}
      </Text>
      <div
        className={styles[`${mainClass}__description`]}
        data-testid={`${mainClass}-description`}
        dangerouslySetInnerHTML={{ __html: md.render(description) }}
      />
    </li>
  );
};

export default Job;
