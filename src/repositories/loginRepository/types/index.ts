import { AxiosError, AxiosResponse } from 'axios';

export type LoginParameters = {
  email: string;
  password: string;
};

export type LoginRepository = {
  handleLogin: (props: LoginParameters) => Promise<AxiosError | AxiosResponse>;
};
