import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Text from '../../global/Text';
import Button from '../../global/Button';
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
 * Creates a hero component to be used on the home page
 *
 * @param {String} title
 * @param {Array} activities
 * @param {Button} cta
 * @param {Image} image
 * @returns a hero component
 */
const Hero = ({ title, activities, cta, image }: HeroType) => {
  const activitiesMemo = useMemo(() => activities, [activities]);
  const [activityIdx, setActivityIdx] = useState<number>(0);
  const activitiesAriaLabel = `I enjoy ${activitiesMemo
    .map((activity, index) =>
      index < activitiesMemo.length - 1 ? activity : `and ${activity}`,
    )
    .join(', ')}.`;

  useEffect(() => {
    if (activitiesMemo && activitiesMemo.length > 0) {
      setTimeout(() => {
        if (activityIdx < activitiesMemo.length - 1) {
          setActivityIdx(activityIdx + 1);
        } else {
          setActivityIdx(0);
        }
      }, 3000);
    }
  }, [activityIdx, activitiesMemo]);

  return (
    <SplitBlock
      data-testid="hero"
      left={
        <div css={style.section}>
          <Text
            tag="h1"
            style={style.title}
            dangerouslySetInnerHTML={{ __html: title }}
            data-testid="hero-title"
          />
          <div
            css={style.activities}
            data-testid="hero-activities"
            aria-label={activitiesAriaLabel}
          >
            I enjoy&nbsp;
            <strong css={style.activity}>{activities[activityIdx]}.</strong>
          </div>
          <Button
            label={cta.label}
            tag={cta.tag}
            anchor={cta.anchor}
          />
        </div>
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
