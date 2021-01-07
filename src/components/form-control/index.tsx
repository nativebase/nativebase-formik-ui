import {
  FormControl as NBFormControl,
  IFormControlProps as NBFormControlProps,
  FormErrorMessage,
  FormLabel,
  FormHelperText,
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
      {label && <FormLabel>{label}</FormLabel>}
      {children}
      {helper && <FormHelperText>{helper}</FormHelperText>}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </NBFormControl>
  );
};

export default FormControl;
