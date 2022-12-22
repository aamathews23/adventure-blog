import { readdirSync, readFileSync } from 'fs';
import { css } from '@emotion/react';
import matter from 'gray-matter';
import path from 'path';
import {
  attributes as postPageModel,
  react as PostPageContent,
} from '../../content/pages/post.md';
import Page from '../../components/layout/Page';
import Markdown from '../../components/global/Markdown';
import CardType from '../../types/global/Card';

// Page styles
const style = css({
  margin: '32px 0',
  maxWidth: 700,
});

// Page type
type PostPageType = {
  post: CardType;
  content?: string;
};

/**
 * Serves the home page of the site
 *
 * @param {Card} post
 * @param {String} content
 * @returns a post page component
 */
const PostPage = ({ post, content }: PostPageType) => {
  return (
    <>
      <PostPageContent />
      <Page
        title={`${postPageModel.title} | ${post.title}`}
        description={post.description}
        previewImg={post.image.src}
      >
        <div css={style}>{content && <Markdown content={content} />}</div>
      </Page>
    </>
  );
};

/**
 * Gets the markdown file paths
 *
 * @returns the file paths
 */
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

/**
 * Parses the file content
 *
 * @param {String} slug
 * @returns the file content
 */
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
