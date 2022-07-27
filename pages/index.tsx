// Import styles
import styles from '../styles/pages/home.module.scss';

// Import content
import {
  attributes as homePageModel,
  react as HomePageContent,
} from '../content/pages/home.md';

// Import components
import Page from '../components/layout/Page';
import Intro from '../components/home/Intro';

const HomePage = () => {
  const mainClass = 'home';
  return (
    <>
      <HomePageContent />
      <Page
        title={homePageModel.title}
        description={homePageModel.description}
        previewImg={homePageModel.previewImg}
      >
        <Intro
          title={homePageModel.intro.title}
          body={homePageModel.intro.body}
        />
      </Page>
    </>
  );
};

export default HomePage;
