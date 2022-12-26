import { readdir, readFile } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { css } from '@emotion/react';
import {
  attributes as pageModel,
  react as Content,
} from '../../content/pages/adventures.md';
import Page from '../../components/layout/Page';
import NotFound from '../../components/global/NotFound';
import AdventureType from '../../types/adventures/Adventure';
import CardGrid from '../../components/global/CardGrid';
import Text from '../../components/global/Text';
import breakpoints from '../../common/breakpoints';

// The section type
type SectionType = {
  title: string;
  adventures: AdventureType[];
};

// The adventure page type
type AdventurePageType = {
  sections: SectionType[];
};

/**
 * Serves the adventure page of the site
 *
 * @param {Array} sections
 * @returns an adventure page component
 */
const AdventurePage = ({ sections }: AdventurePageType) => {
  return (
    <>
      <Content />
      <Page
        title={`${pageModel.title} | Aaron Mathews`}
        description={pageModel.description}
        previewImg={pageModel.previewImg}
      >
        <section
          css={css({
            marginTop: 72,
            marginBottom: 72,
          })}
        >
          <Text
            tag="h1"
            style={css({
              fontSize: 48,
              fontFamily: 'Karla, sans-serif',
              marginBottom: 16,
              textAlign: 'center',
              [breakpoints.lg]: { fontSize: 64 },
            })}
          >
            {pageModel.title}
          </Text>
          <Text
            tag="p"
            style={css({
              fontSize: 16,
              fontFamily: 'Inconsolata, monospace',
              marginBottom: 64,
              textAlign: 'center',
            })}
          >
            {pageModel.description}
          </Text>
          {sections && sections.length > 0 ? (
            sections.map((collection, index) => (
              <section key={index}>
                <Text
                  tag="h2"
                  style={css({
                    fontSize: 32,
                    fontFamily: 'Karla, sans-serif',
                    marginBottom: 16,
                    [breakpoints.lg]: { fontSize: 48 },
                  })}
                >
                  {collection.title}
                </Text>
                <CardGrid
                  type="adventures"
                  items={collection.adventures}
                />
              </section>
            ))
          ) : (
            <NotFound text={pageModel.notFound} />
          )}
        </section>
      </Page>
    </>
  );
};

/**
 * Parses the post data from the files
 *
 * @returns the blog posts
 */
export async function getStaticProps() {
  /**
   * Sort posts in descending order
   * @param a the first post
   * @param b the second post
   * @returns a negitive number
   */
  const sortPostsDesc = (a: AdventureType, b: AdventureType) => {
    const aDate = new Date(a.date || '').getTime();
    const bDate = new Date(b.date || '').getTime();
    return bDate - aDate;
  };

  let sections: SectionType[] = [];
  const files = (await readdir(path.join('content', 'adventures'))).map(
    (fileName) => readFile(path.join('content', 'adventures', fileName)),
  );

  // Get file content and parse to format
  await Promise.all(files).then((res) => {
    // Create post collection obj
    const obj = res
      .map((file) => matter(file.toString()).data)
      .reduce(
        (col, adventure) => ({
          ...col,
          [adventure.year]: col[adventure.year]
            ? [...col[adventure.year], adventure]
            : [adventure],
        }),
        {},
      );

    sections = Object.keys(obj).map((key: string) => ({
      title: key,
      adventures: obj[key].sort(sortPostsDesc),
    }));
  });

  return {
    props: {
      sections,
    },
  };
}

export default AdventurePage;
