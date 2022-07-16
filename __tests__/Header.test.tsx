import { render } from '@testing-library/react';
import Header from '../components/navigation/Header';
import '@testing-library/jest-dom';

describe('Header', () => {
  it('mounts', () => {
    const { getByTestId } = render(<Header />);
    const header = getByTestId('header');
    expect(header).toBeInTheDocument();
  });
});
