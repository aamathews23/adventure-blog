import { readdirSync, readFileSync } from 'fs';
import { css } from '@emotion/react';
import matter from 'gray-matter';
import path from 'path';
import {
  attributes as postPageModel,
  react as PostPageContent,
} from '../../content/pages/post.md';
import Page from '../../components/layout/Page';
import Markdown from '../../components/posts/Markdown';
import CardType from '../../types/global/Card';

const style = css({
  margin: '32px 0',
  maxWidth: 700,
});

type PostPageType = {
  post: CardType;
  content?: string;
};

const PostPage = ({ post, content }: PostPageType) => {
  return (
    <>
      <PostPageContent />
      <Page
        title={`${post.title} | ${postPageModel.title}`}
        description={post.description}
        previewImg={post.image.src}
      >
        <div css={style}>{content && <Markdown content={content} />}</div>
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
