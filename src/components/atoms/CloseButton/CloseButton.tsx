import React, { ReactElement } from 'react';
import { X } from '@geist-ui/react-icons';
import { ButtonProps } from '@ytrank/types';

const CloseButton = (props: ButtonProps): ReactElement => {
  return (
    <button className="close-btn" type="button" {...props}>
      <X size={14} />
      <style jsx>{`
        .close-btn {
          background-color: var(--background);
          display: inline-flex;
          border: 1px solid var(--accents-2);
          border-radius: var(--radius);
          padding: 2px;
          &:hover {
            border-color: var(--accents-8);
            cursor: pointer;
          }
          &:focus {
            border-color: var(--accents-5);
          }
        }
      `}</style>
    </button>
  );
};

export default CloseButton;
