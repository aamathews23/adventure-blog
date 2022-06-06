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

const Home = () => (
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
      <h1>Hello</h1>
    </Page>
  </>
);

export default Home;
