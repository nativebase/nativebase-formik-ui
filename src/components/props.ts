import type { IFormControlProps } from 'native-base';
export interface BaseProps extends IFormControlProps {
  label?: string;
  name?: any;
}
export interface LayoutProps {
  m?: number | string;
  margin?: number | string;
  mt?: number | string;
  marginTop?: number | string;
  mb?: number | string;
  marginBottom?: number | string;
  mr?: number | string;
  marginRight?: number | string;
  ml?: number | string;
  marginLeft?: number | string;
  mx?: number | string;
  marginX?: number | string;
  my?: number | string;
  marginY?: number | string;
  position?: any;
  right?: number | string;
  left?: number | string;
  bottom?: number | string;
  top?: number | string;
  isRequired?: boolean;
}
