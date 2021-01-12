import { Checkbox, ICheckboxProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps, LayoutProps } from '../../props';
import { FormControl } from '../../form-control';
export type CheckboxControlProps = BaseProps & {
  checkBoxProps?: ICheckboxProps;
  children: ReactNode;
  layoutProps?: LayoutProps;
};

export const CheckboxControl: FC<CheckboxControlProps> = (
  props: CheckboxControlProps
) => {
  const {
    name,
    label,
    children,
    checkBoxProps,
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
  const { setFieldValue, setFieldTouched, handleBlur } = useFormikContext();
  const [field, { error }] = useField(name);
  const isChecked = field.value;
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
        {...rest}
      >
        {children}
      </Checkbox>
    </FormControl>
  );
};
