import { css } from '@emotion/react';
import breakpoints from '@/common/breakpoints';

type SplitBlockProps = {
  left: React.ReactNode;
  right: React.ReactNode;
  isReverse?: boolean;
  'data-testid'?: string;
};

const section = (isReverse: boolean) =>
  css({
    display: 'grid',
    gridTemplateColumns: '1fr',
    maxWidth: 1024,
    minHeight: '75vh',
    rowGap: 64,
    margin: '64px 0',
    alignItems: 'center',
    gridTemplateAreas: '"leftCol" "rightCol"',
    [breakpoints.sm]: {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateAreas: isReverse
        ? '"rightCol leftCol"'
        : '"leftCol rightCol"',
      columnGap: 64,
    },
    [breakpoints.lg]: {
      columnGap: 128,
    },
  });

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
}: SplitBlockProps) => (
  <section
    css={section(isReverse)}
    data-testid={dataTestId}
  >
    <div
      css={{
        gridArea: 'leftCol',
      }}
    >
      {left}
    </div>
    <div
      css={{
        gridArea: 'rightCol',
      }}
    >
      {right}
    </div>
  </section>
);

export default SplitBlock;
