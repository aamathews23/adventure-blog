import Page from '../components/layout/Page';

// Import content
import {
  attributes as homePageModel,
  react as HomePageContent,
} from '../content/pages/home.md';

// Import components
import Text from '../components/global/Text';

const HomePage = () => {
  return (
    <>
      <HomePageContent />
      <Page
        title={homePageModel.title}
        description={homePageModel.description}
        previewImg={homePageModel.previewImg}
      >
        <Text tag="h1">Coming soon...</Text>
      </Page>
    </>
  );
};

export default HomePage;
