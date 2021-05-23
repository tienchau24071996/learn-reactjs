import axiosClient from './axiosClient';

const productApi = {
  register(data) {
    const url = '/auth/local/register';
    return axiosClient.get(url,data);
  },
};

export default productApi;
