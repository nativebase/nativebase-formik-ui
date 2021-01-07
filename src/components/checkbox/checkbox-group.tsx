import { Stack } from 'native-base';
import React, { FC, ReactNode } from 'react';
import type { BaseProps } from '../props';

export type CheckboxContainerProps = BaseProps & {
  children: ReactNode;
};

export const CheckboxContainer: FC<CheckboxContainerProps> = (
  props: CheckboxContainerProps
) => {
  const { children, ...rest } = props;

  return (
    <Stack pl={6} mt={1} spacing={1} {...rest}>
      {children}
    </Stack>
  );
};

export default CheckboxContainer;
