
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config';

interface LogoutApiProps {
    userId?: string | null;
}

export default async function logout({ userId }: LogoutApiProps) {

    const uri = `${config.api_url}/logout`;
    console.log('eri > ', uri);
    const accessToken = await AsyncStorage.getItem('accessToken');
    return await fetch(uri, {
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `${accessToken}`,
        }),
        method: 'post',
        body: JSON.stringify({
            userId,
        }),
    })
        .then(async res => {
            const resJson = await res.json();
            return [res.status, resJson];
        })
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(err => {
            console.log(`Error in logout - ${err}`);
            return [500, { error: err }];
        });
}
