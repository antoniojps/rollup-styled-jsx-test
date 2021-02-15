import React, { useMemo, ReactElement } from 'react';

type PlaceholderProps = {
  x?: number | string;
  y?: number | string;
  invisible?: boolean;
  useRadiusHalf?: boolean;
};

type PlaceholderSize = {
  height: string;
  width: string;
};

const Placeholder = ({
  x = 1,
  y = 1,
  invisible = false,
  useRadiusHalf = false,
}: PlaceholderProps): ReactElement => {
  const { height, width } = useMemo((): PlaceholderSize => {
    if ((typeof x === 'number' && x < 0) || (typeof y === 'number' && y < 0)) {
      console.warn('Props "x","y" must be greater than or equal to 0', 'Placeholder');
      return {
        height: '0',
        width: '0',
      };
    }

    return {
      height: typeof y === 'number' ? `calc(${y * 15.25}pt + 1px * ${y - 1})` : y,
      width: typeof x === 'number' ? `calc(${x * 150}pt + 1px * ${x - 1})` : x,
    };
  }, [x, y]);

  return (
    <div
      className={`placeholder ${invisible ? 'placeholder--invisible' : ''}`}
      style={{ height, width }}
    >
      <style jsx>{`
        .placeholder {
          background-color: var(--accents-2);
          max-width: 100%;
          border-radius: ${useRadiusHalf ? `var(--radius-half)` : `var(--radius-half)`};
          &--invisible {
            background-color: var(--background);
          }
        }
      `}</style>
    </div>
  );
};

export default Placeholder;
