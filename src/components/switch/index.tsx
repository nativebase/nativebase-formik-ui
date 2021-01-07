import { Switch, ISwitchProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import type { BaseProps } from '../props';
import { FormControl } from '../form-control';

export type SwitchControlProps = BaseProps & { switchProps?: ISwitchProps };

export const SwitchControl: FC<SwitchControlProps> = (
  props: SwitchControlProps
) => {
  const { name, switchProps, ...rest } = props;
  const { setFieldValue } = useFormikContext();
  const [field, { error }] = useField(name);

  return (
    <FormControl name={name} isTouchedRequired={false} {...rest}>
      <Switch
        isInvalid={!!error}
        isChecked={field.value}
        value={field.value}
        onToggle={() => {
          setFieldValue(name, !field.value);
        }}
        {...switchProps}
      />
    </FormControl>
  );
};

export default SwitchControl;
