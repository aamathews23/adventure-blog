import Image from 'next/image';
import { useRouter } from 'next/router';

// Styles
import styles from '../../styles/components/global/card.module.scss';

// Components
import Text from '../global/Text';

// Types
import CardType from '../../types/global/Card';

const loader = ({ src }: any) => {
  return src;
};

const Card = ({ title, description, type, date, image }: CardType) => {
  const mainClass = 'card';
  const router = useRouter();
  const handlePostClick = (e: any) => {
    e.preventDefault();
    router.push(`${type || ''}/${title.toLowerCase().replaceAll(' ', '-')}`);
  };
  return (
    <div
      className={styles[mainClass]}
      data-testid={mainClass}
      tabIndex={0}
      onClick={handlePostClick}
    >
      {image && (
        <figure className={styles[`${mainClass}__img`]}>
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
      <header className={styles[`${mainClass}__header`]}>
        <Text
          tag="h3"
          className={styles[`${mainClass}__title`]}
        >
          {title}
        </Text>
        {date && <Text className={styles[`${mainClass}__date`]}>{date}</Text>}
      </header>
      <Text className={styles[`${mainClass}__body`]}>{description}</Text>
    </div>
  );
};

export default Card;
