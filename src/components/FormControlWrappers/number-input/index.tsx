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
import { getLayoutProps } from '../../../utils';

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
    ...rest
  } = props;
  const [field, { error }] = useField(name);
  const [layoutProps, remainingProps] = getLayoutProps(rest);
  const { handleChange } = useFormikContext();
  const defaultProps = { mt: 2 };

  return (
    <FormControl name={name} label={label} {...layoutProps}>
      <NBNumberInput
        value={field.value}
        {...defaultProps}
        {...numberInputProps}
        {...remainingProps}
        handleChange={() => handleChange(name)}
      >
        <NumberInputField
          isInvalid={!!error}
          // onChange={}
          {...numberInputFieldProps}
        />
        {children}
      </NBNumberInput>
    </FormControl>
  );
};
export { NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper };
export default NumberInputControl;
