import Text from '../../global/Text';
import Button from '../../global/Button';
import Markdown from '../../global/Markdown';
import IntroType from '../../../types/home/Intro';
import style from './style';

const Intro = ({ title, main, cta }: IntroType) => {
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
          data-testid="intro-body"
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

export default Intro;
