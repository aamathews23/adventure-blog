import Image from 'next/image';
import { useRouter } from 'next/router';
import style from './style';
import Text from '../Text';
import CardType from '../../../types/global/Card';

const loader = ({ src }: any) => {
  return src;
};

/**
 * Creates a card component to be used throughout the app.
 *
 * @param {String} title
 * @param {String} description
 * @param {String} type
 * @param {String} date
 * @param {ImageType} image
 * @returns a card component
 */
const Card = ({ title, description, type, date, image }: CardType) => {
  const mainClass = 'card';
  const router = useRouter();
  const handlePostClick = (e: any) => {
    e.preventDefault();
    router.push(`${type || ''}/${title.toLowerCase().replaceAll(' ', '-')}`);
  };
  return (
    <div
      css={style.card}
      data-testid={mainClass}
      tabIndex={0}
      onClick={handlePostClick}
    >
      {image && (
        <figure css={style.img}>
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
      <header css={style.header}>
        <Text
          tag="h3"
          style={style.title}
        >
          {title}
        </Text>
        {date && <Text style={style.date}>{date}</Text>}
      </header>
      <Text style={style.body}>{description}</Text>
    </div>
  );
};

export default Card;
