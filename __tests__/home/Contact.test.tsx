import { render } from '@testing-library/react';
import Contact from '../../components/home/Contact';
import '@testing-library/jest-dom';

const title = 'Test title';
const main = 'Test body';
const cta = {
  label: 'Test cta',
};

describe('Contact', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <Contact
        title={title}
        main={main}
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
        main={main}
        cta={cta}
      />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });
  it('has the main', () => {
    const { getByText } = render(
      <Contact
        title={title}
        main={main}
        cta={cta}
      />,
    );
    expect(getByText(main)).toBeInTheDocument();
  });
  it('has the cta', () => {
    const { getByText } = render(
      <Contact
        title={title}
        main={main}
        cta={cta}
      />,
    );
    expect(getByText(cta.label)).toBeInTheDocument();
  });
});
