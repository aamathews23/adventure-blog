// Import styles
import styles from '../styles/pages/home.module.scss';

// Import content
import {
  attributes as homePageModel,
  react as HomePageContent,
} from '../content/pages/home.md';

// Import components
import Page from '../components/layout/Page';
import Text from '../components/global/Text';

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
        <Text
          tag="h1"
          className={styles[`${mainClass}__title`]}
        >
          Coming soon...
        </Text>
      </Page>
    </>
  );
};

export default HomePage;
