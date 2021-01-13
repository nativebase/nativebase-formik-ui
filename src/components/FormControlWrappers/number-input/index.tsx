import {
  NumberInput as NBNumberInput,
  NumberInputField,
  INumberInputProps,
  INumberInputFieldProps,
} from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';
import { FormControl } from '../../form-control';
import {
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from 'native-base';

export type NumberInputProps = BaseProps & {
  numberInputProps?: INumberInputProps;
  numberInputFieldProps?: INumberInputFieldProps;
  showStepper?: boolean;
  children?: ReactNode;
};

export const NumberInputControl: FC<NumberInputProps> = (
  props: NumberInputProps
) => {
  const {
    name,
    label,
    children,
    numberInputProps,
    numberInputFieldProps,
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
  const [field, { error }] = useField(name);
  const { handleChange } = useFormikContext();
  const defaultProps = { mt: 2 };

  return (
    <FormControl name={name} label={label} {...layoutProps}>
      <NBNumberInput
        value={field.value}
        onChange={handleChange(name)}
        {...defaultProps}
        {...numberInputProps}
        {...rest}
      >
        <NumberInputField isInvalid={!!error} {...numberInputFieldProps} />
        {children}
      </NBNumberInput>
    </FormControl>
  );
};
export { NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper };
export default NumberInputControl;
