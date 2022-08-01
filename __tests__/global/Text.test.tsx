import { render } from '@testing-library/react';
import Text from '../../components/global/Text';
import '@testing-library/jest-dom';

const text = 'Click me!';

describe('Text', () => {
  it('mounts', () => {
    const { getByTestId } = render(<Text>{text}</Text>);
    expect(getByTestId('text')).toBeInTheDocument();
  });
  it('renders the text', () => {
    const { getByText } = render(<Text tag="h1">{text}</Text>);
    expect(getByText(text)).toBeInTheDocument();
  });
  it('renders the tag', () => {
    const { getByText } = render(<Text tag="h1">{text}</Text>);
    expect(getByText(text).nodeName).toEqual('H1');
  });
});
