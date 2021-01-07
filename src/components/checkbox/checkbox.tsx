import { Checkbox, ICheckboxProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

export type CheckboxControlProps = Overwrite<
  ICheckboxProps,
  { value: string | number }
> & { name: string; label?: string };

export const CheckboxControl: FC<CheckboxControlProps> = (
  props: CheckboxControlProps
) => {
  const { name, children, ...rest } = props;
  const {
    setFieldValue,
    setFieldTouched,
    handleBlur,
    // handleChange,
    // values,
  } = useFormikContext();
  const [field, { error }] = useField(name);
  let isChecked;
  if (field.value instanceof Array) {
    isChecked = field.value.includes(props.value) ?? false;
  }
  // console.log(field, 'inside checkbox');
  // console.log(values);

  return (
    <Checkbox
      isInvalid={!!error}
      isChecked={isChecked}
      //   value={field.value}
      onChange={() => {
        setFieldValue(name, rest.value);
      }}
      //   onChange={field.onChange(name)}
      onBlur={() => {
        setFieldTouched(name);
        handleBlur(name);
      }}
      {...rest}
    >
      {children}
    </Checkbox>
  );
};

export default CheckboxControl;
