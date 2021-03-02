import SliderMain from './Slider';
import type { SliderComponentType } from './type';
import { Slider as NBSlider } from 'native-base';

let SliderTemp: any = SliderMain;
SliderTemp.Thumb = NBSlider.Thumb;
SliderTemp.Track = NBSlider.Track;
SliderTemp.FilledTrack = NBSlider.FilledTrack;

// To add typings
const Slider = SliderTemp as SliderComponentType;

export { Slider };
