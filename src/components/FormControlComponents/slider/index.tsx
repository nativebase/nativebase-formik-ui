import { Slider as NBSlider, ISliderProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';

import { SliderTrack, SliderFilledTrack, SliderThumb } from 'native-base';

type SliderProps = BaseProps & {
  sliderProps?: ISliderProps;
  children: ReactNode;
};

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
export { SliderTrack, SliderFilledTrack, SliderThumb };
export default Slider;
