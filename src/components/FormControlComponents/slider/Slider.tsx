import { Slider as NBSlider } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import type { SliderProps } from './type';

export const Slider: FC<SliderProps> = (props: SliderProps) => {
  const { name, children, sliderProps, ...rest } = props;
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  return (
    <NBSlider
      defaultValue={field.value}
      onChange={(v: any) => {
        setFieldValue(name, v);
      }}
      {...sliderProps}
      {...rest}
    >
      {children}
    </NBSlider>
  );
};
export default Slider;
