import axios from 'axios';
import { BASE_URL, HTTP_METHOD } from 'util/consts';

const customAxios = axios.create({
  baseUrl: BASE_URL,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
  headers: {
    'Content-Type': 'application/json',
  },
});

const createAxiosMethod = (axiosInst, methodType) => (option) => {
  return axiosInst({ ...option, method: methodType });
};

const http = {
  get: createAxiosMethod(customAxios, HTTP_METHOD.get),
  post: createAxiosMethod(customAxios, HTTP_METHOD.post),
  put: createAxiosMethod(customAxios, HTTP_METHOD.put),
  delete: createAxiosMethod(customAxios, HTTP_METHOD.delete),
};

export default http;
