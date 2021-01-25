import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import qs from 'qs';

const request: AxiosRequestConfig | any = axios.create({
  timeout: 100000,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
  withCredentials: true,
});

const fillterRequsetData = (config: AxiosRequestConfig) => {
  const _config: {[key: string]: any} = Object.assign({}, config);

  try {
    switch (_config.method.toLowerCase()) {
      case 'get':
        break;
      case 'post':
        if (_config.data.params && _config.data.params.file) {
          const _formData = new FormData();
          const { file, ...params } = _config.data.params;
          file.forEach((item: any): void => _formData.append('file', item));
          Object.keys(params).forEach((item: any): void => _formData.append(item, params[item]));
          _config.data = _formData;
        } else {
          _config.data = qs.stringify(_config.data.params);
        }
        break;
      case 'put':
        _config.data = qs.stringify(_config.data.params);
        break;
      case 'delete':
        break;
      default:
    }
  } catch (e) {
    console.error('请求数据处理异常', e);
  }

  return _config;
};

request.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token && token !== '') {
    config.headers.Authorization = token;
  }

  return config;
});

request.interceptors.response.use(
  (res: any) => res.data,
  (error: any) => {
    console.log('%c 接口异常 ', 'background-color:orange;color: #FFF;border-radius: 4px;', error);
  },
);

export default request;
