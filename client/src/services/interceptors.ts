import axios, { type CreateAxiosDefaults } from 'axios';

import { errorCatch } from './error';
import { getRefreshToken, removeFromStorage } from '@/services/auth-token.service';

const options: CreateAxiosDefaults = {
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
};

const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
  const refreshToken = getRefreshToken();
  console.log(refreshToken, 'refreshtoken');
  console.log(config, 'config');

  if (config?.headers && refreshToken) config.headers.Authorization = `Bearer ${refreshToken}`;

  return config;
});

axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error?.response?.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        return axiosWithAuth.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === 'jwt expired') removeFromStorage();
      }
    }

    throw error;
  }
);

export { axiosClassic, axiosWithAuth };
