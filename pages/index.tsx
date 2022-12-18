import Page from '../components/layout/Page';
import Intro from '../components/home/Intro';
import About from '../components/home/About';
import Grid from '../components/home/Grid';
import {
  attributes as homePageModel,
  react as HomePageContent,
} from '../content/pages/home.md';

/**
 * Serves the home page of the site
 *
 * @returns a home page component
 */
const HomePage = () => {
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
          main={homePageModel.intro.main}
          cta={homePageModel.intro.cta}
          image={homePageModel.intro.image}
        />
        <About
          title={homePageModel.about.title}
          main={homePageModel.about.main}
          skills={homePageModel.about.skills}
          image={homePageModel.about.image}
        />
        <Grid
          title={homePageModel.blog.title}
          cta={homePageModel.blog.cta}
          cards={homePageModel.blog.posts}
        />
      </Page>
    </>
  );
};

export default HomePage;
