<template>
  <div class="layout">
    <div class="fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {}
}
</script>

<style lang="stylus" scoped>
.layout {
  width: 100%;
  min-height: calc(100vh - 252px);
  z-index: 998;
  width: auto;
  min-width: 1024px;
  padding-top: 70px;
  .fluid {
    padding: 20px 0;
  }
}
</style>
