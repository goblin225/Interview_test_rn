import { Box, Center, Spinner, Text } from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';
import React from 'react';
import { ColorValue } from 'react-native';;

export interface LoadingOverlayProps {
  isLoading: boolean;
  spinnerColor?: ColorType;
  label?: string;
}

export default function Index(props: LoadingOverlayProps) {
  return props.isLoading ? (
    <Center
      zIndex={10}
      top="0"
      left={0}
      right={0}
      bottom={0}
      position={'absolute'}
      justifyContent="center"
      bg="rgba(0,0,0,0.5)">
      <Box
        h="24"
        bg="white"
        w="5/6"
        borderRadius={'8'}
        shadow={'1'}
        justifyContent="center"
        alignItems={'center'}
        overflow="hidden">
        <Box  justifyContent={'center'} flex={1} alignItems={'center'} flexDirection={'row'}>
          <Spinner
            size={'lg'}
            color={(props.spinnerColor as ColorValue) || 'primary.800'}
          />
          <Text px={'6'} fontSize={'md'} color={'blackr'}>{props.label || 'Loading....'}</Text>
        </Box>
        {/* <Row position="absolute" bottom="4" right="8" space='4' flexWrap={'wrap'} >
          <Box>
            <Text color="blue.600">Cancel</Text>
          </Box>
          <Box>
            <Text color="blue.600">Cancel</Text>
          </Box>
        </Row> */}
      </Box>
    </Center>
  ) : null;
}
