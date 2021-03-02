import { Checkbox, ICheckboxProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps, LayoutProps } from '../../props';
import { FormControl } from '../../form-control';
import { getLayoutProps } from '../../../utils';
export type CheckboxControlProps = BaseProps & {
  checkBoxProps?: ICheckboxProps;
  children: ReactNode;
  layoutProps?: LayoutProps;
};

export const CheckboxControl: FC<CheckboxControlProps> = (
  props: CheckboxControlProps
) => {
  const { name, label, children, checkBoxProps, ...rest } = props;

  const { setFieldValue, setFieldTouched, handleBlur } = useFormikContext();
  const [field, { error }] = useField(name);
  const isChecked = field.value;
  const [layoutProps, remainingProps] = getLayoutProps(rest);
  const defaultProps = { mt: 2 };
  return (
    <FormControl name={name} label={label} {...layoutProps}>
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
        {...defaultProps}
        {...checkBoxProps}
        {...remainingProps}
      >
        {children}
      </Checkbox>
    </FormControl>
  );
};
