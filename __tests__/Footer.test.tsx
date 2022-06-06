import { render } from '@testing-library/react';
import Footer from '../components/navigation/Footer';
import '@testing-library/jest-dom';

const copyright = 'copyright';
const linkedinUrl = 'https://example.com';
const githubUrl = 'https://example.com';

describe('Footer', () => {
  it('mounts', () => {
    const { getByTestId } = render(<Footer copyright={copyright} linkedinUrl={linkedinUrl} githubUrl={githubUrl} />);
    const footer = getByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
  it('renders the copyright', () => {
    const { getByTestId } = render(<Footer copyright={copyright} linkedinUrl={linkedinUrl} githubUrl={githubUrl} />);
    const el = getByTestId('footer-copyright');
    expect(el).toBeInTheDocument();
    expect(el.textContent?.trim()).toEqual(copyright);
  });
  it('renders the linkedin link', () => {
    const { getByTestId } = render(<Footer copyright={copyright} linkedinUrl={linkedinUrl} githubUrl={githubUrl} />);
    const el = getByTestId('footer-linkedin');
    expect(el).toBeInTheDocument();
    expect(el.getAttribute('href')).toEqual(linkedinUrl);
  });
  it('renders the github link', () => {
    const { getByTestId } = render(<Footer copyright={copyright} linkedinUrl={linkedinUrl} githubUrl={githubUrl} />);
    const el = getByTestId('footer-github');
    expect(el).toBeInTheDocument();
    expect(el.getAttribute('href')).toEqual(githubUrl);
  });
});
