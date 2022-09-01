import Jobs from '../Jobs';
import Text from '../../global/Text';
import WorkType from '../../../types/home/Work';
import style from './style';

/**
 * Creates a work component to be used on the home page
 *
 * @param {String} title
 * @param {Array<Jobs>} jobs
 * @returns a work component
 */
const Work = ({ title, jobs }: WorkType) => {
  return (
    <section
      css={style.section}
      data-testid="work"
    >
      <Text
        tag="h2"
        style={style.title}
        data-testid="work-title"
      >
        {title}
      </Text>
      {jobs && jobs.length > 0 && <Jobs jobs={jobs} />}
    </section>
  );
};

export default Work;
