import { render } from '@testing-library/react';
import Button from '../components/global/Button';
import '@testing-library/jest-dom';

const label = 'Click me!';

describe('Button', () => {
  it('mounts', () => {
    const { getByTestId } = render(<Button label={label} />);
    expect(getByTestId('button')).toBeInTheDocument();
  });
  it('renders the label', () => {
    const { getByText } = render(<Button label={label} />);
    expect(getByText(label)).toBeInTheDocument();
  });
  it('renders the tag', () => {
    const { getByText } = render(<Button label={label} />);
    expect(getByText(label).nodeName).toEqual('BUTTON');
  });
});
