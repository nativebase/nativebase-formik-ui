import PinInputMain from './PinInput';
import type { PinInputComponentType } from './type';
import { PinInput as NBPinInput } from 'native-base';

let PinInputTemp: any = PinInputMain;
PinInputTemp.Field = NBPinInput.Field;

// To add typings
const PinInput = PinInputTemp as PinInputComponentType;

export { PinInput };
