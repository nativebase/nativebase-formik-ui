import { PinInput as NBPinInput } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import type { PinInputProps } from './type';

export const PinInput: FC<PinInputProps> = (props: PinInputProps, ref: any) => {
  const { name, children, PinInputProps, ...rest } = props;
  const [field, { error }] = useField(name);
  const { handleChange } = useFormikContext();

  return (
    <NBPinInput
      isInvalid={!!error}
      onChange={handleChange(name)}
      value={field.value}
      {...PinInputProps}
      {...rest}
      ref={ref}
    >
      {children}
    </NBPinInput>
  );
};
export default PinInput;
