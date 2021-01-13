import { Select as NBSelect, ISelectProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';
import { FormControl } from '../../form-control';
import { Select, Icon } from 'native-base';

type SelectProps = BaseProps & {
  selectProps?: ISelectProps;
  children: ReactNode;
};

export const SelectControl: FC<SelectProps> = (props: SelectProps) => {
  const {
    name,
    selectProps,
    children,
    label,
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
  const { handleChange, setFieldTouched, handleBlur } = useFormikContext();
  const defaultProps = { mt: 2 };

  return (
    <FormControl name={name} label={label} {...layoutProps}>
      <NBSelect
        selectedValue={field.value}
        onValueChange={handleChange(name)}
        onFocus={() => {
          setFieldTouched(name);
          handleBlur(name);
        }}
        {...defaultProps}
        {...selectProps}
        {...rest}
      >
        {children}
      </NBSelect>
    </FormControl>
  );
};
export { Select, Icon };
export default SelectControl;
