import React, { useEffect } from 'react'
import { SafeAreaView } from '../../layout'
import { Box, Center, Image, Row, StatusBar } from 'native-base'
import logo from '../../assets/images/logo.png';
import topimage from '../../assets/images/logintop.png';
import logo1 from '../../assets/images/logo1.png';
import imageBottom from '../../assets/images/bottom.png';
import { navigation } from '../../routers/navigation';

const Index = () => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('WelcomeScreen');
        }, 2000);
    }, []);


    return (
        <SafeAreaView>
            <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
            <Box bg={'white'} flex={1}>
                <Row>
                    <Image source={logo} alt="image" />
                    <Image source={topimage} alt="image" />
                </Row>
                <Center px={'2'}>
                    <Image source={logo1} alt="image" />
                </Center>
                <Image position={'absolute'} bottom={0} right={0} source={imageBottom} alt="image" />
            </Box>
        </SafeAreaView>
    )
}

export default Index