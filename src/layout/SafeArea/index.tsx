
import { Box, IBoxProps, useColorMode } from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';

interface Props extends IBoxProps {
  children: React.ReactNode;
}

const Index = ({ children, ...props }: Props) => {
  const { colorMode } = useColorMode();
  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ flex: 1 }}
    >
      <Box flex="1" bg={colorMode === 'dark' ? '#F1F4F3' : 'gray.800'} {...props}>
        {children}
      </Box>
    </SafeAreaView>
  );
};

export default Index;
