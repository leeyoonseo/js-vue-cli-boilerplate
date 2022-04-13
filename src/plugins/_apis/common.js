import axios from '../axios';

export default {
  getCommon() {
    return axios({
      url: '',
      method: 'get',
    });
  },
};
