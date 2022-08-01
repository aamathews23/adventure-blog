// Components
import Image from 'next/image';
import Text from '../global/Text';

// Styles
import styles from '../../styles/components/home/about.module.scss';

// Types
import AboutType from '../../types/home/About';

const loader = ({ src }: any) => {
  return src;
};

const About = ({ title, body, skills, image }: AboutType) => {
  const mainClass = 'about';
  return (
    <section
      className={styles[mainClass]}
      data-testid={mainClass}
    >
      <Text
        tag="h2"
        className={styles[`${mainClass}__title`]}
        data-testid={`${mainClass}-title`}
      >
        {title}
      </Text>
      <Text
        className={styles[`${mainClass}__body`]}
        data-testid={`${mainClass}-body`}
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <div
        className={styles[`${mainClass}__list`]}
        data-testid={`${mainClass}-list`}
      >
        {skills.map((skill, key) => (
          <Text
            className={styles[`${mainClass}__item`]}
            data-testid={`${mainClass}-item`}
            key={key}
          >
            {skill}
          </Text>
        ))}
      </div>
      {image && (
        <div
          className={styles[`${mainClass}__img`]}
          data-testid={`${mainClass}-img`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width="343"
            height="343"
            objectFit="cover"
            loader={loader}
            unoptimized
            priority
          />
        </div>
      )}
    </section>
  );
};

export default About;
