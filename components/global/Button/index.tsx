import style from './style';
import ButtonType from '../../../types/global/Button';

/**
 * Creates a button component to be used throughout the app.
 *
 * @param {String} label
 * @param {String} tag
 * @param {String} anchor
 * @returns a button component
 */
const Button = ({ label, tag = 'button', anchor }: ButtonType) => {
  const mainClass = 'button';
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <Tag
      css={style}
      dangerouslySetInnerHTML={{ __html: label }}
      data-testid={mainClass}
      href={anchor}
    />
  );
};

export default Button;
