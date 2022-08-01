// Styles
import styles from '../../styles/components/home/intro.module.scss';

// Components
import Text from '../global/Text';
import Button from '../global/Button';

// Types
import IntroType from '../../types/home/Intro';

const Intro = ({ title, body, cta }: IntroType) => {
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
        <Button
          label={cta.label}
          tag={cta.tag}
          anchor={cta.anchor}
        />
      </div>
    </section>
  );
};

export default Intro;
