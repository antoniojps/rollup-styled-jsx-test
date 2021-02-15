import React, { useMemo, useState, ReactElement } from 'react';
import countries from './SelectCountry.data';
import { CountryValueType } from './';

type SelectCountryProps = {
  value?: CountryValueType;
  onChange: (value: CountryValueType) => void;
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  placeholder?: string;
  name?: string;
  error?: string | boolean | null;
  countriesOptions?: { [key: string]: string };
  disabled?: boolean;
  size?: 'xs' | 'xs2';
};

const DropdownIndicator = (): ReactElement => {
  return (
    <div className="indicator">
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
            padding: var(--space-3x);
            height: 17.5px;
            width: 17.5px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 200ms ease 0s;
            color: inherit;
            stroke: currentcolor;
            padding: var(--space-3x);
          }
        `}</style>
      </svg>
    </div>
  );
};

const SelectCountry = ({
  value,
  onChange,
  placeholder = 'Select a country...',
  onFocus,
  onBlur,
  name = '',
  error = null,
  countriesOptions = countries,
  disabled = false,
  size = 'xs',
}: SelectCountryProps): ReactElement => {
  const [isLoadingFlag, setLoadingFlag] = useState<boolean>(false);
  const computedOptions = useMemo(() => {
    return Object.keys(countriesOptions).map((countryCode) => ({
      value: countryCode,
      label: countriesOptions[countryCode],
    }));
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setLoadingFlag(true);
    const countryKey = event.currentTarget.value;
    onChange({
      value: countryKey,
      label: countriesOptions[countryKey],
    });
  };

  return (
    <div className="select">
      {value && (
        <span className="flag">
          <img
            className={`flag__image ${isLoadingFlag ? 'flag__image--loading' : ''}`}
            src={`/flags/${value.value.toLowerCase()}.svg`}
            alt={value.label}
            onLoad={(): void => {
              setLoadingFlag(false);
            }}
          />
        </span>
      )}
      {/* eslint-disable-next-line jsx-a11y/no-onchange */}
      <select
        name={name}
        onChange={handleChange}
        onFocus={typeof onFocus === 'function' ? onFocus : (): null => null}
        onBlur={typeof onBlur === 'function' ? onBlur : (): null => null}
        value={value ? value.value : 'default'}
        aria-label={'select country'}
      >
        <option value="default" disabled>
          {placeholder}
        </option>
        {computedOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {!disabled && (
        <div className="arrow">
          <DropdownIndicator />
        </div>
      )}
      <style jsx>{`
        .select {
          box-sizing: initial !important;
          appearance: none;
          display: inline-flex;
          text-transform: uppercase;
          user-select: none;
          position: relative;
          white-space: nowrap;
          width: 100%;
          outline: none;
          overflow: hidden;
          transition: border 0.2s ease 0s, color 0.2s ease-out 0s, box-shadow 0.2s ease 0s;
          border-radius: 4px;
          color: #000;
          border: 1px solid ${error ? `var(--error)` : `var(--border)`};
          transition: border 0.2s ease 0s, color 0.2s ease 0s;
          pointer-events: ${disabled ? 'none' : 'auto'};

          &:hover {
            border: 1px solid ${error ? `var(--error)` : `var(--border)`};
            box-shadow: none;
          }

          &:focus,
          &:focus-within {
            border: 1px solid ${error ? `var(--error)` : `var(--accents-5)`} !important;
            box-shadow: none;
          }
        }
        .flag {
          position: absolute;
          left: 0px;
          height: 100%;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-left: var(--space-3x);

          img {
            width: auto !important;
          }

          &__image {
            height: var(--size-xs);
            background-color: var(--accents-2);
            opacity: 1;
            transition: opacity 200ms;
          }
          &__image--loading {
            opacity: 0;
          }
        }
        .arrow {
          position: absolute;
          right: 0px;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border 0.2s ease 0s;
          background-color: var(--background);
        }

        select {
          cursor: pointer;
          appearance: none;
          height: 100%;
          box-shadow: none;
          color: #000;
          font-size: ${`var(--size-${size})`};
          width: 100%;
          min-width: 75px;
          text-transform: none;
          text-rendering: initial;
          border-width: initial;
          border-style: none;
          border-color: initial;
          border-image: initial;
          padding: var(--space-2x) var(--space-3x);
          ${value ? 'padding-left: calc(4 * var(--space-3x));' : ''}
        }
      `}</style>
    </div>
  );
};

export default SelectCountry;
