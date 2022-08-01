import { render } from '@testing-library/react';
import Contact from '../../components/home/Contact';
import '@testing-library/jest-dom';

const title = 'Test title';
const body = 'Test body';
const cta = {
  label: 'Test cta',
};

describe('Contact', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Contact
        title={title}
        body={body}
        cta={cta}
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
        cta={cta}
      />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });
  it('has the body', () => {
    const { getByText } = render(
      <Contact
        title={title}
        body={body}
        cta={cta}
      />,
    );
    expect(getByText(body)).toBeInTheDocument();
  });
  it('has the cta', () => {
    const { getByText } = render(
      <Contact
        title={title}
        body={body}
        cta={cta}
      />,
    );
    expect(getByText(cta.label)).toBeInTheDocument();
  });
});
