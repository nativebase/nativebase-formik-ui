import React from 'react';
import {
  Input,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, FormControl } from 'native-base';
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
          <Heading>Login form using Custom FormControl</Heading>
          <FormControl mt={4} isRequired isInvalid={errors.email}>
            <FormControl.Label color="teal.600">
              Email Address
            </FormControl.Label>
            <Input name="email" mt={2} placeholder="jane.doe@example.com" />
            <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
          </FormControl>
          <FormControl mt={4} isRequired isInvalid={errors.password}>
            <FormControl.Label color="orange.600">Password</FormControl.Label>
            <Input
              name="password"
              type="password"
              mt={2}
              placeholder="MyPassword"
            />
            <FormControl.ErrorMessage>
              {errors.password}
            </FormControl.ErrorMessage>
          </FormControl>
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
