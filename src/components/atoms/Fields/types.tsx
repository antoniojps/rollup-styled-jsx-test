export type FieldProps = {
  name: string;
  title?: string;
  type?: string;
  placeholder?: string;
};

export type SelectOption = {
  value: string;
  label?: string;
} | null;
