import styles from '../../styles/components/global/button.module.scss';
import ButtonType from '../../types/Button';

const Button = ({ label, tag = 'button', anchor }: ButtonType) => {
  const mainClass = 'button';
  const Tag = tag as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={styles[mainClass]}
      dangerouslySetInnerHTML={{ __html: label }}
      data-testid={mainClass}
      href={anchor}
    />
  );
};

export default Button;
