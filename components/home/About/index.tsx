import { Remarkable } from 'remarkable';
import Image from 'next/image';
import Text from '../../global/Text';
import AboutType from '../../../types/home/About';
import style from './style';

const loader = ({ src }: any) => {
  return src;
};

const About = ({ title, main, skills, image }: AboutType) => {
  const md = new Remarkable();
  return (
    <section
      css={style.section}
      data-testid="about"
    >
      <Text
        tag="h2"
        style={style.title}
        data-testid="about-title"
      >
        {title}
      </Text>
      <div
        css={style.body}
        data-testid="about-body"
        dangerouslySetInnerHTML={{ __html: md.render(main) }}
      />
      <div
        css={style.list}
        data-testid="about-list"
      >
        {skills.map((skill, key) => (
          <Text
            style={style.item}
            data-testid="about-item"
            key={key}
          >
            {skill}
          </Text>
        ))}
      </div>
      {image && (
        <div
          css={style.img}
          data-testid="about-img"
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
