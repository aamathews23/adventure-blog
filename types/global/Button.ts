/**
 * The button type
 */
type Button = {
  label: string;
  tag?: 'a' | 'button';
  anchor?: string;
  onClick?: () => void;
};

export default Button;
