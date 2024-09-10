
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../screens';

const Stack = createNativeStackNavigator();

interface Props {
    screeName: string;
}

const Index = (props: Props) => {

    return (
        <Stack.Navigator initialRouteName={props.screeName} >
            <Stack.Screen
                component={Home}
                name="Home"
                options={{ headerShown: false }}
            />
        </Stack.Navigator>);
};

export default Index;
