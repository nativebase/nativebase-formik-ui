import { Checkbox as NBCheckbox, ICheckboxProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';
export type CheckboxSingleProps = BaseProps & {
  checkBoxProps?: ICheckboxProps;
  children: ReactNode;
};

export const Checkbox: FC<CheckboxSingleProps> = (
  props: CheckboxSingleProps
) => {
  const { name, children, checkBoxProps, ...rest } = props;
  const { setFieldValue, setFieldTouched, handleBlur } = useFormikContext();
  const [field, { error }] = useField(name);
  const isChecked = field.value;

  return (
    <NBCheckbox
      isInvalid={!!error}
      isChecked={isChecked}
      value={field.value}
      onChange={() => {
        setFieldValue(name, !field.value);
      }}
      onBlur={() => {
        setFieldTouched(name);
        handleBlur(name);
      }}
      {...checkBoxProps}
      {...rest}
    >
      {children}
    </NBCheckbox>
  );
};
