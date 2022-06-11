import { render } from '@testing-library/react';
import Header from '../components/navigation/Header';
import '@testing-library/jest-dom';

const title = 'Title';
const to = '/';
const body = 'Body';

describe('Header', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Header
        title={title}
        to={to}
      />,
    );
    const header = getByTestId('header');
    expect(header).toBeInTheDocument();
  });
  it('renders the title', () => {
    const { getByText } = render(
      <Header
        title={title}
        to={to}
      />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });
  it('renders the link', () => {
    const { getByTestId } = render(
      <Header
        title={title}
        to={to}
      />,
    );
    expect(getByTestId('header-link').getAttribute('href')).toEqual(to);
  });
  it('renders the body when provided', () => {
    const { getByText } = render(
      <Header
        title={title}
        to={to}
        body={body}
      />,
    );
    expect(getByText(body)).toBeInTheDocument();
  });
  it('does not render the body when not provided', () => {
    const { queryByText } = render(
      <Header
        title={title}
        to={to}
      />,
    );
    expect(queryByText(body)).toBeNull();
  });
});
