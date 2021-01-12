import { Input, IInputProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import type { BaseProps, LayoutProps } from '../../props';
import { FormControl } from '../../form-control';
type InputProps = BaseProps & LayoutProps & { inputProps?: IInputProps };

export const InputControl: FC<InputProps> = (props: InputProps) => {
  const {
    name,
    label,
    inputProps,
    m,
    margin,
    mt,
    marginTop,
    mb,
    marginBottom,
    mr,
    marginRight,
    ml,
    marginLeft,
    mx,
    marginX,
    my,
    marginY,
    position,
    right,
    left,
    bottom,
    top,
    isRequired,
    ...rest
  } = props;
  const layoutProps = {
    m,
    margin,
    mt,
    marginTop,
    mb,
    marginBottom,
    mr,
    marginRight,
    ml,
    marginLeft,
    mx,
    marginX,
    my,
    marginY,
    position,
    right,
    left,
    bottom,
    top,
    isRequired,
  };
  const [field] = useField(name);
  const { handleChange, handleBlur, setFieldTouched }: any = useFormikContext();
  const defaultProps = { mt: 2 };
  return (
    <FormControl name={name} label={label} {...layoutProps}>
      <Input
        value={field.value}
        {...inputProps}
        {...defaultProps}
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

export default InputControl;
