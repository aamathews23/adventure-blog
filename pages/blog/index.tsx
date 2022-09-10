import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  attributes as blogPageModel,
  react as BlogPageContent,
} from '../../content/pages/blog.md';
import Page from '../../components/layout/Page';
import PostSection from '../../components/posts/Section';
import NotFound from '../../components/global/NotFound';
import CollectionType from '../../types/posts/Collection';
import CardType from '../../types/global/Card';

// The blog page type
type BlogPageType = {
  collections: CollectionType[];
};

/**
 * Serves the blog page of the site
 *
 * @param {Array<Collection>} collections
 * @returns a blog page component
 */
const BlogPage = ({ collections }: BlogPageType) => {
  return (
    <>
      <BlogPageContent />
      <Page
        title={blogPageModel.title}
        description={blogPageModel.description}
        previewImg={blogPageModel.previewImg}
      >
        {collections && collections.length > 0 ? (
          collections.map((collection, index) => (
            <PostSection
              key={index}
              title={collection.title}
              posts={collection.posts}
            />
          ))
        ) : (
          <NotFound text={blogPageModel.notFound} />
        )}
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
  const collectionsObj = readdirSync(path.join('content', 'posts'))
    .map((file) => readFileSync(path.join('content', 'posts', file)).toString())
    .map((post) => matter(post).data)
    .reduce((col, post) => {
      post.collection.forEach((collection: string) => {
        col[collection] = col[collection] ? [...col[collection], post] : [post];
      });

      return col;
    }, {});

  const collections: CollectionType[] = Object.keys(collectionsObj).map(
    (key: string) => ({ title: key, posts: collectionsObj[key] }),
  );

  collections.forEach((collection: CollectionType) =>
    collection.posts.sort((a: CardType, b: CardType) => {
      const aDate = new Date(a.date || '').getTime();
      const bDate = new Date(b.date || '').getTime();
      return bDate - aDate;
    }),
  );

  return {
    props: {
      collections,
    },
  };
}

export default BlogPage;
