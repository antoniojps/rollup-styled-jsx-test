import React, { ReactElement, ReactNode } from 'react';
import { Description } from '../../atoms';

type Props = {
  children: ReactNode;
};

const PickerMenuTitle = (props: Props): ReactElement => {
  return (
    <span className="title">
      <Description>{props.children}</Description>
      <style jsx>{`
        .title {
          color: var(--accents-5);
          padding: var(--space-2x) var(--space-3x);
        }
      `}</style>
    </span>
  );
};

export default PickerMenuTitle;
