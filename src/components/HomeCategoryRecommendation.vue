<template>
      <div class="home-category-recommendation">
        <h3 v-for="(item,index) in categoryRecommendation" :key="index">{{item.title}}<span>{{index<1 ? '查看所有分类' : undefined}}</span></h3>
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
              <swiper-slide v-for="item in categoryRecommendation" :key="item.categoryRecommendation"><img :src="item.categoryRecommendation" alt=""></swiper-slide>
              <!-- 如果需要导航按钮 左右箭头。如果放置在swiper-container外面，需要自定义样式。-->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
              <!-- 如果需要滚动条 -->
              <!-- <div class="swiper-scrollbar"></div> -->
        </swiper>
        <h3 v-for="(item,index) in treasureOfZhendian" :key="index">{{item.title}}<span>{{index<1 ? '查看所有分类' : ''}}</span></h3>
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
              <swiper-slide v-for="item in treasureOfZhendian" :key="item.TreasureOfZhendian"><img :src="item.TreasureOfZhendian" alt=""></swiper-slide>
              <!-- 如果需要导航按钮 左右箭头。如果放置在swiper-container外面，需要自定义样式。-->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
              <!-- 如果需要滚动条 -->
              <!-- <div class="swiper-scrollbar"></div> -->
        </swiper>
        <h3 v-for="(item,index) in guessYouLike" :key="index">{{item.title}}</h3>
        <swiper class="swiper-container"
              :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                el: '.swiper-pagination',
                type: 'fraction'
              }"
              :breakpoints="{
                320: {  //当屏幕宽度大于等于320
                  slidesPerView: 7,
                  spaceBetween: 30
                }
              }"
              :lazy="{
                loadPrevNextAmount: 1,
              }"
                :autoplay="{ autoplay: false }"
              loop>
              <swiper-slide v-for="item in guessYouLike" :key="item.imgUrl">
                <img :src="item.imgUrl" :data-srcset="item.imgUrl" class="swiper-lazy">
              </swiper-slide>
              <!-- 如果需要导航按钮 左右箭头。如果放置在swiper-container外面，需要自定义样式。-->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
              <!-- 如果需要滚动条 -->
              <!-- <div class="swiper-scrollbar"></div> -->
              <div class="swiper-pagination">1111</div>
        </swiper>
      </div>
</template>

<script>

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
  props: ['categoryRecommendation', 'treasureOfZhendian', 'guessYouLike'],
  components: {
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="scss">
  .swiper{
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: #00ff33;/* 两种都可以 */
  }
.home-category-recommendation{
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  margin: 28px;
  .swiper-container {
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 30px;
  }
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
