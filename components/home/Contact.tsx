import styles from '../../styles/components/home/contact.module.scss';
import Text from '../global/Text';
import ContactType from '../../types/Contact';

const Contact = ({ title, body }: ContactType) => {
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
        <Text
          className={styles[`${mainClass}__body`]}
          data-testid={`${mainClass}-body`}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
    </section>
  );
};

export default Contact;
