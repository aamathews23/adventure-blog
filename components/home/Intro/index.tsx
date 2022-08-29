import Image from 'next/image';
import Text from '../../global/Text';
import Button from '../../global/Button';
import Markdown from '../../global/Markdown';
import SplitBlock from '../../layout/SplitBlock';
import IntroType from '../../../types/home/Intro';
import style from './style';

const loader = ({ src }: any) => {
  return src;
};

const Intro = ({ title, main, cta, image }: IntroType) => {
  return (
    <SplitBlock
      data-testid="intro"
      left={
        <>
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
        </>
      }
      right={
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
      }
    />
  );
};

export default Intro;
