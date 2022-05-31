import { render } from '@testing-library/react';
import Footer from '../components/navigation/Footer';
import '@testing-library/jest-dom';

describe('Footer', () => {
  it('mounts', () => {
    const { getByTestId } = render(<Footer />);
    const footer = getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
  it('renders the linkedin link', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footer-linkedin')).toBeInTheDocument();
  });
  it('renders the github link', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footer-github')).toBeInTheDocument();
  });
});
