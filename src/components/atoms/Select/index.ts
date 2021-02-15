import {
  Props as ReactSelectProps,
  OptionTypeBase,
  ValueType as ValueTypeBase,
  ActionMeta,
  InputActionMeta,
} from 'react-select';
import { Props as ReactSelectCreatableProps } from 'react-select/creatable';
import countries from './SelectCountry.data';

export interface OptionType extends OptionTypeBase {
  value?: string;
  label?: string;
}

export type ValueType = ValueTypeBase<OptionType>;
export type onChangeType = (value: ValueType, action?: ActionMeta<OptionType>) => void;
export type onInputChangeType = (newValue: string, actionMeta: InputActionMeta) => void;

export interface SelectProps
  extends ReactSelectProps<OptionType>,
    ReactSelectCreatableProps<OptionType> {
  isCreatable?: boolean;
  options?: OptionType[];
  onChange?: onChangeType;
  onInputChange?: onInputChangeType;
  error?: string | boolean | null;
}

export type CountriesType = keyof typeof countries;

export type CountryValueType = {
  value: CountriesType | string;
  label: string;
} | null;
