<template>
  <div class="banner">
    <swiper class="swiper" :options="swiperOption" v-if="bannersInit">
      <swiper-slide v-for="item of banners" :key="item.imageUrl">
        <img :src="item.imageUrl" :alt="item.typeTitle" />
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      banners: [],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: true,
        paginationClickable: true,
        grabCursor: true,
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    bannersInit() {
      return this.banners.length
    }
  },
  methods: {
    async getBanner() {
      try {
        let res = await this.$api.getBanner()
        // console.log(res)
        this.banners = res.banners
        this.bannerBg = res.banners[0].imageUrl
      } catch (error) {
        console.log(error)
      }
    },
    carouselChange(e) {
      console.log(e)
      this.bannerBg = this.banners[e].imageUrl
    }
  },
  mounted() {
    this.getBanner()
  }
}
</script>

<style lang="stylus" scoped>
.banner >>> .swiper-pagination {
  width: 100%;
  bottom: -20px;
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background: #a3a3ac;
    opacity: 0.8;
    border-radius: 50%;
    margin: 0 5px;
    &.swiper-pagination-bullet-active {
      opacity: 1;
      width: 15px;
      border-radius: 4px;
      background: $color-theme;
    }
  }
}
.banner {
  position: relative;
  img {
    border-radius: 3px;
  }
}
</style>
