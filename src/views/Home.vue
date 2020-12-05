<template>
  <div class="home">
    <div class="rigth-view">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  setup() { },
};
</script>

<style lang="scss">
.home {
  height: 100%;
  width: 100%;
  display: flex;
  .rigth-view {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    @include flex-column();
  }
}
</style>
