import { Input as NBInput, IInputProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import type { BaseProps } from '../../props';
export type InputProps = BaseProps & { inputProps?: IInputProps };

export const Input: FC<InputProps> = (props: InputProps) => {
  const { name, inputProps, ...rest } = props;
  const [field] = useField(name);
  const { handleChange, handleBlur, setFieldTouched }: any = useFormikContext();
  return (
    <NBInput
      value={field.value}
      {...inputProps}
      {...rest}
      onChangeText={handleChange(name)}
      onBlur={() => {
        setFieldTouched(name);
        handleBlur(name);
      }}
    />
  );
};

export default Input;
