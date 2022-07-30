import styles from '../../styles/components/home/job.module.scss';
import Text from '../global/Text';
import JobType from '../../types/Job';

const Job = ({ title, duration, description, isActive }: JobType) => {
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
      <Text
        className={styles[`${mainClass}__description`]}
        data-testid={`${mainClass}-description`}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </li>
  );
};

export default Job;
