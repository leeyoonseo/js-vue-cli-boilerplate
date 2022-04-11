<template>
  <div class="container__dev">
    <h2>Dev Page</h2>
    <router-link class="link" to="/">Click -> Home Page</router-link>
    <div class="box__wrap">
      <h3>사용자</h3>
      <p>{{ store.id }}</p>
      <p>{{ store.name }}</p>
      <p>{{ store.age }}</p>
      <p>{{ store.phone }}</p>
    </div>

    <div class="box__wrap">
      <h3>api</h3>
      <button @click="handleClickApi">handleClickApi</button>
    </div>
  </div>
</template>
<script setup>
// https://velog.io/@skyepodium/axios-%EC%9D%B8%ED%84%B0%EC%85%89%ED%84%B0%EB%A1%9C-API-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0
// TODO: axios 전역으로 등록 할 방법 고민
import CommonApi from '@/plugins/_apis/common';
import { useUserStore } from '@/stores/user';
const store = useUserStore();

console.log('axios', CommonApi);
const handleClickApi = () => {
  console.log('handleClickApi', this);
};
</script>
<style lang="scss">
.container__dev {
  text-align: center;

  h2 {
    font-size: 32px;
    font-weight: 700;
  }

  .link {
    border-bottom: 1px solid gray;

    &:hover {
      color: gray;
    }
  }
}
</style>
