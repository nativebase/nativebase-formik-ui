import React from 'react';
import {
  Radio,
  RadioGroupControl,
  HStack,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
  Text,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
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
        color: '',
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>Let's Try to Know You More.</Heading>
          <RadioGroupControl
            mt={4}
            name="color"
            label="What's your favourite Color ?"
          >
            <HStack space={4}>
              <Radio value="#ff0000">
                <Text ml={2}>Red</Text>
              </Radio>
              <Radio value="#00ff00">
                <Text ml={2}>Green</Text>
              </Radio>
              <Radio value="#0000ff">
                <Text ml={2}>Blue</Text>
              </Radio>
              <Radio value="other">
                <Text ml={2}>Other</Text>
              </Radio>
            </HStack>
          </RadioGroupControl>
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="teal">Next</SubmitButton>
            <ResetButton colorScheme="yellow">Reset</ResetButton>
          </ButtonGroup>
          <Box mt={4} bg="gray.100" p={3}>
            <Heading size="sm" mb={2}>
              Current State
            </Heading>
            Values: {JSON.stringify(values, null, 2)}
            Errors: {JSON.stringify(errors, null, 2)}
          </Box>
        </Box>
      )}
    </Formik>
  );
}
