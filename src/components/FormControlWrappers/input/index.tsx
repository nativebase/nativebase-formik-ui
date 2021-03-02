import { Input, IInputProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import type { BaseProps, LayoutProps } from '../../props';
import { getLayoutProps } from '../../../utils';
import { FormControl } from '../../form-control';
type InputProps = BaseProps & LayoutProps & { inputProps?: IInputProps };

export const InputControl: FC<InputProps> = (props: InputProps) => {
  const { name, label, inputProps, ...rest } = props;

  const [field] = useField(name);
  const { handleChange, handleBlur, setFieldTouched }: any = useFormikContext();
  const [layoutProps, remainingProps] = getLayoutProps(rest);
  const defaultProps = { mt: 2 };
  return (
    <FormControl name={name} label={label} {...layoutProps}>
      <Input
        value={field.value}
        {...inputProps}
        {...defaultProps}
        {...remainingProps}
        onChangeText={handleChange(name)}
        onBlur={() => {
          setFieldTouched(name);
          handleBlur(name);
        }}
      />
    </FormControl>
  );
};

export default InputControl;
