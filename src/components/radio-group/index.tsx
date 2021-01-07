import { RadioGroup as NBRadioGroup, IRadioGroupProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps } from '../props';
import { FormControl } from '../form-control';
import { Radio, HStack, VStack, Stack } from 'native-base';

export type RadioGroupProps = BaseProps & {
  radioGroupProps?: IRadioGroupProps;
  children: ReactNode;
};

export const RadioGroup: FC<RadioGroupProps> = (props: RadioGroupProps) => {
  const { name, label, radioGroupProps, children, ...rest } = props;
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();
  const handleChange = (value: string) => {
    setFieldValue(name, value);
  };

  return (
    <FormControl name={name} label={label} {...rest}>
      <NBRadioGroup
        value={field.value}
        onChange={handleChange}
        {...radioGroupProps}
        {...rest}
      >
        {children}
      </NBRadioGroup>
    </FormControl>
  );
};
export { Radio, HStack, VStack, Stack };
export default RadioGroup;
