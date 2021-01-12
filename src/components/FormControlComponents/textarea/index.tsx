import { TextArea as NBTextArea, IInputProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import type { BaseProps } from '../../props';

type TextAreaProps = BaseProps & { TextAreaProps?: IInputProps };

export const TextArea: FC<TextAreaProps> = (props: TextAreaProps) => {
  const { name, TextAreaProps, ...rest } = props;
  const [field] = useField(name);
  const { handleChange, handleBlur, setFieldTouched }: any = useFormikContext();
  return (
    <NBTextArea
      value={field.value}
      {...TextAreaProps}
      {...rest}
      onChangeText={handleChange(name)}
      onBlur={() => {
        setFieldTouched(name);
        handleBlur(name);
      }}
    />
  );
};

export default TextArea;
