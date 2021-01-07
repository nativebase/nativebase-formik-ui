import { TextArea as NBTextArea, IInputProps } from 'native-base';
import { useField, useFormikContext } from 'formik';
import React, { FC } from 'react';
import type { BaseProps } from '../props';
import { FormControl } from '../form-control';

export type TextAreaProps = BaseProps & { TextAreaProps?: IInputProps };

export const TextArea: FC<TextAreaProps> = (props: TextAreaProps) => {
  const {
    name,
    TextAreaProps,
    isRequired,
    label,
    mt,
    m,
    mr,
    ml,
    my,
    mx,
    ...rest
  } = props;
  const [field] = useField(name);
  const { handleChange, handleBlur, setFieldTouched }: any = useFormikContext();
  return (
    <FormControl
      name={name}
      isRequired={isRequired}
      label={label}
      {...{ mt, m, mr, ml, my, mx }}
    >
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
    </FormControl>
  );
};

export default TextArea;
