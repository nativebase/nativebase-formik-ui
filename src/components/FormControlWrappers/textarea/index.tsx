import { TextArea as NBTextArea, IInputProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import type { BaseProps } from '../../props';
import { FormControl } from '../../form-control';

type TextAreaProps = BaseProps & { TextAreaProps?: IInputProps };

export const TextAreaControl: FC<TextAreaProps> = (props: TextAreaProps) => {
  const {
    name,
    TextAreaProps,
    label,
    m,
    margin,
    mt,
    marginTop,
    mb,
    marginBottom,
    mr,
    marginRight,
    ml,
    marginLeft,
    mx,
    marginX,
    my,
    marginY,
    position,
    right,
    left,
    bottom,
    top,
    isRequired,
    ...rest
  } = props;
  const [field] = useField(name);
  const { handleChange, handleBlur, setFieldTouched }: any = useFormikContext();
  const layoutProps = {
    m,
    margin,
    mt,
    marginTop,
    mb,
    marginBottom,
    mr,
    marginRight,
    ml,
    marginLeft,
    mx,
    marginX,
    my,
    marginY,
    position,
    right,
    left,
    bottom,
    top,
    isRequired,
  };
  const defaultProps = { mt: 2 };
  return (
    <FormControl name={name} label={label} {...layoutProps}>
      <NBTextArea
        value={field.value}
        {...TextAreaProps}
        {...defaultProps}
        {...rest}
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
