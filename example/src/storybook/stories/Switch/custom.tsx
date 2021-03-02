import React from 'react';
import {
  Switch,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
  Icon,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, FormControl } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  switchon: Yup.boolean().equals([true]),
});

export default function () {
  const onSubmit = async (values: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        switchon: false,
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>
            Light is Switched {values.switchon ? 'On ' : 'Off '}
            <Icon
              name={values.switchon ? 'light-up' : 'md-moon'}
              type={values.switchon ? 'Entypo' : 'Ionicons'}
              size={6}
            />
          </Heading>
          <FormControl mt={4} isInvalid={errors.switchon}>
            <FormControl.Label>Toggle Switch</FormControl.Label>
            <Switch mt={2} name="switchon" label="Toggle Switch" />
            <FormControl.ErrorMessage>
              {errors.switchon}
            </FormControl.ErrorMessage>
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
