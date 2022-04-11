import Send from '../axios';

export default {
  getCommon() {
    return Send({
      url: '',
      method: 'get',
    });
  },
};
