import { Checkbox, ICheckboxProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps } from '../props';
import { FormControl } from '../form-control';
export type CheckboxSingleProps = BaseProps & {
  checkBoxProps?: ICheckboxProps;
  children: ReactNode;
};

export const CheckboxSingular: FC<CheckboxSingleProps> = (
  props: CheckboxSingleProps
) => {
  const { name, label, children, checkBoxProps, ...rest } = props;
  const { setFieldValue, setFieldTouched, handleBlur } = useFormikContext();
  const [field, { error }] = useField(name);
  const isChecked = field.value;

  return (
    <FormControl name={name} label={label} {...rest}>
      <Checkbox
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
      </Checkbox>
    </FormControl>
  );
};
