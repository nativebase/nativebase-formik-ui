import { Button, IButtonProps } from 'native-base';
import { useFormikContext } from 'formik';
import React, { FC } from 'react';

export type SubmitButtonProps = IButtonProps;

export const SubmitButton: FC<SubmitButtonProps> = (
  props: SubmitButtonProps
) => {
  const { children, ...rest } = props;
  const { isSubmitting, handleSubmit } = useFormikContext();

  return (
    <Button isLoading={isSubmitting} onPress={handleSubmit} {...rest}>
      {children}
    </Button>
  );
};

export default SubmitButton;
