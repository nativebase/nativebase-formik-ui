import type { IRadioGroupProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';
import { Radio, HStack, VStack, Stack } from 'native-base';

type RadioGroupProps = BaseProps & {
  radioGroupProps?: IRadioGroupProps;
  children: ReactNode;
};

export const RadioGroup: FC<RadioGroupProps> = (props: RadioGroupProps) => {
  const { name, radioGroupProps, children, ...rest } = props;
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();
  const handleChange = (value: string) => {
    setFieldValue(name, value);
  };

  return (
    <Radio.Group
      value={field.value}
      onChange={handleChange}
      {...radioGroupProps}
      {...rest}
    >
      {children}
    </Radio.Group>
  );
};
export { Radio, HStack, VStack, Stack };
export default RadioGroup;
