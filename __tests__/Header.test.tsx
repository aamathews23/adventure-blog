import { render } from '@testing-library/react';
import Header from '../components/navigation/Header';
import '@testing-library/jest-dom';

const title = 'Title';
const to = '/';

describe('Header', () => {
  it('mounts', () => {
    const { getByTestId } = render(<Header title={title} to={to} />);
    const header = getByTestId('header');
    expect(header).toBeInTheDocument();
  });
  it('renders the title', () => {
    const { getByText } = render(<Header title={title} to={to} />);
    expect(getByText(title)).toBeInTheDocument();
  });
  it('renders the link', () => {
    const { getByText } = render(<Header title={title} to={to} />);
    expect(getByText(title).getAttribute('href')).toEqual(to);
  });
});
