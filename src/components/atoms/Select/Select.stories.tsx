import React, { ReactElement } from 'react';
import Select from './Select';
import { ValueType, CountryValueType } from './';
import SelectKeywords from './SelectKeywords';
import SelectCountry from './SelectCountry';

export default {
  title: 'atoms/Select',
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const Basic = (): ReactElement => {
  const [value, setValue] = React.useState<ValueType>(null);
  React.useEffect(() => {
    console.log(value);
  }, [value]);

  return <Select options={options} onChange={setValue} defaultMenuIsOpen />;
};

export const Multiple = (): ReactElement => {
  const [value, setValue] = React.useState<ValueType>([]);
  React.useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Select
      options={options}
      onChange={setValue}
      value={value}
      defaultValue={[options[0]]}
      isMulti
      isClearable={false}
      closeMenuOnSelect={false}
    />
  );
};

export const Creatable = (): ReactElement => {
  const [value, setValue] = React.useState<ValueType>([]);
  React.useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <Select
      isCreatable
      options={options}
      onChange={setValue}
      value={value}
      defaultValue={[options[0]]}
      isMulti
      isClearable={false}
      closeMenuOnSelect={false}
    />
  );
};

export const Keywords = (): ReactElement => {
  const [value, setValue] = React.useState<ValueType>([{ label: 'keyword a', value: 'keyword a' }]);
  React.useEffect(() => {
    console.log(value);
  }, [value]);

  return <SelectKeywords onChange={setValue} value={value} />;
};

export const Country = (): ReactElement => {
  const [value, setValue] = React.useState<CountryValueType>({ label: 'Portugal', value: 'PT' });
  React.useEffect(() => {
    console.log(value);
  }, [value]);

  return <SelectCountry value={value} onChange={setValue} />;
};
