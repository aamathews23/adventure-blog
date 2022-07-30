import Image from 'next/image';
import { useRouter } from 'next/router';

// Styles
import styles from '../../styles/components/posts/post.module.scss';

// Components
import Text from '../global/Text';

// Types
import PostType from '../../types/Post';

const loader = ({ src }: any) => {
  return src;
};

const Post = ({
  title,
  cardBody,
  date,
  previewImg,
  previewImgAlt,
}: PostType) => {
  const mainClass = 'post';
  const router = useRouter();
  const handlePostClick = (e: any) => {
    e.preventDefault();
    router.push(`blog/${title.toLowerCase().replaceAll(' ', '-')}`);
  };
  return (
    <div
      className={styles[mainClass]}
      tabIndex={0}
      data-testid="post"
      onClick={handlePostClick}
    >
      {previewImg && previewImgAlt && (
        <figure className={styles[`${mainClass}__img`]}>
          <Image
            src={previewImg}
            alt={previewImgAlt}
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
        <Text className={styles[`${mainClass}__date`]}>{date}</Text>
      </header>
      <Text className={styles[`${mainClass}__body`]}>{cardBody}</Text>
    </div>
  );
};

export default Post;
