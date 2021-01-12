import React from 'react';
import {
  InputControl,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from 'nativebase-formik-ui';
import { Formik } from 'formik';
import { Heading } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: Yup.string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
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
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box>
          <Heading>Login Form using FormControlled Input</Heading>
          <InputControl
            mt={4}
            name="email"
            label="Email Address"
            placeholder="jane.doe@example.com"
            isRequired
          />
          <InputControl
            mt={4}
            name="password"
            label="Password"
            type="password"
            placeholder="MyPassword"
            isRequired
          />
          <Box pb={4} />
          <ButtonGroup spacing={6}>
            <SubmitButton colorScheme="info">Login</SubmitButton>
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
