<template>
  <div class="layout__default">
    <h1>Layout: Default</h1>
    <slot></slot>
  </div>
</template>
<style lang="scss">
.layout__default {
  padding: 60px;

  h1 {
    font-size: 36px;
    font-weight: 700;
  }

  /* background: yellow; */
}
</style>
