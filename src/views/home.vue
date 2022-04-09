<template>
  <div class="container__home">
    <h2>Welcome to Your Vue.js App</h2>
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link class="link" to="/dev">Click -> Dev Page</router-link>
  </div>
</template>

<style lang="scss">
.container__home {
  text-align: center;

  h2 {
    font-size: 32px;
    font-weight: 700;
  }

  img {
    margin: 0 auto;
  }

  .link {
    border-bottom: 1px solid gray;

    &:hover {
      color: gray;
    }
  }
}
</style>
