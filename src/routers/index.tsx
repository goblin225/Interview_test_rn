
import React from 'react';
import { navigationRef } from './navigation';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Authstack';
import useAuth from '../hooks/useAuth';
import { useStateContext } from '../hooks';
import { LoadingOverlay } from '../components';
import Appstack from './Appstack';

export default function Index() {
  const state = useStateContext();
  const auth = useAuth();

  const renderStack = () => {
    switch (auth.isAuthenticated) {
      case true:
        return <Appstack screeName={'Home'}  />;
      default:
        return <AuthStack screenName="OnboardScreen" />;
    }
  };


  return (
    <NavigationContainer ref={navigationRef}>
      {renderStack()}
      <LoadingOverlay {...state.loadingState} />
    </NavigationContainer>
  );
}
