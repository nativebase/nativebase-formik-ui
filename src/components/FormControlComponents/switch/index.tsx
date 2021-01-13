import { Switch as NBSwitch, ISwitchProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import type { BaseProps } from '../../props';

type SwitchControlProps = BaseProps & { switchProps?: ISwitchProps };

export const Switch: FC<SwitchControlProps> = (props: SwitchControlProps) => {
  const { name, switchProps, ...rest } = props;
  const { setFieldValue } = useFormikContext();
  const [field, { error }] = useField(name);

  return (
    <NBSwitch
      isInvalid={!!error}
      isChecked={field.value}
      value={field.value}
      onToggle={() => {
        setFieldValue(name, !field.value);
      }}
      {...rest}
      {...switchProps}
    />
  );
};

export default Switch;
