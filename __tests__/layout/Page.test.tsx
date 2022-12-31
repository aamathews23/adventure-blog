import { render } from '@testing-library/react';
import Page from '@/layout/Page';
import '@testing-library/jest-dom';

const title = 'Page title';
const description = 'Page description';

describe('Page', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Page
        title={title}
        description={description}
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
