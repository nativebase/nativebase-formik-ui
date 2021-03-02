import type { IRadioGroupProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';
import { FormControl } from '../../form-control';
import { Radio, HStack, VStack, Stack } from 'native-base';
import { getLayoutProps } from '../../../utils';

export type RadioGroupProps = BaseProps & {
  radioGroupProps?: IRadioGroupProps;
  children: ReactNode;
};

export const RadioGroupControl: FC<RadioGroupProps> = (
  props: RadioGroupProps
) => {
  const { name, label, radioGroupProps, children, ...rest } = props;
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();
  const handleChange = (value: string) => {
    setFieldValue(name, value);
  };
  const [layoutProps, remainingProps] = getLayoutProps(rest);
  const defaultProps = { mt: 2 };

  return (
    <FormControl name={name} label={label} {...layoutProps}>
      <Radio.Group
        value={field.value}
        onChange={handleChange}
        {...defaultProps}
        {...radioGroupProps}
        {...remainingProps}
      >
        {children}
      </Radio.Group>
    </FormControl>
  );
};
export { Radio, HStack, VStack, Stack };
export default RadioGroupControl;
