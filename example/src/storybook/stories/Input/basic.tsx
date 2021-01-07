import React from 'react';
import {
  Input,
  NumberInput,
  CheckboxSingular,
  TextArea,
  SwitchControl,
  SelectControlled,
  Slider,
  SubmitButton,
  ResetButton,
  RadioGroup,
  Select,
  Icon,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Radio,
  HStack,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box,
  Text,
} from 'nativebase-formik-ui';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: Yup.string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  age: Yup.number().min(
    18,
    ({ min }) => `Age must be at least ${min} years old`
  ),
  employed: Yup.boolean().equals([true]),
  notes: Yup.string().required(),
  employer: Yup.boolean().equals([true]),
  increment: Yup.number()
    .required()
    .min(40, ({ min }) => `Increment must be at least ${min}%`),
  color: Yup.string().required(),
});

export default function () {
  const onSubmit = async (values: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        age: 0,
        employed: true,
        notes: '',
        employer: false,
        increment: 20,
        color: '',
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <Box>
          <Input
            mt={4}
            name="email"
            label="Email Address"
            placeholder="jane.doe@example.com"
          />
          <Input
            mt={4}
            name="password"
            label="Password"
            type="password"
            placeholder="MyPassword"
          />
          <NumberInput mt={4} name="age" label="Age?">
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <CheckboxSingular name="employed" mt={4}>
            <Text mx={2}>Employed</Text>
          </CheckboxSingular>
          <TextArea
            name="notes"
            h="100"
            mt={4}
            label="Notes"
            placeholder="Notes"
          />
          <SwitchControl name="employer" label="Employer" mt={4} />
          <SelectControlled
            mt={4}
            name="notes"
            label="Pick language"
            placeholder="Pick language"
            width={150}
            selectedItemBg={'teal.400'}
            dropdownOpenIcon={
              <Icon name="arrow-drop-up" type="MaterialIcons" size={6} />
            }
            dropdownCloseIcon={
              <Icon name="arrow-drop-down" type="MaterialIcons" size={6} />
            }
          >
            <Select.Item label="JavaScript" value="js" />
            <Select.Item label="TypeScript" value="ts" />
            <Select.Item label="Java" value="java" />
          </SelectControlled>
          <Slider name="increment" label={'Increment : '} colorScheme="cyan">
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <RadioGroup name="color">
            <HStack space={4}>
              <Radio value="#ff0000">Red</Radio>
              <Radio value="#00ff00">Green</Radio>
              <Radio value="#0000ff">Blue</Radio>
            </HStack>
          </RadioGroup>
          <SubmitButton>Submit</SubmitButton>
          <ResetButton>Reset</ResetButton>
          {JSON.stringify(values, null, 2)}
        </Box>
      )}
    </Formik>
  );
}
