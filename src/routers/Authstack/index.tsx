import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { login, OnboardScreen, Signup, WelcomeScreen } from '../../screens';

const Stack = createNativeStackNavigator();

interface Props {
  screenName: 'OnboardScreen';
}

const Index = (props: Props) => {

  function getInitialScreenName() {
    return props.screenName;
  }

  return (
    <Stack.Navigator initialRouteName={getInitialScreenName()}>
      <Stack.Screen
        component={login}
        name="login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Signup}
        name="Signup"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={OnboardScreen}
        name="OnboardScreen"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={WelcomeScreen}
        name="WelcomeScreen"
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Index;
