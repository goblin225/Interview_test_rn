import React from 'react'
import { SafeAreaView } from '../../layout'
import { Box, Center, Image, Pressable, Row, StatusBar, Text } from 'native-base'
import logo from '../../assets/images/logo.png';
import topimage from '../../assets/images/logintop.png';
import logo1 from '../../assets/images/logo1.png';
import { navigation } from '../../routers/navigation';

const Index = () => {

    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <Box bg={'white'} flex={1} px={'4'}>
                <Row>
                    <Image source={logo} alt="image" />
                    <Image h={'40'} source={topimage} alt="image" />
                </Row>
                <Center px={'2'} bottom={'20'}>
                    <Image source={logo1} alt="image" />
                </Center>
                <Box alignItems={'center'} bottom={'10'}>
                    <Text bold fontSize={'xl'} color={'#808080'}>Sparkle & Shine  Transform</Text>
                    <Text bold fontSize={'xl'} color={'#808080'}>Your Drive with Every Wash!</Text>
                </Box>

                <Box>
                    <Pressable onPress={() => navigation.navigate('login')}>
                        <Box
                            bg="#A3CFFF"
                            py={3} shadow={1}
                            borderRadius="30"
                            alignItems="center"
                        >
                            <Text bold color="black" fontSize="2xl">
                                Let’s Start
                            </Text>
                        </Box>
                    </Pressable>
                </Box>

                <Row mt={'5'} space={1.5} alignItems={'center'} justifyContent={'center'} zIndex={1}>
                    <Text fontSize={'md'}>Already have an account?</Text>
                    <Pressable onPress={() => navigation.navigate('login')}>
                        <Text fontSize={'md'} bold color="black" textDecorationLine="underline">Sign in</Text>
                    </Pressable>
                </Row>
            </Box>
        </SafeAreaView>
    )
}

export default Index