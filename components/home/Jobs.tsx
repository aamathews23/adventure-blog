import styles from '../../styles/components/home/jobs.module.scss';
import Job from './Job';
import JobsType from '../../types/home/Jobs';

const Jobs = ({ jobs }: JobsType) => {
  const mainClass = 'jobs';
  return (
    <ul
      className={styles[mainClass]}
      data-testid={mainClass}
    >
      {jobs &&
        jobs.length > 0 &&
        jobs.map((job, index) => (
          <Job
            key={index}
            title={job.title}
            duration={job.duration}
            description={job.description}
            isActive={job.isActive}
          />
        ))}
    </ul>
  );
};

export default Jobs;
