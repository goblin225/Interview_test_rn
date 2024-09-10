
import { LanguageType } from '../../@types';

export type LoadingStateType = {
  isLoading: boolean;
  label: string;
};
export type HandleLoadingStateTypeFunction = (
  isLoading: boolean,
  label?: string,
) => void;
export interface StateContextProps {
  changeAppState(arg0: string): unknown;
  error: string | null;
  setError: (e: string | null) => void;
  loadingState: LoadingStateType;
  handleLoadingState: HandleLoadingStateTypeFunction;
}
export interface StateProviderProps {
  children: React.ReactNode;
}
