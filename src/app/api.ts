import axios, { AxiosInstance } from 'axios';
import { Config } from 'src/config';
import firebase from './firebase';

let instance: AxiosInstance | null = null;

const generateHeaders = async (forceRefresh = false) => {
  const currentUser = firebase.auth.currentUser;
  const token = await currentUser?.getIdToken(forceRefresh);

  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };
};

const getApi = async () => {
  if (!instance) {
    instance = axios.create({
      headers: { common: await generateHeaders() },
      baseURL: Config.API_URL
    });

    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      async (err) => {
        const originalConfig = err.config;

        // Access Token was expired
        if (err.response?.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;

          try {
            if (instance) {
              const headers = await generateHeaders(true);
              instance.defaults.headers.common = headers;
            }
            return instance!(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
      }
    );
  }
  return instance;
};

export default getApi;
