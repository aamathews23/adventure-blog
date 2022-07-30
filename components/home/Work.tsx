import styles from '../../styles/components/home/work.module.scss';
import Text from '../global/Text';
import Jobs from './Jobs';
import WorkType from '../../types/Work';

const Work = ({ title, jobs }: WorkType) => {
  const mainClass = 'work';
  return (
    <section
      className={styles[mainClass]}
      data-testid={mainClass}
    >
      <Text
        className={styles[`${mainClass}__title`]}
        data-testid={`${mainClass}-title`}
        tag="h2"
      >
        {title}
      </Text>
      {jobs && jobs.length > 0 && <Jobs jobs={jobs} />}
    </section>
  );
};

export default Work;
