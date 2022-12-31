import { render } from '@testing-library/react';
import Markdown from '@/global/Markdown';
import '@testing-library/jest-dom';

const text = 'Hello world';
const content = `# ${text}`;

describe('Markdown', () => {
  it('mounts', () => {
    const { getByTestId } = render(<Markdown content={content} />);
    const markdown = getByTestId('markdown');
    expect(markdown).toBeInTheDocument();
  });
  it('renders the content', () => {
    const { getByText } = render(<Markdown content={content} />);
    const el = getByText(text);
    expect(el).toBeInTheDocument();
    expect(el.nodeName).toEqual('H1');
  });
});
