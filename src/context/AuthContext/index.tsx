
import React, { useEffect, useState } from 'react';
import { Alert, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apis from '../../api';
import useStateContext from '../../hooks/useStateContext';
import {
  AuthContextProps,
  AuthProviderProps,
  IAppStatusProps,
  IHandleAppStatusFunction,
  IHandleCheckUserFunction,
  IHandleLoginFunction,
  IHandleUserDataFunction,
  ITempStateProps,
  IUserDataProps,
} from './type';
import { navigation } from '../../routers/navigation';

export const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [appStatus, setAppStatus] = useState<IAppStatusProps>({ isAuthenticating: false, isAuthenticated: false });
  const [tempAuthState, setTempAuthState] = useState<ITempStateProps>({} as ITempStateProps);
  const [userData, setUserData] = useState<IUserDataProps>({} as IUserDataProps);

  const state = useStateContext();

  const handleAppStatus: IHandleAppStatusFunction = (key, value) => setAppStatus(prev => ({ ...prev, [key]: value }));
  const handleUserData: IHandleUserDataFunction = (key, value) => setUserData(prev => ({ ...prev, [key]: value }));

  const setSignUpData = (data: ITempStateProps['signUpData']) => {
    setTempAuthState(prev => ({ ...prev, signUpData: data }));
  };

  // Logout Function

  const logout = async () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', onPress: () => console.log('Cancel Pressed') },
      {
        text: 'OK',
        onPress: async () => {
          try {
            const userId = await AsyncStorage.getItem('userId');
            console.log('Retrieved userId from AsyncStorage:', userId);
            if (!userId) {
              console.error('Error: userId is null or undefined');
              return;
            }
            const [status, response] = await apis.logout({ userId });
            if (status === 200) {
              handleAppStatus('isAuthenticated', false);
              await AsyncStorage.multiRemove(['accessToken', 'userData', 'isAuthenticated', 'userId']);
              setUserData({} as IUserDataProps);
              navigation.navigate('SplashScreen');
            } else {
              console.error('Logout failed:', response);
            }
          } catch (error) {
            console.error('Logout error:', error);
          }
        },
      },
    ]);
  };

  // Check User Function

  const checkUser: IHandleCheckUserFunction = async () => {
    try {
      const isLoggedInString = await AsyncStorage.getItem('isAuthenticated');
      const isLoggedIn = isLoggedInString === 'true';
      const userDataString = await AsyncStorage.getItem('userData');
      const _userData = userDataString ? JSON.parse(userDataString) : null;

      if (_userData) {
        handleAppStatus('isAuthenticated', true);
        handleUserData('userId', _userData.userId);
        handleUserData('userName', _userData.userName);
      }
      handleAppStatus('isAuthenticated', isLoggedIn);
    } catch (err) {
      console.error(`Error on checkUser : ${err}`);
    }
  };

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Login Function

  const login: IHandleLoginFunction = async (phone, password) => {
    await state.handleLoadingState(true, 'Loading...');
    const [status, res] = await apis.login({ phone, password });
    try {
      if (status === 200) {
        handleUserData('userName', res.data.userName);
        handleUserData('userId', res.data.userId);
        await AsyncStorage.multiSet([
          ['accessToken', res.access_token],
          ['userData', JSON.stringify(res.data)],
          ['isAuthenticated', 'true'],
          ['userId', res.data.userId],
        ]);
        handleAppStatus('isAuthenticated', true);
      } else {
        ToastAndroid.show(`${res?.message}`, ToastAndroid.SHORT);
      }
    } catch (err) {
      console.error(`Error on login : ${err}`);
      ToastAndroid.show(`${res?.Error}`, ToastAndroid.SHORT);
      // Alert.alert('Error!', `Error occurred while login.\nError: ${JSON.stringify(res)}`);
    } finally {
      await state.handleLoadingState(false);
    }
  };

  // Signup Function

  const signup: IHandleLoginFunction = async (phone: any, password: any, name: any) => {
    await state.handleLoadingState(true, 'Loading...');
    const [status, res] = await apis.signup({ phone, password, name });
    try {
      if (status === 200) {
        navigation.goBack();
      } else {
        ToastAndroid.show(`${res?.message}`, ToastAndroid.SHORT);
      }
    } catch (err) {
      console.error(`Error on login : ${err}`);
      ToastAndroid.show(`${res?.Error}`, ToastAndroid.SHORT);
      // Alert.alert('Error!', `Error occurred while login.\nError: ${JSON.stringify(res)}`);
    } finally {
      await state.handleLoadingState(false);
    }
  };


  const value: AuthContextProps = {
    isAuthenticated: appStatus.isAuthenticated,
    isAuthenticating: appStatus.isAuthenticating,
    handleAppStatus,
    handleUserData,
    userData,
    login,
    checkUser, signup,
    setSignUpData,
    tempAuthState,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
