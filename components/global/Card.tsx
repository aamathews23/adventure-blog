import Image from 'next/image';
import { useRouter } from 'next/router';
import ImageType from '../../types/global/Image';
import breakpoints from '../../common/breakpoints';

/**
 * The card type
 */
type CardProps = {
  title: string;
  description: string;
  image: ImageType;
  type?: string;
};

const loader = ({ src }: any) => {
  return src;
};

/**
 * Creates a card component to be used throughout the app.
 *
 * @param {String} title
 * @param {String} description
 * @param {String} type
 * @param {ImageType} image
 * @returns a card component
 */
const Card = ({ title, description, type, image }: CardProps) => {
  const router = useRouter();
  const handlePostClick = (e: any) => {
    e.preventDefault();
    router.push(
      `${type || ''}/${title
        .toLowerCase()
        .replaceAll(/[^a-zA-Z0-9\s]/g, '')
        .replaceAll(' ', '-')}`,
    );
  };
  return (
    <div
      css={{
        width: '100%',
        backgroundColor: '#313135',
        padding: 16,
        borderRadius: 4,
        boxShadow: '2px 2px 8px #0e0e0f',
        '&:hover, &:focus': {
          cursor: 'pointer',
          transform: 'translateY(-4px)',
          boxShadow: '2px 2px 16px 4px #0e0e0f',
          transition: 'transform 300ms, box-shadow 300ms',
        },
        '&:focus': {
          outline: '2px solid #fff',
          outlineOffset: 4,
        },
      }}
      data-testid="card"
      tabIndex={0}
      onClick={handlePostClick}
    >
      {image && (
        <figure
          css={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 4,
            width: '100%',
            minHeight: 343,
            marginBottom: 8,
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            loader={loader}
            unoptimized
            priority
          />
        </figure>
      )}
      <header
        css={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: 16,
        }}
      >
        <h3
          css={{
            fontSize: 24,
            fontWeight: 'bold',
            fontFamily: 'Karla, sans-serif',
            marginBottom: 8,
            width: 'fit-content',
            [breakpoints.sm]: {
              fontSize: 32,
            },
          }}
        >
          {title}
        </h3>
      </header>
      <p
        css={{
          fontSize: 16,
          fontFamily: 'Inconsolata, monospace',
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default Card;
