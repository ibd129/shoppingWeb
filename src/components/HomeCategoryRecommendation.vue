<template>
      <div class="home-category-recommendation">
      <h3>品类推荐<span>查看所有分类</span></h3>
      <swiper class="swiper-container"
            :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }"
            :breakpoints="{
              320: {  //当屏幕宽度大于等于320
                slidesPerView: 7,
                spaceBetween: 30
              }
            }"
            :autoplay="{ autoplay: false }"
            loop>
            <swiper-slide v-for="item in data.imgUrl" :key="item.categoryRecommendation"><img :src="item.categoryRecommendation" alt=""></swiper-slide>
            <!-- 如果需要导航按钮 左右箭头。如果放置在swiper-container外面，需要自定义样式。-->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
      </swiper>
    </div>
</template>

<script>
import { onMounted, reactive } from '@vue/runtime-core'
import axios from 'axios'
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])
export default {
  name: 'HomeCategoryRecommendation',
  setup () {
    const data = reactive({
      imgUrl: []
    })
    onMounted(() => {
      axios.get('http://localhost:8000/home-data').then(res => {
        data.imgUrl = res.data
      })
    })
    return {
      data
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="scss">
.home-category-recommendation{
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  margin: 28px;
  h3{
    margin: 20px;
    span{
      font-size: 14px;
      margin-left: 15px;
      font-weight: normal;
    }
  }
}
</style>
