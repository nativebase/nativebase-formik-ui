import { Switch, ISwitchProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import type { BaseProps } from '../../props';
import { FormControl } from '../../form-control';

export type SwitchControlProps = BaseProps & { switchProps?: ISwitchProps };

export const SwitchControl: FC<SwitchControlProps> = (
  props: SwitchControlProps
) => {
  const {
    name,
    label,
    switchProps,
    m,
    margin,
    mt,
    marginTop,
    mb,
    marginBottom,
    mr,
    marginRight,
    ml,
    marginLeft,
    mx,
    marginX,
    my,
    marginY,
    position,
    right,
    left,
    bottom,
    top,
    isRequired,
    ...rest
  } = props;
  const layoutProps = {
    m,
    margin,
    mt,
    marginTop,
    mb,
    marginBottom,
    mr,
    marginRight,
    ml,
    marginLeft,
    mx,
    marginX,
    my,
    marginY,
    position,
    right,
    left,
    bottom,
    top,
    isRequired,
  };
  const { setFieldValue } = useFormikContext();
  const [field, { error }] = useField(name);
  const defaultProps = { mt: 2 };

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
        {...rest}
        {...switchProps}
      />
    </FormControl>
  );
};

export default SwitchControl;
