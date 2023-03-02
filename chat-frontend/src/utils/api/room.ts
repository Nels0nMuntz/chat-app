import { axios } from '../../core';


const roomApi = () => {
  return axios.get('//room')
  .then(response => response.data)
};

export default roomApi;