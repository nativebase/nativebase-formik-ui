import { RadioGroup as NBRadioGroup, IRadioGroupProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';
import { FormControl } from '../../form-control';
import { Radio, HStack, VStack, Stack } from 'native-base';

export type RadioGroupProps = BaseProps & {
  radioGroupProps?: IRadioGroupProps;
  children: ReactNode;
};

export const RadioGroupControl: FC<RadioGroupProps> = (
  props: RadioGroupProps
) => {
  const {
    name,
    label,
    radioGroupProps,
    children,
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
  const { setFieldValue } = useFormikContext();
  const handleChange = (value: string) => {
    setFieldValue(name, value);
  };
  const defaultProps = { mt: 2 };

  return (
    <FormControl name={name} label={label} {...layoutProps}>
      <NBRadioGroup
        value={field.value}
        onChange={handleChange}
        {...defaultProps}
        {...radioGroupProps}
        {...rest}
      >
        {children}
      </NBRadioGroup>
    </FormControl>
  );
};
export { Radio, HStack, VStack, Stack };
export default RadioGroupControl;
