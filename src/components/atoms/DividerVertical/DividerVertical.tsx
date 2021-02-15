import React, { ReactElement } from 'react';

const DividerVertical = (): ReactElement => {
  return (
    <svg
      width="32"
      height="32"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      color="var(--accents-2)"
      shapeRendering="geometricPrecision"
      viewBox="0 0 24 24"
    >
      <path d="M16.88 3.549L7.12 20.451"></path>
    </svg>
  );
};

export default DividerVertical;
