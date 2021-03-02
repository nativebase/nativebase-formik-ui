import { TextArea as NBTextArea, IInputProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import type { BaseProps } from '../../props';
import { FormControl } from '../../form-control';
import { getLayoutProps } from '../../../utils';

type TextAreaProps = BaseProps & { TextAreaProps?: IInputProps };

export const TextAreaControl: FC<TextAreaProps> = (props: TextAreaProps) => {
  const { name, TextAreaProps, label, ...rest } = props;
  const [field] = useField(name);
  const { handleChange, handleBlur, setFieldTouched }: any = useFormikContext();
  const [layoutProps, remainingProps] = getLayoutProps(rest);
  const defaultProps = { mt: 2 };
  return (
    <FormControl name={name} label={label} {...layoutProps}>
      <NBTextArea
        value={field.value}
        {...TextAreaProps}
        {...defaultProps}
        {...remainingProps}
        onChangeText={handleChange(name)}
        onBlur={() => {
          setFieldTouched(name);
          handleBlur(name);
        }}
      />
    </FormControl>
  );
};

export default TextAreaControl;
