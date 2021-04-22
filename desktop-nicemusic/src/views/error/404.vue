<template>
  <div class="error-wrap container flex-column">
    <div class="content-error h-v-50">
      <img src="../../assets/images/404.png" />
      <h1>404</h1>
      <h4>哎呀！ 该页面无法找到。</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {}
}
</script>
<style lang="stylus" scoped>
.error-wrap {
  height: calc(100vh - 273px);
  padding-top: 70px;
  .content-error {
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    img {
      margin-bottom: 1.5rem;
    }
    h1 {
      font-size: 6rem;
      font-weight: 300;
      line-height: 1.2;
    }
    h4 {
      font-size: 1.5rem;
    }
  }
}
</style>
