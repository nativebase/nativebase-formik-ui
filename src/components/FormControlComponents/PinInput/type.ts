import type { BaseProps } from 'src/components/props';
import type { IInputProps, IPinInputProps } from 'native-base';
import type { ReactNode } from 'react';

export type PinInputProps = BaseProps & {
  PinInputProps?: IPinInputProps;
  children?: ReactNode;
};
export type PinInputComponentType = ((props: PinInputProps) => JSX.Element) & {
  Field: React.MemoExoticComponent<(props: IInputProps) => JSX.Element>;
};
