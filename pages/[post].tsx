import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Page from '../components/layout/Page';

// Import content
import {
  attributes as postPageModel,
  react as PostPageContent,
} from '../content/pages/post.md';

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
        description={post.body}
        previewImg={post.previewImg}
        header={postPageModel.header}
        footer={postPageModel.footer}
      >
        {post.title}
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
