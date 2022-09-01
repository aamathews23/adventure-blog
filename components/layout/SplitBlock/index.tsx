import style from './style';
import SplitBlockType from '../../../types/layout/SplitBlock';

/**
 * Creates a split block component to be used on the home page
 *
 * @param {ReactNode} left
 * @param {ReactNode} right
 * @param {Boolean} isReverse
 * @param {String} dataTestId
 * @returns a split block component
 */
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
