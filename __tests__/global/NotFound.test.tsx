import { render } from '@testing-library/react';
import NotFound from '../../components/global/NotFound';
import '@testing-library/jest-dom';

const text = 'Hello world';

describe('NotFound', () => {
  it('mounts', () => {
    const { getByTestId } = render(<NotFound text={text} />);
    const notFound = getByTestId('not-found');
    expect(notFound).toBeInTheDocument();
  });
  it('has the text', () => {
    const { getByText } = render(<NotFound text={text} />);
    expect(getByText(text)).toBeInTheDocument();
  });
});
