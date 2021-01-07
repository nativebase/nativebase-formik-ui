import {
  NumberInput as NBNumberInput,
  NumberInputField,
  INumberInputProps,
  INumberInputFieldProps,
} from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps } from '../props';
import { FormControl } from '../form-control';
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

export const NumberInput: FC<NumberInputProps> = (props: NumberInputProps) => {
  const {
    name,
    label,
    children,
    numberInputProps,
    numberInputFieldProps,
    ...rest
  } = props;
  const [field, { error }] = useField(name);
  const { handleChange } = useFormikContext();

  return (
    <FormControl name={name} label={label} {...rest}>
      <NBNumberInput
        value={field.value}
        onChange={handleChange(name)}
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
export default NumberInput;
