import React, { useState, ReactElement } from 'react';
import Select from '../Select/Select';
import { SelectProps, onChangeType, onInputChangeType, ValueType, OptionType } from '../Select';
import { KeyboardEventHandler, OptionsType, FocusEventHandler } from 'react-select';

type isValidNewOption = (
  inputValue: string,
  value: ValueType,
  options: OptionsType<OptionType>
) => boolean;

type SelectKeywordsProps = {
  error?: string | boolean | null;
} & Pick<SelectProps, 'onChange' | 'value' | 'options' | 'onFocus' | 'onBlur'>;

const SelectKeywords = ({
  onChange,
  value = [],
  options = [],
  onFocus,
  onBlur,
  error = null,
}: SelectKeywordsProps): ReactElement => {
  const [keywordValue, setKeywordValue] = useState<string>('');

  const handleOnChange: onChangeType = (value, action) => {
    if (typeof onChange === 'function') onChange(value, action);
    setKeywordValue('');
  };

  const validateNewOption: isValidNewOption = (inputValue, selectValue) => {
    // cannot already exist
    const alreadyExists = selectValue?.find(({ value }: { value: string }) => inputValue === value);
    // must be a string
    const isValid = typeof inputValue === 'string' && inputValue.trim().length > 0;
    return !alreadyExists && isValid;
  };

  const addKeyword = () => {
    if (validateNewOption(keywordValue, value, [])) {
      const newValue = {
        label: keywordValue,
        value: keywordValue,
        __isNew__: true,
      };
      if (value instanceof Array) handleOnChange([...value, newValue], { action: 'set-value' });
      if (value === null) handleOnChange([newValue], { action: 'set-value' });
    }
  };

  const handleKeyDown: KeyboardEventHandler = (evt) => {
    // add on comma
    if (evt.key === ',') {
      addKeyword();
    }
  };

  const handleInputChange: onInputChangeType = (newValue): void => {
    if (newValue === ',') return;
    setKeywordValue(newValue);
  };

  // only show no options message on the first input
  const computeNoOptionsMessage = ({ inputValue }: { inputValue: string }): string | null => {
    if (inputValue === '' && options.length > 0) return null;
    return `Type a keyword and press 'enter' ↵`;
  };

  const handleBlur: FocusEventHandler = (event) => {
    if (typeof onBlur === 'function') onBlur(event);
    addKeyword();
  };

  return (
    <Select
      error={error}
      onChange={handleOnChange}
      onInputChange={handleInputChange}
      inputValue={keywordValue}
      value={value}
      options={options}
      defaultValue={null}
      isClearable={false}
      onKeyDown={handleKeyDown}
      placeholder="Insert keywords here"
      noOptionsMessage={computeNoOptionsMessage}
      formatCreateLabel={(value: string): ReactElement => (
        <>
          <span className="light">Add keyword: &quot;</span>
          {value}
          <span className="light">&quot;</span>
        </>
      )}
      isValidNewOption={validateNewOption}
      onFocus={typeof onFocus === 'function' ? onFocus : (): null => null}
      onBlur={handleBlur}
      isMulti
      isCreatable
    />
  );
};

export default SelectKeywords;
