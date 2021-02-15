import React, { ReactElement } from 'react';
import { Input, Spacer, Text } from '@geist-ui/react';

type InputType = {
  error?: string | null;
  isPassword?: boolean;
};

export type InputCustomType = InputType & React.ComponentProps<typeof Input>;

const InputCustom = ({
  error = null,
  status = 'default',
  isPassword = false,
  ...inputProps
}: InputCustomType): ReactElement => {
  const hasError = Boolean(error);
  return (
    <>
      {isPassword ? (
        <Input.Password width="100%" status={hasError ? 'error' : status} {...inputProps} />
      ) : (
        <Input width="100%" status={hasError ? 'error' : status} {...inputProps} />
      )}
      {hasError && (
        <>
          <Spacer y={0.4} />
          <Text small type="error" size="var(--size-xs2)">
            {error}
          </Text>
        </>
      )}
    </>
  );
};

export default InputCustom;
