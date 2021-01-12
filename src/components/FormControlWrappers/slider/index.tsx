import { Slider as NBSlider, ISliderProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC, ReactNode } from 'react';
import type { BaseProps } from '../../props';
import { FormControl } from '../../form-control';

import { SliderTrack, SliderFilledTrack, SliderThumb } from 'native-base';

export type SliderProps = BaseProps & {
  sliderProps?: ISliderProps;
  children: ReactNode;
};

export const SliderControl: FC<SliderProps> = (props: SliderProps) => {
  const {
    name,
    label,
    children,
    sliderProps,
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
        {...rest}
      >
        {children}
      </NBSlider>
    </FormControl>
  );
};
export { SliderTrack, SliderFilledTrack, SliderThumb };
export default SliderControl;
