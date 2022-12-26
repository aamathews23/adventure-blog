import { readdirSync, readFileSync } from 'fs';
import { css } from '@emotion/react';
import matter from 'gray-matter';
import path from 'path';
import {
  attributes as pageModel,
  react as Content,
} from '../../content/pages/adventure.md';
import Page from '../../components/layout/Page';
import Markdown from '../../components/global/Markdown';
import TrailInfo from '../../components/adventures/TrailInfo';
import AdventureType from '../../types/adventures/Adventure';

// Page styles
const style = css({
  margin: '32px 0',
  maxWidth: 700,
});

// Page type
type AdventurePageType = {
  adventure: AdventureType;
  content?: string;
};

/**
 * Serves the adventure page of the site
 *
 * @param {Object} adventure
 * @param {String} content
 * @returns a adventure page component
 */
const AdventurePage = ({ adventure, content }: AdventurePageType) => {
  return (
    <>
      <Content />
      <Page
        title={`${pageModel.title} | ${adventure.title}`}
        description={adventure.description}
        previewImg={adventure.image.src}
      >
        <TrailInfo
          trail={adventure.trail}
          link={adventure.link}
          rating={adventure.rating}
          date={adventure.date}
        />
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
  const paths = readdirSync(path.join('content', 'adventures')).map((file) => ({
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
    path.join('content', 'adventures', `${slug}.md`),
  ).toString();
  const content = matter(file);

  return {
    props: {
      adventure: content.data,
      content: content.content,
    },
  };
};

export default AdventurePage;
