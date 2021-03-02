import React from 'react';
import { Center, NativeBaseProvider } from 'native-base';

function MyWrapper({ children }: any) {
  return <Center flex={1}>{children}</Center>;
}

export default ({ children }: any) => {
  return (
    <NativeBaseProvider>
      <MyWrapper>{children}</MyWrapper>
    </NativeBaseProvider>
  );
};
