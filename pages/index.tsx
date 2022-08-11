// Import content
import {
  attributes as homePageModel,
  react as HomePageContent,
} from '../content/pages/home.md';

// Import components
import Page from '../components/layout/Page';
import Intro from '../components/home/Intro';
import About from '../components/home/About';
import Work from '../components/home/Work';
import Grid from '../components/home/Grid';
import Contact from '../components/home/Contact';

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
        />
        <About
          title={homePageModel.about.title}
          main={homePageModel.about.main}
          skills={homePageModel.about.skills}
          image={homePageModel.about.image}
        />
        <Work
          title={homePageModel.work.title}
          jobs={homePageModel.work.jobs}
        />
        <Grid
          title={homePageModel.blog.title}
          cta={homePageModel.blog.cta}
          cards={homePageModel.blog.posts}
        />
        <Contact
          title={homePageModel.contact.title}
          main={homePageModel.contact.main}
          cta={homePageModel.contact.cta}
        />
      </Page>
    </>
  );
};

export default HomePage;
