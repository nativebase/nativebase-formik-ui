import React from 'react';
import { Flex, NativeBaseProvider } from 'native-base';

function MyWrapper({ children }: any) {
  return (
    <Flex
      px={4}
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Flex>
  );
}

export default ({ children }: any) => {
  return (
    <NativeBaseProvider>
      <MyWrapper>{children}</MyWrapper>
    </NativeBaseProvider>
  );
};
