import { readdirSync, readFileSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Page from '../components/layout/Page';

// Import content
import { attributes, react as HomeContent } from '../content/pages/home.md';
import {
  attributes as headerModel,
  react as HeaderContent,
} from '../content/models/header.md';
import {
  attributes as footerModel,
  react as FooterContent,
} from '../content/models/footer.md';

// Import components
import PostSection from '../components/posts/Section';

// Import types
import CollectionType from '../types/Collection';

type HomeType = {
  collections: CollectionType[];
};

const Home = ({ collections }: HomeType) => {
  return (
    <>
      <HeaderContent />
      <HomeContent />
      <FooterContent />
      <Page
        title={attributes.title}
        description={attributes.description}
        header={headerModel}
        footer={footerModel}
        previewImg={attributes.previewImg}
      >
        {collections &&
          collections.length > 0 &&
          collections.map((collection, index) => (
            <PostSection
              key={index}
              title={collection.title}
              posts={collection.posts}
            />
          ))}
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

export default Home;
