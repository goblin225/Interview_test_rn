
export interface IAppStatusProps {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
}
export type IHandleAppStatusFunction = <T extends keyof IAppStatusProps>(
  key: T,
  value: IAppStatusProps[T],
) => void;

export interface IUserDataProps {
  userName: string;
  phone: string;
  firstName?: string
  userId?: number;
}

export interface IGatewayAppUserDataProps { }

export type IHandleUserDataFunction = <T extends keyof IUserDataProps, >(
  key: T,
  value: IUserDataProps[T],
) => void;

export type IHandleLoginFunction = (phone: string, password: string) => void;
export type IHandleSignupFunction = (name: string, password: string, phone: string) => void;
export type IHandleLogoutFunction = () => void;
export type IHandleCheckUserFunction = () => void;

export interface ITempStateProps {
  signUpData: {
    phoneNumber: string, firstName: string, lastName: string, password: string,
  }
}

export interface AuthContextProps {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  handleAppStatus: IHandleAppStatusFunction;
  handleUserData: IHandleUserDataFunction;
  userData: IUserDataProps;
  login: IHandleLoginFunction;
  signup: IHandleSignupFunction;
  logout: IHandleLogoutFunction;
  checkUser: IHandleCheckUserFunction;
  setSignUpData: (e: ITempStateProps['signUpData']) => void,
  tempAuthState: ITempStateProps
}
export interface AuthProviderProps {
  children: React.ReactNode;
}
