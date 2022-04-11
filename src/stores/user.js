import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    id: 123,
    name: '한지민',
    age: 19,
    phone: '010-1234-5678',
  }),
  getters: {},
  actions: {},
});
