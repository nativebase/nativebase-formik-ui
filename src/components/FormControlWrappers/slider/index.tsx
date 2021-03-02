import { Slider as NBSlider, ISliderProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';
import { FormControl } from '../../form-control';
import { getLayoutProps } from '../../../utils';

export type SliderProps = BaseProps & {
  sliderProps?: ISliderProps;
  children: ReactNode;
};

export const SliderControl: FC<SliderProps> = (props: SliderProps) => {
  const { name, label, children, sliderProps, ...rest } = props;
  const [layoutProps, remainingProps] = getLayoutProps(rest);
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();
  const defaultProps = { mt: 2 };

  return (
    <FormControl name={name} label={label} {...layoutProps}>
      <NBSlider
        defaultValue={field.value}
        onChange={(v: any) => {
          setFieldValue(name, v);
        }}
        {...defaultProps}
        {...sliderProps}
        {...remainingProps}
      >
        {children}
      </NBSlider>
    </FormControl>
  );
};
export default SliderControl;
