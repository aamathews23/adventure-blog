import { Remarkable } from 'remarkable';
import Text from '../../global/Text';
import Button from '../../global/Button';
import ContactType from '../../../types/home/Contact';
import style from './style';

const Contact = ({ title, main, cta }: ContactType) => {
  const md = new Remarkable();
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
          dangerouslySetInnerHTML={{ __html: md.render(main) }}
        />
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
