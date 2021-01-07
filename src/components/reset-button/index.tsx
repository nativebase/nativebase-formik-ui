import { Button, IButtonProps } from 'native-base';
import { useFormikContext } from 'formik';
import React, { FC } from 'react';
import { ButtonGroup } from 'native-base';

export type ResetButtonProps = IButtonProps;

export const ResetButton: FC<ResetButtonProps> = (props: ResetButtonProps) => {
  const { children, ...rest } = props;
  const { isSubmitting, dirty, resetForm } = useFormikContext();

  return (
    <Button
      onPress={() => resetForm()}
      isDisabled={isSubmitting || !dirty}
      {...rest}
    >
      {children}
    </Button>
  );
};
export { ButtonGroup };
export default ResetButton;
