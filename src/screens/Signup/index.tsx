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
    const [show, setShow] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        phone: '',
        password: '',
    });

    function handleFormValues(key: keyof typeof formValues, value: string) {
        setFormValues(e => {
            return { ...e, [key]: value };
        });
    }

    async function handleSignIn() {
        await auth.signup(formValues?.phone, formValues?.password, formValues?.name);
    }

    return (
        <SafeAreaView>
            <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
            <Box bg={'white'} flex={1} px={5}>
                <Center mt={'16'}>
                    <Image source={loginlogo} w={'48'} h={'40'} alt="Login Logo" />
                </Center>
                <Box mt={6}>
                    <Text bold fontSize={'3xl'}>Sign Up</Text>
                    <Text fontSize={'md'} mt={1} color={'gray.500'}>
                        Fill in the below form and add life to
                    </Text>
                    <Text fontSize={'md'} mt={1} color={'gray.500'}>
                        your car!
                    </Text>
                </Box>
                <Box mt={4}>
                    <Box mb={4}>
                        <Text bold fontSize={'sm'} color={'black'}>Name</Text>
                        <Input
                            mt={2}
                            placeholderTextColor={'gray.400'}
                            placeholder="Enter your name"
                            borderRadius={'8'}
                            value={formValues?.name}
                            keyboardType={'email-address'}
                            onChangeText={e => handleFormValues('name', e)}
                            color={'black'}
                            InputLeftElement={
                                <Icon
                                    as={<Feather name="user" />}
                                    size={5}
                                    ml="2"
                                    color="gray.400"
                                />
                            }
                        />
                    </Box>

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

                    <Box >
                        <Row space={2} alignItems={'center'}>
                            <Box borderRadius={'2'} borderWidth={'1'} p={'2'} />
                            <Text bold color="black" fontSize={'sm'}>
                                Agree with
                            </Text>
                            <Text fontSize={'sm'}  color="#0000007D" textDecorationLine="underline">
                                Terms & Conditions
                            </Text>
                        </Row>
                    </Box>

                    <Box mt={6} zIndex={2}>
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

                </Box>
                <Row mt={'5'} space={1.5} alignItems={'center'} justifyContent={'center'} zIndex={1}>
                    <Text fontSize={'md'}>Already have an account?</Text>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Text fontSize={'md'} bold color="black" textDecorationLine="underline">Sign Up</Text>
                    </Pressable>
                </Row>
                <Box mt={'10'}>
                    <Text fontSize={'sm'} textAlign={'center'} color={'#808080'}>By login or sign up, you agree to our terms of use and</Text>
                    <Text fontSize={'sm'} textAlign={'center'} color={'#808080'}>privacy policy</Text>
                </Box>
                <Image alt="image"
                    source={bottomimage} style={{ position: 'absolute', bottom: 0, right: 0, transform: [{ scaleX: 1.5 }] }}
                />
            </Box>
        </SafeAreaView>
    );
}

export default Index;
