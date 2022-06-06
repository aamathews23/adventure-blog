import Image from 'next/image';
import PostType from '../../types/Post';
import styles from '../../styles/components/posts/post.module.scss';

const loader = ({ src }: any) => {
  return src;
};

const Post = ({ title, body, date, previewImg, previewImgAlt }: PostType) => {
  const mainClass = 'post';
  return (
    <div className={styles[mainClass]}>
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
      <header className={styles[`${mainClass}__header`]}>
        <h3 className={styles[`${mainClass}__title`]}>{title}</h3>
        <p className={styles[`${mainClass}__date`]}>{date}</p>
      </header>
      <p className={styles[`${mainClass}__body`]}>{body}</p>
    </div>
  );
};

export default Post;
