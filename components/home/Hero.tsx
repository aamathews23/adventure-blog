import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { keyframes } from '@emotion/react';
import Button from '../global/Button';
import breakpoints from '../../common/breakpoints';

type HeroProps = {
  title: string;
  body: string;
  activities: string[];
  cta: {
    label: string;
    anchor: string;
    tag?: 'a' | 'button';
  };
  image: {
    src: string;
    alt: string;
  };
};

const fade = keyframes`
  0%, 10% {
    opacity: 0;
  }

  20%, 80% {
    opacity: 1;
  }

  90%, 100% {
    opacity: 0;
  }
`;

const borderShift = keyframes`
  0% {
    border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
  }

  25% {
    border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
  }

  50% {
    border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
  }

  75% {
    border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
  }

  100% {
    border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
  }
`;

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
 * @param {String} body
 * @param {Array} activities
 * @param {Object} cta
 * @param {Object} image
 * @returns a hero component
 */
const Hero = ({ title, body, activities, cta, image }: HeroProps) => {
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
    <section
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 72,
        marginBottom: 72,
      }}
      data-testid="hero"
    >
      <h1
        css={{
          fontSize: 48,
          fontFamily: 'Karla, sans-serif',
          marginBottom: 24,
          [breakpoints.lg]: { fontSize: 64 },
        }}
        data-testid="hero-title"
      >
        {title}
      </h1>
      <p
        css={{
          fontSize: 16,
          fontFamily: 'Inconsolata, monospace',
          marginBottom: 32,
          maxWidth: 300,
          [breakpoints.lg]: {
            fontSize: 24,
            marginBottom: 48,
          },
        }}
        data-testid="hero-activities"
        aria-label={activitiesAriaLabel}
      >
        {body}&nbsp;
        <strong
          css={{
            color: '#53d670',
            animation: `${fade} 3s ease infinite`,
          }}
        >
          {activities[activityIdx]}.
        </strong>
      </p>
      <Button
        label={cta.label}
        tag={cta.tag}
        anchor={cta.anchor}
      />
      <div
        css={{
          width: 288,
          height: 288,
          backgroundColor: '#313135',
          animation: `${borderShift} 10s ease infinite`,
          overflow: 'hidden',
          marginTop: 64,
          boxShadow: '0px 0px 12px 2px #0e0e0f',
          '& > span': { display: 'block !important' },
        }}
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
    </section>
  );
};

export default Hero;
