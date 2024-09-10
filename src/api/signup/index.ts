
import config from '../../config';

interface SignUpApiProps {
    name?: string;
    phone?: string;
    password?: string;
}

export default async function signup({ phone, password, name }: SignUpApiProps) {

    const uri = `${config.api_url}/register`;
    console.log('eri > ', uri);
    return await fetch(uri, {
        headers: new Headers({
            'Content-Type': 'application/json',
        }),
        method: 'post',
        body: JSON.stringify({
            phone,
            password, name,
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
            console.log(`Error in signup - ${err}`);
            return [500, { error: err }];
        });
}
