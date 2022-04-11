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
  </div>
</template>
<script setup>
import { useUserStore } from '@/stores/user';
const store = useUserStore();
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
