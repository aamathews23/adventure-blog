import Page from '../components/layout/Page';

// Import content
import {
  attributes as notFoundModel,
  react as NotFoundPageContent,
} from '../content/pages/404.md';

// Import components
import NotFound from '../components/global/NotFound';

const NotFoundPage = () => {
  return (
    <>
      <NotFoundPageContent />
      <Page
        title={notFoundModel.title}
        description={notFoundModel.description}
        previewImg={notFoundModel.previewImg}
      >
        <NotFound text={notFoundModel.notFound} />
      </Page>
    </>
  );
};

export default NotFoundPage;
