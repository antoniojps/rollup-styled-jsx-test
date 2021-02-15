import React, { ReactElement } from 'react';
import { useField } from 'formik';
import Input from '../Input/Input';
import Description from '../Description/Description';
import { InputCustomType } from '../Input/Input';
import { Spacer } from '@geist-ui/react';
import { FieldProps } from './types';

type FieldInputProps = FieldProps & InputCustomType;

const FieldInput = ({ title, ...props }: FieldInputProps): ReactElement => {
  const [field, { error, touched }] = useField(props.name);

  return (
    <div className="input">
      {title && <Description>{title}</Description>}
      <Input {...field} {...props} error={error && touched ? error : null} />
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

export default FieldInput;
