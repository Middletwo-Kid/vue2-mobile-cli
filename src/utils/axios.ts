import axios, { AxiosRequestConfig } from 'axios';

const instance: AxiosRequestConfig | any = axios.create({
  timeout: 100000,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
  withCredentials: true,
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token && token !== '') {
    config.headers.Authorization = token;
  }
  console.log('config', config);
  return config;
});

instance.interceptors.response.use(
  (res: any) => res.data,
  (error: any) => {
    console.log('%c 接口异常 ', 'background-color:orange;color: #FFF;border-radius: 4px;', error);

    // 可以根据状态码做其他操作：登录过期时、网络请求不存在时...
  },
);

export default instance;
