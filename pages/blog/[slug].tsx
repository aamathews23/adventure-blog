import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';

// Import styles
import styles from '../../styles/pages/post.module.scss';

// Import content
import {
  attributes as postPageModel,
  react as PostPageContent,
} from '../../content/pages/post.md';

// Import components
import Page from '../../components/layout/Page';
import Details from '../../components/posts/Details';
import Markdown from '../../components/posts/Markdown';

// Import types
import PostType from '../../types/Post';

type PostPageType = {
  post: PostType;
  content?: string;
};

const PostPage = ({ post, content }: PostPageType) => {
  const mainClass = 'post';
  return (
    <>
      <PostPageContent />
      <Page
        title={`${post.title} | ${postPageModel.title}`}
        description={post.cardBody || ''}
        previewImg={post.previewImg}
      >
        <div className={styles[mainClass]}>
          <div className={styles[`${mainClass}__details`]}>
            <Details
              title={post.title}
              date={post.date}
              location={post.location}
              locationUrl={post.locationUrl}
              distance={post.distance}
              duration={post.duration}
              intensity={post.intensity}
            />
          </div>
          <div className={styles[`${mainClass}__content`]}>
            {content && <Markdown content={content} />}
          </div>
        </div>
      </Page>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = readdirSync(path.join('content', 'posts')).map((file) => ({
    params: {
      slug: file.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const file = readFileSync(
    path.join('content', 'posts', `${slug}.md`),
  ).toString();
  const content = matter(file);

  return {
    props: {
      post: content.data,
      content: content.content,
    },
  };
};

export default PostPage;
