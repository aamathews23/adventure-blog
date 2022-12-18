import Image from 'next/image';
import Text from '../../global/Text';
import Button from '../../global/Button';
import Markdown from '../../global/Markdown';
import SplitBlock from '../../layout/SplitBlock';
import HeroType from '../../../types/home/Hero';
import style from './style';

/**
 * Extracts the image source
 *
 * @param src
 * @returns a string
 */
const loader = ({ src }: any) => {
  return src;
};

/**
 * Creates an hero component to be used on the home page
 *
 * @param {String} title
 * @param {String} main
 * @param {Button} cta
 * @param {Image} image
 * @returns an hero component
 */
const Hero = ({ title, main, cta, image }: HeroType) => {
  return (
    <SplitBlock
      data-testid="hero"
      left={
        <>
          <Text
            tag="h1"
            style={style.title}
            dangerouslySetInnerHTML={{ __html: title }}
            data-testid="hero-title"
          />
          <div
            css={style.body}
            data-testid="hero-body"
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
          data-testid="hero-img"
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

export default Hero;
