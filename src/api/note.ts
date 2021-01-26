import axios from '@/utils/axios';
import qs from 'qs';
import baseUrl from './config';

const note = {
  getList(){
    return axios.get(`${baseUrl.crm}/Customer/all`);
  },
  add(params: any){
    return axios.post(`${baseUrl.crm}/Customer`, qs.stringify(params));
  },
  upload(params: any){
    return axios.request({
      url: `${baseUrl.crm}/Customer`,
      method: 'post',
      headers: { 'Content-Type': 'multipart/form-data' },
      data: params,
    });
  },
};

export default note;
