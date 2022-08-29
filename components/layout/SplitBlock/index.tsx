import style from './style';
import SplitBlockType from '../../../types/layout/SplitBlock';

const SplitBlock = ({
  left,
  right,
  isReverse = false,
  ['data-testid']: dataTestId,
}: SplitBlockType) => {
  return (
    <section
      css={style.section(isReverse)}
      data-testid={dataTestId}
    >
      <div css={style.left}>{left}</div>
      <div css={style.right}>{right}</div>
    </section>
  );
};

export default SplitBlock;
