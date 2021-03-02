import {
  FormControl as NBFormControl,
  IFormControlProps as NBFormControlProps,
} from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import type { BaseProps } from '../props';

export type FormControlProps = Omit<BaseProps, 'label'> &
  NBFormControlProps & { label?: string; isTouchedRequired?: boolean };

export const FormControl: FC<FormControlProps> = (props: FormControlProps) => {
  const { children, name, label, helper, ...rest } = props;
  const [, { error }] = useField(name);
  const { isSubmitting } = useFormikContext();

  return (
    <NBFormControl isInvalid={!!error} isDisable={isSubmitting} {...rest}>
      {label && <NBFormControl.Label>{label}</NBFormControl.Label>}
      {children}
      {helper && <NBFormControl.HelperText>{helper}</NBFormControl.HelperText>}
      {error && (
        <NBFormControl.ErrorMessage>{error}</NBFormControl.ErrorMessage>
      )}
    </NBFormControl>
  );
};

export default FormControl;
