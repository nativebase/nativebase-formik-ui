# NativeBase Formik UI

[@native-base/formik-ui](https://www.npmjs.com/package/@native-base/formik-ui) is the official **NativeBase - Formik** bindings by NativeBase Team. `@native-base/formik-ui` provides with form components integrated with formik hooks out of the box, Each component makes use of Formik's context, therefore you need to have Formik installed in your project, after that all you have to do is write your `validationSchema`, build your Form using NativeBase Formik UI components and wrap that with `<Formik/>` , rest will be taken care by us.

### Here is an example of CheckboxControl provided by NativeBase Formik UI

```jsx
import React from 'react';
import {
  CheckboxControl,
  Text,
  SubmitButton,
  ResetButton,
  Box,
  ButtonGroup,
} from '@native-base/formik-ui';
import { Formik } from 'formik';
import { Heading, Center, NativeBaseProvider } from 'native-base';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  tnc: Yup.boolean().equals([true], 'Terms and Condition must be checked !'),
  newsletter: Yup.boolean(),
});

function FormikCheckboxBasicExample() {
  const onSubmit = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Formik
      initialValues={{
        tnc: true,
        newsletter: false,
      }}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors }) => (
        <Box>
          <Heading>Checkbox FormControl</Heading>
          <CheckboxControl name="tnc" label="Checkbox Control Label" mt={4}>
            <Text mx={2}>Terms and Conditions</Text>
          </CheckboxControl>
          <CheckboxControl name="newsletter" mt={4}>
            <Text mx={2}>Subscribe to Our Newsletter</Text>
          </CheckboxControl>
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

export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <FormikCheckboxBasicExample />
      </Center>
    </NativeBaseProvider>
  );
}
```

## Installation

```bash
# Using Yarn
yarn add native-base/formik-ui

# Using NPM
npm i @native-base/formik-ui
```

## Usage

### Peer Dependency

NativeBase Formik UI has [Formik](https://formik.org/), [NativeBase](https://alpha.nativebase.io/) and some various other libraries as Peer Dependencies. So make sure to have those packages installed to your project to make use of NativeBase Formik UI.

```bash
# Using Yarn
yarn add formik native-base@next react-native-svg @expo/vector-icons styled-components styled-system react-native-safe-area-context @react-native-picker/picker

# Using NPM
npm i formik native-base@next react-native-svg @expo/vector-icons styled-components styled-system react-native-safe-area-context @react-native-picker/picker
```

### Form validations

To validate the form fields, we recommend using [Yup](https://github.com/jquense/yup).

```bash
# Using Yarn
yarn add yup

# Using NPM
npm i yup
```

### Components Documentation and Examples

- [Checkbox](https://alpha.nativebase.io/docs/nativebase-formik-ui#checkbox)
- [Input](https://alpha.nativebase.io/docs/nativebase-formik-ui#input)
- [NumberInput](https://alpha.nativebase.io/docs/nativebase-formik-ui#numberinput)
- [PinInput](https://alpha.nativebase.io/docs/nativebase-formik-ui#pininput)
- [Radio](https://alpha.nativebase.io/docs/nativebase-formik-ui#radio)
- [Select](https://alpha.nativebase.io/docs/nativebase-formik-ui#select)
- [Slider](https://alpha.nativebase.io/docs/nativebase-formik-ui#slider)
- [Switch](https://alpha.nativebase.io/docs/nativebase-formik-ui#switch)
- [TextArea](https://alpha.nativebase.io/docs/nativebase-formik-ui#textarea)

## Contributing

See the [Contribution guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## **License**

MIT © [NativeBase](https://github.com/nativebase)
