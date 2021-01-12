import { Select as NBSelect, ISelectProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';
// import { FormControl } from '../form-control';
import { Select, Icon } from 'native-base';

export type SelectProps = BaseProps & {
  selectProps?: ISelectProps;
  children: ReactNode;
};

export const SelectFormik: FC<SelectProps> = (props: SelectProps) => {
  const { name, selectProps, children, ...rest } = props;
  const [field] = useField(name);
  const { handleChange, setFieldTouched, handleBlur } = useFormikContext();

  return (
    // <FormControl name={name} {...rest}>
    <NBSelect
      selectedValue={field.value}
      onValueChange={handleChange(name)}
      onFocus={() => {
        setFieldTouched(name);
        handleBlur(name);
      }}
      {...selectProps}
      {...rest}
    >
      {children}
    </NBSelect>
    // </FormControl>
  );
};
export { Select, Icon };
export default SelectFormik;
