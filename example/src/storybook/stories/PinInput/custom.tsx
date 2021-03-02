import React from 'react';
import {
  PinInput,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, FormControl } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  otp: Yup.string().required('Please specify your otp, it is important.'),
});

export default function () {
  const onSubmit = async (values: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        otp: '',
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enablereinitialize
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>Confirm Your Identity</Heading>
          <FormControl mt={4} isInvalid={errors.otp}>
            <FormControl.Label>
              Please enter the OTP. Trust me , I won't steal anything 😉 .
            </FormControl.Label>
            <PinInput mt={2} name="otp">
              <PinInput.Field />
              <PinInput.Field />
              <PinInput.Field />
              <PinInput.Field />
            </PinInput>
            <FormControl.ErrorMessage>{errors.otp}</FormControl.ErrorMessage>
          </FormControl>
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
