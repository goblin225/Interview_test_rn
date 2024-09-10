import { extendTheme, NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Routers from './src/routers';
import { StateProvider } from './src/context/StateContext';
import { AuthProvider } from './src/context/AuthContext';
import React from 'react';

const theme = extendTheme({
  useSystemColorMode: false,
  components: {
    Text: {
      defaultProps: {
        fontSize: 'xs',
      },
    },
    Button: {
      defaultProps: {
        fontSize: 'xs',
        backgroundColor: 'primary.900',
        _disabled: {
          opacity: 0.7,
        },
      },
    },
    Pressable: {
      defaultProps: {
        _pressed: {
          opacity: 0.8,
        },
      },
    },
  },
});

type MyThemeType = typeof theme;
declare module 'native-base' {
  interface ICustomTheme extends MyThemeType { }
}

export default function App() {

  return (
    <StateProvider>
      <AuthProvider>
        <SafeAreaProvider>
          <NativeBaseProvider theme={theme}>
              <Routers />
          </NativeBaseProvider>
        </SafeAreaProvider>
      </AuthProvider>
    </StateProvider>
  );
}
