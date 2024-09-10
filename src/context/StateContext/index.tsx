
import React, { useEffect, useState } from 'react';
import {
  HandleLoadingStateTypeFunction,
  LoadingStateType,
  StateContextProps,
  StateProviderProps,
} from './type';
import { NativeModules } from 'react-native';

export const StateContext = React.createContext<StateContextProps>(
  {} as StateContextProps,
);

const { DeviceModule } = NativeModules;

export const StateProvider = ({ children }: StateProviderProps) => {
  const [loadingState, setLoadingState] = useState<LoadingStateType>({
    isLoading: false,
    label: 'Loading...',
  });
  const handleLoadingState: HandleLoadingStateTypeFunction = (
    isLoading: boolean,
    label: string = 'Loading...',
  ) => {
    setLoadingState({ isLoading, label });
  };
  const [error, setError] = useState<string | null>(null);

  const value: StateContextProps = {
    error,
    setError,
    loadingState,
    handleLoadingState,
  };
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};
