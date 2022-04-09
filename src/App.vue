<template>
  <component :is="asyncLayoutComponent">
    <router-view />
  </component>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const asyncLayoutComponent = defineAsyncComponent(() => {
  const defaultLayout = 'default';
  const { layout } = router.currentRoute.value.meta;

  return import(`./layouts/${layout || defaultLayout}.vue`);
});
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
