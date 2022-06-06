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

const Home = ({ collection }: any) => {
  console.log(collection);
  return (
    <>
      <HomeContent />
      <Page
        title={attributes.title}
        description={attributes.description}
        header={headerModel}
        footer={footerModel}
        previewImg={attributes.previewImg}
      >
        <HeaderContent />
        <FooterContent />
        {collection &&
          Object.keys(collection) &&
          Object.keys(collection).length > 0 &&
          Object.keys(collection).map((key, index) => (
            <PostSection
              key={index}
              title={key.split('-')[1]}
              posts={collection[key]}
            />
          ))}
      </Page>
    </>
  );
};

export async function getStaticProps() {
  const collection = readdirSync(path.join('content', 'posts')).reduce(
    (col, year) => {
      const data = readdirSync(path.join('content', 'posts', year))
        .map((file) =>
          readFileSync(path.join('content', 'posts', year, file)).toString(),
        )
        .map((post) => matter(post).data);

      return {
        ...col,
        [`year-${year}`]: data,
      };
    },
    {},
  );

  return {
    props: {
      collection,
    },
  };
}

export default Home;
