
import { EnvTypes, IConfigProps } from '../@types';

const ENV: EnvTypes = 'Prod';

const $: IConfigProps[] = [
  {
    env: 'Prod',
    api_url: ' https://tor.appdevelopers.mobi/api',
    base_url: ' https://tor.appdevelopers.mobi/api',
    version: '1.0.0',
  },
  {
    env: 'dev',
    api_url: ' https://tor.appdevelopers.mobi/api',
    base_url: ' https://tor.appdevelopers.mobi/api',
    version: '1.0.0',
  },
];


const config = { ...($.find(e => e.env === ENV) as IConfigProps) };

export default config;
