import Page from '@/layout/Page';
import Hero from '@/home/Hero';
import About from '@/home/About';
import Adventures from '@/home/Adventures';
import {
  attributes as homePageModel,
  react as HomePageContent,
} from '@/content/home.md';

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
          body={homePageModel.hero.body}
          activities={homePageModel.hero.activities}
          cta={homePageModel.hero.cta}
          image={homePageModel.hero.image}
        />
        <About
          title={homePageModel.about.title}
          main={homePageModel.about.main}
          skills={homePageModel.about.skills}
          image={homePageModel.about.image}
        />
        <Adventures
          title={homePageModel.adventures.title}
          cta={homePageModel.adventures.cta}
          cards={homePageModel.adventures.items}
        />
      </Page>
    </>
  );
};

export default HomePage;
