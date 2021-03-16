import {
  NumberInput as NBNumberInput,
  NumberInputField,
  INumberInputProps,
  INumberInputFieldProps,
} from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';
import {
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from 'native-base';

type NumberInputProps = BaseProps & {
  numberInputProps?: INumberInputProps;
  numberInputFieldProps?: INumberInputFieldProps;
  showStepper?: boolean;
  children?: ReactNode;
};

export const NumberInput: FC<NumberInputProps> = (props: NumberInputProps) => {
  const {
    name,
    children,
    numberInputProps,
    numberInputFieldProps,
    ...rest
  } = props;
  const [field, { error }] = useField(name);
  const { handleChange } = useFormikContext();

  return (
    <NBNumberInput value={field.value} {...numberInputProps} {...rest}>
      <NumberInputField
        isInvalid={!!error}
        onChange={handleChange(name)}
        {...numberInputFieldProps}
      />
      {children}
    </NBNumberInput>
  );
};
export { NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper };
export default NumberInput;
