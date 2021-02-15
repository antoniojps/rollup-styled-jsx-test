import React, { ReactElement } from 'react';
import ReactSelect, { components, IndicatorProps } from 'react-select';
import ReactSelectCreatable from 'react-select/creatable';
import { OptionType, ValueType, SelectProps } from './';

const DropdownIndicator = (props: IndicatorProps<OptionType>): ReactElement => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        viewBox="0 0 24 24"
        width="1.25em"
        height="1.25em"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        shapeRendering="geometricPrecision"
        className="indicator"
      >
        <path d="M6 9l6 6 6-6"></path>
        <style jsx>{`
          .indicator {
            transition: all 200ms ease 0s;
            color: inherit;
            stroke: currentcolor;
            transform: ${props.selectProps.menuIsOpen ? `rotate(180deg)` : `rotate(0deg)`};
          }
        `}</style>
      </svg>
    </components.DropdownIndicator>
  );
};

const Select = ({
  isCreatable = false,
  options = [],
  value,
  onChange,
  error = null,
  ...props
}: SelectProps): ReactElement => {
  const handleChange = (value: ValueType): void => {
    if (typeof onChange !== 'function') return;
    if (!value) {
      // handle clear
      onChange(null, { action: 'clear' });
      return;
    } else if (value instanceof Array) {
      // handle isMulti
      if (value instanceof Array && value.length === 0) {
        onChange([], { action: 'clear' });
        return;
      }
      onChange(value, { action: 'set-value' });
    } else {
      // Handle a single value here
      onChange(value, { action: 'set-value' });
    }
  };

  return (
    <div>
      {isCreatable ? (
        <ReactSelectCreatable
          classNamePrefix="react-select"
          options={options}
          onChange={handleChange}
          value={value}
          components={{ DropdownIndicator }}
          {...props}
        />
      ) : (
        <ReactSelect
          classNamePrefix="react-select"
          options={options}
          onChange={handleChange}
          value={value}
          components={{ DropdownIndicator }}
          {...props}
        />
      )}
      <style jsx global>{`
        .react-select {
          &__indicator {
            color: var(--base) !important;
            &-separator {
              display: none !important;
            }
          }
          &--id-disabled {
            background-color: var(--background-light) !important;
          }
          &__control {
            z-index: 1;
            cursor: pointer;
            color: var(--base) !important;
            font-size: var(--size-xs) !important;
            width: 100% !important;
            border-radius: var(--radius) !important;
            border: 1px solid ${error ? `var(--error)` : `var(--border)`} !important;
            transition: border 0.2s ease 0s, color 0.2s ease 0s !important;

            &:hover {
              border: 1px solid ${error ? `var(--error)` : `var(--border)`};
              box-shadow: none !important;
            }

            &:focus {
              border: 1px solid var(--accents-5) !important;
              box-shadow: none !important;
            }

            &--is-focused {
              outline: none !important;
              border: 1px solid ${error ? `var(--error)` : `var(--accents-5)`} !important;
              box-shadow: none !important;
            }
          }

          &__dropdown-indicator {
            padding: var(--space-3x) !important;
          }

          &__menu {
            z-index: 10 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            &-notice {
              font-size: var(--size-xs) !important;
            }
            margin-top: 0 !important;
            box-shadow: rgba(0, 0, 0, 0.12) 0px 30px 60px !important;
            &-list {
              padding: 0 !important;
            }
            &-notice--no-options {
              text-align: left !important;
            }
          }
          &__option {
            font-size: var(--size-xs) !important;
            background-color: var(--background) !important;
            color: var(--base) !important;
            padding: var(--space-2x) var(--space-3x) !important;
            &--is-focused {
              background-color: var(--background-light) !important;
              color: var(--base) !important;
            }
            &--is-selected {
              background-color: var(--accents-2) !important;
              color: var(--base) !important;
            }
          }

          &__single-value {
            position: initial !important;
            transform: translateY(0%) !important;
          }
          &__value-container {
            &--is-multi {
              flex-direction: row !important;
              justify-content: flex-start !important;
            }
          }

          &__multi-value {
            background-color: var(--foreground) !important;
            border-radius: var(--radius) !important;
            &__label {
              color: var(--base-inverse) !important;
              font-size: var(--size-xs) !important;
            }
            &__remove {
              cursor: pointer !important;
              background-color: var(--foreground) !important;
              color: var(--base-inverse) !important;
              transition: all 140ms, fill 140ms;
              border-radius: var(--radius) !important;
              border: 3px solid transparent !important;

              &:hover {
                background-color: var(--background) !important;
                border: 3px solid var(--foreground) !important;
                color: var(--base) !important;
              }
            }
          }
        }
      `}</style>
    </div>
  );
};

export default Select;
