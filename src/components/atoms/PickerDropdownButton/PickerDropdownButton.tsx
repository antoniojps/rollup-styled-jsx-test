import React, { ReactElement } from 'react';
import { ChevronUpDown } from '@geist-ui/react-icons';
import { ButtonProps } from '@ytrank/types';

const PickerDropdownButton = (props: ButtonProps): ReactElement => {
  return (
    <button className="picker" type="button" {...props}>
      <ChevronUpDown size={16} />
      <style jsx>{`
        .picker {
          color: var(--accents-3);
          background-color: transparent;
          transition: all 0.1s ease-in;
          border: 1px solid transparent;
          display: inline-flex;
          align-items: center;
          cursor: pointer;
          padding: 4px 3px;
          border-radius: 4px;
          &:hover {
            border: 1px solid var(--accents-2);
            background-color: var(--accents-1);
          }
          &:focus {
            color: var(--base);
            border: 1px solid var(--accents-2);
          }
        }
      `}</style>
    </button>
  );
};

export default PickerDropdownButton;
