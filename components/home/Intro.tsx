// Styles
import styles from '../../styles/components/home/intro.module.scss';

// Components
import Text from '../global/Text';

// Types
import IntroType from '../../types/Intro';

const Intro = ({ title, body }: IntroType) => {
  const mainClass = 'intro';
  return (
    <section
      className={styles[mainClass]}
      data-testid={mainClass}
    >
      <div className={styles[`${mainClass}__content`]}>
        <Text
          tag="h1"
          className={styles[`${mainClass}__title`]}
          dangerouslySetInnerHTML={{ __html: title }}
          data-testid={`${mainClass}-title`}
        />
        <Text
          className={styles[`${mainClass}__body`]}
          dangerouslySetInnerHTML={{ __html: body }}
          data-testid={`${mainClass}-body`}
        />
      </div>
    </section>
  );
};

export default Intro;
