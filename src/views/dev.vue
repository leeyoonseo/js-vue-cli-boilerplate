<template>
  <div class="container__dev">
    <h2>Dev Page</h2>
    <router-link class="link" to="/">Click -> Home Page</router-link>
  </div>
</template>

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
