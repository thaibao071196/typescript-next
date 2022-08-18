import axios, { AxiosError, AxiosResponse } from 'axios';
import { APP_URL_API } from '../../configs';

const axiosClient = axios.create({
  baseURL: APP_URL_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  (response: AxiosResponse): Promise<AxiosResponse | AxiosError> => {
    return Promise.resolve(response);
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  },
);

export default axiosClient;
