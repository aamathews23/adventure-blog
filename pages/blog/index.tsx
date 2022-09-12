// import { readdirSync } from 'fs';
import { readdir, readFile } from 'fs/promises';
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
  /**
   * Sort posts in descending order
   * @param a the first post
   * @param b the second post
   * @returns a negitive number
   */
  const sortPostsDesc = (a: CardType, b: CardType) => {
    const aDate = new Date(a.date || '').getTime();
    const bDate = new Date(b.date || '').getTime();
    return bDate - aDate;
  };

  let collections: CollectionType[] = [];
  const files = (await readdir(path.join('content', 'posts'))).map((fileName) =>
    readFile(path.join('content', 'posts', fileName)),
  );

  // Get file content and parse to format
  await Promise.all(files).then((res) => {
    // Create post collection obj
    const obj = res
      .map((file) => matter(file.toString()).data)
      .reduce((col, post) => {
        post.collection.forEach((collection: string) => {
          col[collection] = col[collection]
            ? [...col[collection], post]
            : [post];
        });
        return col;
      }, {});

    // Convert obj to list of CollectionTypes
    collections = Object.keys(obj).map((key: string) => ({
      title: key,
      posts: obj[key].sort(sortPostsDesc),
    }));
  });

  return {
    props: {
      collections,
    },
  };
}

export default BlogPage;
