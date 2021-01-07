import { Input as NBInput, IInputProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import type { BaseProps } from '../props';
import { FormControl } from '../form-control';
export type InputProps = BaseProps & { inputProps?: IInputProps };

export const Input: FC<InputProps> = (props: InputProps) => {
  const { name, inputProps, ...rest } = props;
  const [field] = useField(name);
  const { handleChange, handleBlur, setFieldTouched }: any = useFormikContext();
  return (
    <FormControl name={name} {...rest}>
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
    </FormControl>
  );
};

export default Input;
