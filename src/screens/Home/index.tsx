import { Box, Center, Icon, Image, Input, Row, StatusBar, Text, Pressable } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from '../../layout';
import loginlogo from '../../assets/images/loginlogo.png';
import bottomimage from '../../assets/images/signupbottom.png';
import { useAuth } from '../../hooks';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { navigation } from '../../routers/navigation';

const Index = () => {

  const auth = useAuth();

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Box bg={'white'} flex={1} px={5}>
        <Center mt={'6'}>
          <Image source={loginlogo} w={'48'} h={'40'} alt="Login Logo" />
        </Center>
        <Box mt={4}>

          <Box mt={3} zIndex={2}>
            <Pressable onPress={auth.logout}>
              <Box
                bg="#A3CFFF"
                py={3}
                borderRadius="30"
                alignItems="center"
              >
                <Text bold color="black" fontSize="xl">
                  Logout
                </Text>
              </Box>
            </Pressable>
          </Box>

        </Box>
      </Box>
    </SafeAreaView>
  );
}

export default Index;
