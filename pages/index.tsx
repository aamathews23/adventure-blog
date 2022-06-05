import Page from '../components/layout/Page';
import { attributes, react as HomeContent } from '../content/pages/home.md';

const Home = () => (
  <>
    <HomeContent />
    <Page
      title={attributes.title}
      description={attributes.description}
      ogImg={attributes.ogImg}
      twitterImg={attributes.twitterImg}
    >
      <h1>Hello</h1>
    </Page>
  </>
);

export default Home;
