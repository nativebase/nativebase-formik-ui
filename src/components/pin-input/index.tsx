import { PinInput, IPinInputProps, Box, Text } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps } from '../props';

export type PinInputControlProps = BaseProps & {
  pinInputProps?: IPinInputProps;
  showStepper?: boolean;
  children?: ReactNode;
};

export const PinInputControl: FC<PinInputControlProps> = (
  props: PinInputControlProps
) => {
  const { name, children, pinInputProps, ...rest } = props;
  const [field, { error }] = useField(name);
  const { handleChange } = useFormikContext();

  return (
    <Box>
      <PinInput
        value={field.value}
        {...pinInputProps}
        onChange={handleChange(name)}
        {...pinInputProps}
        {...rest}
      >
        {children}
      </PinInput>
      Field.value = {field.value}
      {error && <Text color="red.400">{error}</Text>}
    </Box>
  );
};

export default PinInputControl;
