<template>
  <div class="home">
    <TopLab :options="data.options"/>
    <HomeMenu :options="data.options"/>
    <div class="home-main">
      <el-carousel :interval="5000" arrow="always" height="600px" indicator-position="none">
        <el-carousel-item v-for="item in data.imgUrl" :key="item.imageUrl">
          <h3 text="2xl" justify="center">
            <img :src="item.imageUrl" alt="">
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <HomePreferredProducts :productCard="data.cardImg"/>
    <HomeCategoryRecommendation :categoryRecommendation="data.categoryRecommendation"/>
    <HomeCategoryRecommendation :treasureOfZhendian="data.treasureOfZhendian"/>
    <div>
      <img src="https://images-cn.ssl-images-amazon.cn/images/G/28/JPMS/2022/JPFD/XCM_Manual_ORIGIN_1452528_4867298_1500x200_1X._CB632159817_.jpg" alt="">
    </div>
    <HomePreferredProducts class="today" :lifeProduct='data.lifeProduct'/>
    <div>
      <img src="https://images-cn.ssl-images-amazon.cn/images/G/28/Freya/mkt/kol/Gateway_desktop_1500x200_200-15._CB623763127_.jpg" alt="">
    </div>
    <HomePreferredProducts class="today" :lifeProduct='data.lifeProduct2'/>
    <div>
      <img src="https://images-cn.ssl-images-amazon.cn/images/G/28/CN-Ad/CMB_Feb_1500x300._CB646359670_.jpg" alt="">
    </div>
    <HomePreferredProducts class="today"/>
    <HomeCategoryRecommendation :guessYouLike='data.guessYouLike'/>
  </div>
  <Footer/>
</template>

<script>
// @ is an alias to /src
import TopLab from '../components/TopLab.vue'
import HomeMenu from '../components/HomeMenu.vue'
import HomePreferredProducts from '../components/HomePreferredProducts.vue'
import HomeCategoryRecommendation from '../components/HomeCategoryRecommendation.vue'
import { onMounted, reactive } from '@vue/runtime-core'
import request from '../utils/request'
import Footer from '../components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    TopLab,
    HomeMenu,
    HomePreferredProducts,
    HomeCategoryRecommendation,
    Footer
  },
  setup () {
    const data = reactive({
      imgUrl: [],
      cardImg: [],
      lifeProduct: [],
      lifeProduct2: [],
      categoryRecommendation: [],
      treasureOfZhendian: [],
      guessYouLike: [],
      options: []
    })
    onMounted(() => {
      request({
        method: 'get',
        url: '/AllCategories'
      }).then(res => {
        data.options = res.data
      })
      request({
        method: 'get',
        url: '/home-data'
      }).then(res => {
        data.imgUrl = res.data
      })
      request({
        method: 'get',
        url: '/PreferredProducts'
      }).then(res => {
        data.cardImg = res.data
      })
      request({
        method: 'get',
        url: '/lifeProduct'
      }).then(res => {
        data.lifeProduct = res.data
      })
      request({
        method: 'get',
        url: '/lifeProduct2'
      }).then(res => {
        data.lifeProduct2 = res.data
      })
      request({
        method: 'get',
        url: '/categoryRecommendation'
      }).then(res => {
        data.categoryRecommendation = res.data
      })
      request({
        method: 'get',
        url: '/TreasureOfZhendian'
      }).then(res => {
        data.treasureOfZhendian = res.data
      })
      request({
        method: 'get',
        url: '/GuessYouLike'
      }).then(res => {
        data.guessYouLike = res.data
      })
    })
    return {
      data
    }
  }
}
</script>
<style lang="scss">
.home-main{
  height: 100vh;
  img{
    width: 1500px;
    height: 600px;
  }
  .el-carousel--horizontal{
    z-index: -1;
  }
}
  .hoverBorder{
    padding: 2px;
  }
  .hoverBorder:hover{
  border: 1px solid white;
  border-radius: 3px;
  padding: 1px;
  }
</style>
