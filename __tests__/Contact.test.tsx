import { render } from '@testing-library/react';
import Contact from '../components/home/Contact';
import '@testing-library/jest-dom';

const title = 'Test title';
const body = 'Test body';

describe('Contact', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Contact
        title={title}
        body={body}
      />,
    );
    const contact = getByTestId('contact');
    expect(contact).toBeInTheDocument();
  });
  it('has the title', () => {
    const { getByText } = render(
      <Contact
        title={title}
        body={body}
      />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });
  it('has the body', () => {
    const { getByText } = render(
      <Contact
        title={title}
        body={body}
      />,
    );
    expect(getByText(body)).toBeInTheDocument();
  });
});
