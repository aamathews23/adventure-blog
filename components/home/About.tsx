import Image from 'next/image';
import Markdown from '@/global/Markdown';
import SplitBlock from '@/layout/SplitBlock';
import breakpoints from '@/common/breakpoints';

type AboutProps = {
  title: string;
  main: string;
  skills: string[];
  image?: {
    src: string;
    alt: string;
  };
};

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
 * Creates an about component to be used on the home page
 *
 * @param {String} title
 * @param {String} main
 * @param {Array} skills
 * @param {Image} image
 * @returns an about component
 */
const About = ({ title, main, skills, image }: AboutProps) => (
  <SplitBlock
    data-testid="about"
    left={
      <>
        <h2
          css={{
            width: '100%',
            fontSize: 32,
            fontFamily: 'Karla, sans-serif',
            marginBottom: 32,
            [breakpoints.lg]: { fontSize: 48 },
          }}
          data-testid="about-title"
        >
          {title}
        </h2>
        <div
          css={{
            fontSize: 16,
            fontFamily: 'Inconsolata, monospace',
            marginBottom: 32,
          }}
          data-testid="about-body"
        >
          <Markdown content={main} />
        </div>
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            columnGap: 32,
            rowGap: 4,
          }}
          data-testid="about-list"
        >
          {skills.map((skill, key) => (
            <span
              css={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                fontSize: 16,
                fontFamily: 'Inconsolata, monospace',
                '&::before': {
                  display: 'inline-block',
                  content: "''",
                  borderTop: '6px solid transparent',
                  borderBottom: '6px solid transparent',
                  borderLeft: '6px solid #53d670',
                  marginRight: 8,
                },
              }}
              data-testid="about-item"
              key={key}
            >
              {skill}
            </span>
          ))}
        </div>
      </>
    }
    right={
      image && (
        <div
          css={{
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0px 0px 12px 2px #0e0e0f',
            '& > span': { display: 'block !important' },
          }}
          data-testid="about-img"
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
      )
    }
    isReverse
  />
);

export default About;
