import React, { ReactElement } from 'react';
import { useField } from 'formik';
import { Spacer, Text } from '@geist-ui/react';
import { FieldProps } from './types';
import Description from '../Description/Description';
import SelectCountry from '../Select/SelectCountry';
import { SelectProps } from '../Select';

const FieldCountry = ({ title, ...props }: FieldProps & SelectProps): ReactElement => {
  const [field, { error, touched }, { setTouched, setValue }] = useField(props.name);
  const hasError = error && touched;

  return (
    <div className="input">
      {title && <Description>{title}</Description>}
      <SelectCountry
        {...field}
        {...props}
        error={hasError}
        onBlur={(): void => setTouched(true)}
        onChange={setValue}
      />
      {hasError && (
        <>
          <Spacer y={0.4} />
          <Text small type="error" size="var(--size-xs2)">
            {error}
          </Text>
        </>
      )}
      <Spacer y={0.8} />
      <style jsx>{`
        .input {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default FieldCountry;
