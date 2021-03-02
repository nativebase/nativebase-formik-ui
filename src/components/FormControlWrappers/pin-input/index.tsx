import { PinInput, IPinInputProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';
import { FormControl } from '../../form-control';
import { getLayoutProps } from '../../../utils';

export type PinInputControlProps = BaseProps & {
  pinInputProps?: IPinInputProps;
  showStepper?: boolean;
  children?: ReactNode;
};

export const PinInputControl: FC<PinInputControlProps> = (
  props: PinInputControlProps
) => {
  const { name, children, label, pinInputProps, ...rest } = props;
  const [field] = useField(name);
  const { handleChange } = useFormikContext();
  const [layoutProps, remainingProps] = getLayoutProps(rest);
  const defaultProps = { mt: 2 };

  return (
    <FormControl name={name} label={label} {...layoutProps}>
      <PinInput
        value={field.value}
        {...pinInputProps}
        {...defaultProps}
        onChange={handleChange(name)}
        {...remainingProps}
      >
        {children}
      </PinInput>
    </FormControl>
  );
};

export default PinInputControl;
