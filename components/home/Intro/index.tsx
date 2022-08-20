import { Remarkable } from 'remarkable';
import Text from '../../global/Text';
import Button from '../../global/Button';
import IntroType from '../../../types/home/Intro';
import style from './style';

const Intro = ({ title, main, cta }: IntroType) => {
  const md = new Remarkable();
  return (
    <section
      css={style.section}
      data-testid="intro"
    >
      <div css={style.content}>
        <Text
          tag="h1"
          style={style.title}
          dangerouslySetInnerHTML={{ __html: title }}
          data-testid="intro-title"
        />
        <div
          css={style.body}
          dangerouslySetInnerHTML={{ __html: md.render(main) }}
          data-testid="intro-body"
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

export default Intro;
