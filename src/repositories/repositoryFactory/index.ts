import { Repositories } from './types';
import loginRepository from '../loginRepository';

const repositories = {
  login: loginRepository,
};

export const repositoryFactory = {
  get: (name: keyof Repositories) => repositories[name],
};
