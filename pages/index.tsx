import Page from '../components/layout/Page';
import Hero from '../components/home/Hero';
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
        <Hero
          title={homePageModel.hero.title}
          main={homePageModel.hero.main}
          cta={homePageModel.hero.cta}
          image={homePageModel.hero.image}
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
