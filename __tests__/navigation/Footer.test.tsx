import { render } from '@testing-library/react';
import Footer from '@/navigation/Footer';
import '@testing-library/jest-dom';

describe('Footer', () => {
  it('mounts', () => {
    const { getByTestId } = render(<Footer />);
    const footer = getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
});
