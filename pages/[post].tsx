import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Page from '../components/layout/Page';

// Import content
import {
  attributes as postPageModel,
  react as PostPageContent,
} from '../content/pages/post.md';

// Import components
import Details from '../components/posts/Details';

// Import types
import PostType from '../types/Post';

type PostPageType = {
  post: PostType;
};

const PostPage = ({ post }: PostPageType) => {
  return (
    <>
      <PostPageContent />
      <Page
        title={`${post.title} | ${postPageModel.title}`}
        description={post.body || ''}
        previewImg={post.previewImg}
        header={postPageModel.header}
        footer={postPageModel.footer}
      >
        <Details
          title={post.title}
          date={post.date}
          location={post.location}
          locationUrl={post.locationUrl}
          distance={post.distance}
          duration={post.duration}
          intensity={post.intensity}
        />
      </Page>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = readdirSync(path.join('content', 'posts')).map((file) => ({
    params: {
      post: file.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { post } }: any) => {
  const file = readFileSync(
    path.join('content', 'posts', `${post}.md`),
  ).toString();
  const content = matter(file);
  return {
    props: {
      post: content.data,
    },
  };
};

export default PostPage;
