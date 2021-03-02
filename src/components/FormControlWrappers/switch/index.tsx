import { Switch, ISwitchProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import type { BaseProps } from '../../props';
import { FormControl } from '../../form-control';
import { getLayoutProps } from '../../../utils';

export type SwitchControlProps = BaseProps & { switchProps?: ISwitchProps };

export const SwitchControl: FC<SwitchControlProps> = (
  props: SwitchControlProps
) => {
  const { name, label, switchProps, ...rest } = props;
  const { setFieldValue } = useFormikContext();
  const [field, { error }] = useField(name);
  const defaultProps = { mt: 2 };
  const [layoutProps, remainingProps] = getLayoutProps(rest);

  return (
    <FormControl name={name} label={label} {...layoutProps}>
      <Switch
        isInvalid={!!error}
        isChecked={field.value}
        value={field.value}
        onToggle={() => {
          setFieldValue(name, !field.value);
        }}
        {...defaultProps}
        {...remainingProps}
        {...switchProps}
      />
    </FormControl>
  );
};

export default SwitchControl;
