import React from 'react';
import {
  SelectControlled,
  Select,
  Icon,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from 'nativebase-formik-ui';
import { Formik } from 'formik';
import { Heading } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  language: Yup.string().required(),
});

export default function () {
  const onSubmit = async (values: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        language: '',
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box mt={4}>
          <Heading>
            {values.language === ''
              ? 'Please Tell Your Faviorate Programming Language'
              : 'You said you love ' + values.language + ' 👌🏻'}
          </Heading>
          <SelectControlled
            mt={4}
            name="language"
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
            <Select.Item label="C++" value="cpp" />
            <Select.Item label="Python" value="py" />
            <Select.Item label="TypeScript" value="ts" />
            <Select.Item label="Java" value="java" />
          </SelectControlled>
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
