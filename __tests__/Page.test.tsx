import { render } from '@testing-library/react';
import Page from '../components/layout/Page';
import '@testing-library/jest-dom';

const title = 'Page title';
const description = 'Page description';
const header = {
  title: 'Hello world',
  to: '/',
};
const footer = {
  copyright: 'copyright',
  linkedinUrl: 'https://example.com',
  githubUrl: 'https://example.com',
};

describe('Page', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Page
        title={title}
        description={description}
        header={header}
        footer={footer}
      />,
    );
    const page = getByTestId('page');
    expect(page).toBeInTheDocument();
  });
  it('renders a header', () => {
    const { getByTestId } = render(
      <Page
        title={title}
        description={description}
        header={header}
        footer={footer}
      />,
    );
    const pageHeader = getByTestId('header');
    expect(pageHeader).toBeInTheDocument();
  });
  it('renders a footer', () => {
    const { getByTestId } = render(
      <Page
        title={title}
        description={description}
        header={header}
        footer={footer}
      />,
    );
    const pageFooter = getByTestId('footer');
    expect(pageFooter).toBeInTheDocument();
  });
  it('renders a child', () => {
    const { getByTestId, getByText } = render(
      <Page
        title={title}
        description={description}
        header={header}
        footer={footer}
      >
        <h1>Hello</h1>
      </Page>,
    );
    const body = getByTestId('page-body');
    const child = getByText('Hello');
    expect(body).toBeInTheDocument();
    expect(child).toBeInTheDocument();
  });
});
