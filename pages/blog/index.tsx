import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Import content
import {
  attributes as homePageModel,
  react as HomePageContent,
} from '../../content/pages/blog.md';

// Import components
import Page from '../../components/layout/Page';
import PostSection from '../../components/posts/Section';
import NotFound from '../../components/global/NotFound';

// Import types
import CollectionType from '../../types/Collection';

type HomePageType = {
  collections: CollectionType[];
};

const HomePage = ({ collections }: HomePageType) => {
  return (
    <>
      <HomePageContent />
      <Page
        title={homePageModel.title}
        description={homePageModel.description}
        previewImg={homePageModel.previewImg}
        footer={homePageModel.footer}
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
          <NotFound text={homePageModel.notFound} />
        )}
      </Page>
    </>
  );
};

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

export default HomePage;
