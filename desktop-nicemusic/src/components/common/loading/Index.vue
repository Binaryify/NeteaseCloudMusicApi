<template>
  <div class="loading flex-column">
    <div class="loader"></div>
    <span v-if="loadingText != ''">{{ loadingText }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    loadingText: {
      type: String,
      default: '~努力加载中~'
    }
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
.loading {
  span {
    margin-top: -30px;
    font-size: 12px;
  }
}
.loader {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 3em;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  background: $color-theme;
}
.loader,
.loader:before,
.loader:after {
  animation: loader 1s infinite ease-in-out;
}
.loader:before,
.loader:after {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
}
@keyframes loader {
  from {
    transform: scale(0);
    opacity: 1;
  }
  to {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
