import { Box, Center, Icon, Image, Input, Row, StatusBar, Text, Pressable } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView } from '../../layout';
import loginlogo from '../../assets/images/loginlogo.png';
import bottomimage from '../../assets/images/loginbottom.png';
import { useAuth } from '../../hooks';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { navigation } from '../../routers/navigation';

const Index = () => {

    const auth = useAuth();
    const [show, setShow] = useState(false);
    const [formValues, setFormValues] = useState({
        phone: '',
        password: '',
    });

    function handleFormValues(key: keyof typeof formValues, value: string) {
        setFormValues(e => {
            return { ...e, [key]: value };
        });
    }

    async function handleSignIn() {
        await auth.login(formValues?.phone, formValues?.password);
    }

    return (
        <SafeAreaView>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <Box bg={'white'} flex={1} px={5}>
                <Center mt={'12'}>
                    <Image source={loginlogo} w={'48'} h={'40'} alt="Login Logo" />
                </Center>
                <Box mt={6}>
                    <Text bold fontSize={'3xl'}>Sign In</Text>
                    <Text fontSize={'md'} mt={1} color={'gray.500'}>
                        Hi! Welcome back, you
                    </Text>
                    <Text fontSize={'md'} mt={1} color={'gray.500'}>
                        have been missed.
                    </Text>
                </Box>
                <Box mt={4}>
                    <Box mb={4}>
                        <Text bold fontSize={'sm'} color={'black'}>Email</Text>
                        <Input
                            mt={2}
                            placeholderTextColor={'gray.400'}
                            placeholder="xyz@gmail.com"
                            borderRadius={'8'}
                            value={formValues?.phone}
                            keyboardType={'email-address'}
                            onChangeText={e => handleFormValues('phone', e)}
                            color={'black'}
                            InputLeftElement={
                                <Icon
                                    as={<MaterialIcons name="email" />}
                                    size={5}
                                    ml="2"
                                    color="gray.400"
                                />
                            }
                        />
                    </Box>

                    <Box mb={4}>
                        <Text bold fontSize={'sm'} color={'black'}>Password</Text>
                        <Input
                            mt={2}
                            placeholderTextColor={'gray.400'}
                            placeholder="Enter your password"
                            borderRadius={'8'}
                            value={formValues?.password}
                            onChangeText={e => handleFormValues('password', e)}
                            color={'black'}
                            secureTextEntry={!show}
                            type={show ? 'text' : 'password'}
                            InputLeftElement={
                                <Icon
                                    as={<MaterialIcons name="lock" />}
                                    size={5}
                                    ml="2"
                                    color="gray.400"
                                />
                            }
                            InputRightElement={
                                <Pressable onPress={() => setShow(!show)}>
                                    <MaterialIcons
                                        name={show ? 'visibility' : 'visibility-off'}
                                        size={20}
                                        color="gray.400"
                                        style={{ marginRight: 8 }}
                                    />
                                </Pressable>
                            }
                        />
                    </Box>

                    <Box alignItems="flex-end" bottom={'2'}>
                        <Pressable>
                            <Text bold color="black" textDecorationLine="underline">
                                Forgot password?
                            </Text>
                        </Pressable>
                    </Box>

                    <Box mt={3}>
                        <Pressable onPress={handleSignIn}>
                            <Box
                                bg="#A3CFFF"
                                py={3} shadow={1}
                                borderRadius="30"
                                alignItems="center"
                            >
                                <Text bold color="black" fontSize="xl">
                                    Sign In
                                </Text>
                            </Box>
                        </Pressable>
                    </Box>

                    <Center>
                        <Row my={'1'} p={'1'} alignItems={'center'}>
                            <Box w={'32'} my={'2'}
                                borderBottomWidth={1.4}
                                borderBottomColor={'#A3CFFF'} borderRadius={100} >
                            </Box>
                            <Text fontSize={'md'} color={'black'} p={'1'}  >
                                or
                            </Text>
                            <Box w={'32'} my={'2'}
                                borderBottomWidth={1.4}
                                borderBottomColor={'#A3CFFF'} borderRadius={100} >
                            </Box>
                        </Row>
                        <Row space={5} mt={'2'}>
                            <Box borderWidth={'1'} rounded={'full'} borderColor={'#A3CFFF'} p={'2'}>
                                <AntDesign name="google" size={20} color={'black'} />
                            </Box>
                            <Box borderWidth={'1'} rounded={'full'} borderColor={'#A3CFFF'} p={'2'}>
                                <AntDesign name="apple1" size={20} color={'black'} />
                            </Box>
                        </Row>
                    </Center>
                </Box>
                <Row mt={'10'} space={1} alignItems={'center'} justifyContent={'center'}>
                    <Text fontSize={'md'}>Don’t have an account?</Text>
                    <Pressable onPress={() => navigation.navigate('Signup')}>
                        <Text fontSize={'md'} bold color="black" textDecorationLine="underline">Sign Up</Text>
                    </Pressable>
                </Row>
                <Box mt={'12'}>
                    <Text fontSize={'sm'} textAlign={'center'} color={'#808080'}>By login or sign up, you agree to our terms of use and</Text>
                    <Text fontSize={'sm'} textAlign={'center'} color={'#808080'}>privacy policy</Text>
                </Box>
                <Image alt="image"
                    source={bottomimage} style={{ position: 'absolute', bottom: 0, width: '70%', height: 200, transform: [{ scaleX: 1 }] }}
                />
            </Box>
        </SafeAreaView>
    );
}

export default Index;
