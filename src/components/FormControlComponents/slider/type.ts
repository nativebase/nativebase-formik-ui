import type { BaseProps } from 'src/components/props';
import type { ISliderProps, IBoxProps } from 'native-base';
import type { ReactNode } from 'react';

export type SliderProps = BaseProps & {
  sliderProps?: ISliderProps;
  children: ReactNode;
};
export type SliderComponentType = ((props: SliderProps) => JSX.Element) & {
  Thumb: React.MemoExoticComponent<(props: IBoxProps) => JSX.Element>;
  Track: React.MemoExoticComponent<(props: IBoxProps) => JSX.Element>;
  FilledTrack: React.MemoExoticComponent<(props: IBoxProps) => JSX.Element>;
};
