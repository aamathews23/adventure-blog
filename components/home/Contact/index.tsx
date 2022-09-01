import Markdown from '../../global/Markdown';
import Text from '../../global/Text';
import Button from '../../global/Button';
import ContactType from '../../../types/home/Contact';
import style from './style';

/**
 * Creates a contact component to be used on the home page
 *
 * @param {String} title
 * @param {String} main
 * @param {Button} cta
 * @returns a contact component
 */
const Contact = ({ title, main, cta }: ContactType) => {
  return (
    <section
      css={style.section}
      data-testid="contact"
    >
      <div css={style.content}>
        <Text
          tag="h2"
          style={style.title}
          data-testid="contact-title"
        >
          {title}
        </Text>
        <div
          css={style.body}
          data-testid="contact-body"
        >
          <Markdown content={main} />
        </div>
        <Button
          label={cta.label}
          tag={cta.tag}
          anchor={cta.anchor}
        />
      </div>
    </section>
  );
};

export default Contact;
