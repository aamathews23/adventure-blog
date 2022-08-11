import { Remarkable } from 'remarkable';
import styles from '../../styles/components/home/contact.module.scss';
import Text from '../global/Text';
import Button from '../global/Button';
import ContactType from '../../types/home/Contact';

const Contact = ({ title, main, cta }: ContactType) => {
  const md = new Remarkable();
  const mainClass = 'contact';
  return (
    <section
      className={styles[mainClass]}
      data-testid={mainClass}
    >
      <div className={styles[`${mainClass}__content`]}>
        <Text
          tag="h2"
          className={styles[`${mainClass}__title`]}
          data-testid={`${mainClass}-title`}
        >
          {title}
        </Text>
        <div
          className={styles[`${mainClass}__body`]}
          data-testid={`${mainClass}-body`}
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
