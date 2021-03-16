import { PinInput as NBPinInput } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React from 'react';
import type { PinInputProps } from './type';

export const PinInput = React.forwardRef((props: PinInputProps, ref: any) => {
  const { name, children, pinInputProps, ...rest } = props;
  const [field, { error }] = useField(name);
  const { handleChange } = useFormikContext();

  return (
    <NBPinInput
      isInvalid={!!error}
      onChange={handleChange(name)}
      value={field.value}
      {...pinInputProps}
      {...rest}
      ref={ref}
    >
      {children}
    </NBPinInput>
  );
});
export default React.memo(PinInput);
