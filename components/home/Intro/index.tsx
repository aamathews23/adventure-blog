import Image from 'next/image';
import Text from '../../global/Text';
import Button from '../../global/Button';
import Markdown from '../../global/Markdown';
import IntroType from '../../../types/home/Intro';
import style from './style';

const loader = ({ src }: any) => {
  return src;
};

const Intro = ({ title, main, cta, image }: IntroType) => {
  return (
    <section
      css={style.section}
      data-testid="intro"
    >
      <div css={style.content}>
        <Text
          tag="h1"
          style={style.title}
          dangerouslySetInnerHTML={{ __html: title }}
          data-testid="intro-title"
        />
        <div
          css={style.body}
          data-testid="intro-body"
        >
          <Markdown content={main} />
        </div>
        <Button
          label={cta.label}
          tag={cta.tag}
          anchor={cta.anchor}
        />
      </div>
      <div
        css={style.img}
        data-testid="intro-img"
      >
        <Image
          src={image.src}
          alt={image.alt}
          width="500"
          height="500"
          objectFit="cover"
          loader={loader}
          unoptimized
          priority
        />
      </div>
    </section>
  );
};

export default Intro;
