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
      for (let collection of post.collection) {
        col[collection] = col[collection] ? [...col[collection], post] : [post];
      }

      return col;
    }, {});

  const collections: CollectionType[] = Object.keys(collectionsObj).map(
    (key) => ({ title: key, posts: collectionsObj[key] }),
  );

  return {
    props: {
      collections,
    },
  };
}

export default BlogPage;
