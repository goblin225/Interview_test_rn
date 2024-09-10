
import config from '../../config';

interface LoginApiProps {
  phone?: string;
  password?: string;
}

export default async function login({ phone, password }: LoginApiProps) {

  const uri = `${config.api_url}/login`;
  console.log('eri > ', uri);
  return await fetch(uri, {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    method: 'post',
    body: JSON.stringify({
      phone,
      password,
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
      console.log(`Error in login - ${err}`);
      return [500, { error: err }];
    });
}
