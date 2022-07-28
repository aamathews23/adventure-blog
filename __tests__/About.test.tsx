import { render } from '@testing-library/react';
import About from '../components/home/About';
import '@testing-library/jest-dom';

const title = 'Test title';
const body = 'Test body';
const skills = ['Javascript', 'Typescript', 'React'];
const image = {
  src: 'example.jpg',
  alt: 'alt text',
};

describe('About', () => {
  it('mounts', () => {
    const { getByTestId } = render(
      <About
        title={title}
        body={body}
        skills={skills}
      />,
    );
    const about = getByTestId('about');
    expect(about).toBeInTheDocument();
  });
  it('has the title', () => {
    const { getByText } = render(
      <About
        title={title}
        body={body}
        skills={skills}
      />,
    );
    expect(getByText(title)).toBeInTheDocument();
  });
  it('has the body', () => {
    const { getByText } = render(
      <About
        title={title}
        body={body}
        skills={skills}
      />,
    );
    expect(getByText(body)).toBeInTheDocument();
  });
  it('has the skills', () => {
    const { getByTestId, getAllByTestId } = render(
      <About
        title={title}
        body={body}
        skills={skills}
      />,
    );
    expect(getByTestId('about-list')).toBeInTheDocument();
    expect(getAllByTestId('about-item').length).toEqual(skills.length);
  });
  it('has the image when provided', () => {
    const { getByTestId } = render(
      <About
        title={title}
        body={body}
        skills={skills}
        image={image}
      />,
    );
    expect(getByTestId('about-img')).toBeInTheDocument();
  });
  it('does not have the image when not provided', () => {
    const { queryByTestId } = render(
      <About
        title={title}
        body={body}
        skills={skills}
      />,
    );
    expect(queryByTestId('about-img')).toBeFalsy();
  });
});
