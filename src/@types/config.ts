
export type EnvTypes = 'Prod' | 'dev' | 'test' | 'production';

export interface IConfigProps {
  env: EnvTypes;
  base_url: string;
  api_url: string;
  version: string;
}
