
export interface DistrictProps {
    id: number;
    name: string;
    deviceId: string
}

export interface userDataProps {
    userName: string;
    email: string;
    phoneNumber: number;
    userGroup: string;
}

export type AppStateType = 'home' | 'SplashScreen'
