import React from 'react';
import {
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Slider,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
  Text,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, FormControl, FormLabel, FormErrorMessage } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  rating: Yup.number()
    .required()
    .min(4, ({ min }) => `Come on we deserve at least ${min}`),
});

export default function () {
  const onSubmit = async (values: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        rating: 0,
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>Rate NativeBase V3 Formik Integration (0-10) 😬</Heading>
          <Text>You have rated us {Math.floor(values.rating)}</Text>
          <FormControl isInvalid={errors.rating}>
            <FormLabel>Slider Label</FormLabel>
            <Slider name="rating" colorScheme="cyan" min={0} max={10}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <FormErrorMessage>{errors.rating}</FormErrorMessage>
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
