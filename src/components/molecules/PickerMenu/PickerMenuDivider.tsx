import React, { ReactElement } from 'react';

const PickerMenuDivider = (): ReactElement => {
  return (
    <div className="divider">
      <style jsx>{`
        .divider {
          height: 1px;
          width: 100%;
          background-color: var(--accents-2);
          margin-top: var(--space-1x);
          margin-bottom: var(--space-1x);
        }
      `}</style>
    </div>
  );
};

export default PickerMenuDivider;
