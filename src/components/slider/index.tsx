import { Slider as NBSlider, ISliderProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps } from '../props';
import { FormControl } from '../form-control';

import { SliderTrack, SliderFilledTrack, SliderThumb } from 'native-base';

export type SliderProps = BaseProps & {
  sliderProps?: ISliderProps;
  children: ReactNode;
};

export const Slider: FC<SliderProps> = (props: SliderProps) => {
  const { name, label, children, sliderProps, ...rest } = props;
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  return (
    <FormControl name={name} label={label} {...rest}>
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
    </FormControl>
  );
};
export { SliderTrack, SliderFilledTrack, SliderThumb };
export default Slider;
