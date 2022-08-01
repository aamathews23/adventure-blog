import { render } from '@testing-library/react';
import Link from '../../components/global/Link';
import '@testing-library/jest-dom';

const to = '/';
const text = 'Click me!';

describe('Link', () => {
  it('mounts', () => {
    const { getByTestId } = render(<Link to={to}>{text}</Link>);
    expect(getByTestId('link')).toBeInTheDocument();
  });
  it('renders the text', () => {
    const { getByText } = render(<Link to={to}>{text}</Link>);
    expect(getByText(text)).toBeInTheDocument();
  });
  it('renders the href', () => {
    const { getByText } = render(<Link to={to}>{text}</Link>);
    expect(getByText(text).getAttribute('href')).toEqual(to);
  });
});
