import { LoginParameters, LoginRepository } from './types';
import axiosClient from '../axiosClient';

const resource = '/login';

const loginRepository: LoginRepository = {
  handleLogin: ({ email, password }: LoginParameters) => {
    console.log(email, password);
    return axiosClient.post(resource, {
      email,
      password,
    });
  },
};

export default loginRepository;
