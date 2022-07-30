<template>
  <div class="home">
    <TopLab/>
    <HomeMenu/>
    <div class="home-main">
      <el-carousel :interval="5000" arrow="always" height="600px" indicator-position="none">
        <el-carousel-item v-for="item in data.imgUrl" :key="item.imageUrl">
          <h3 text="2xl" justify="center">
            <img :src="item.imageUrl" alt="">
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <HomePreferredProducts/>
    <HomeCategoryRecommendation/>
    <HomeCategoryRecommendation/>
    <div>
      <img src="https://images-cn.ssl-images-amazon.cn/images/G/28/JPMS/2022/JPFD/XCM_Manual_ORIGIN_1452528_4867298_1500x200_1X._CB632159817_.jpg" alt="">
    </div>
    <HomePreferredProducts class="today"/>
    <div>
      <img src="https://images-cn.ssl-images-amazon.cn/images/G/28/Freya/mkt/kol/Gateway_desktop_1500x200_200-15._CB623763127_.jpg" alt="">
    </div>
    <HomePreferredProducts class="today"/>
    <div>
      <img src="https://images-cn.ssl-images-amazon.cn/images/G/28/CN-Ad/CMB_Feb_1500x300._CB646359670_.jpg" alt="">
    </div>
    <HomePreferredProducts class="today"/>
    <HomeCategoryRecommendation/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopLab from '../components/TopLab.vue'
import HomeMenu from '../components/HomeMenu.vue'
import HomePreferredProducts from '../components/HomePreferredProducts.vue'
import HomeCategoryRecommendation from '../components/HomeCategoryRecommendation.vue'
import { onMounted, reactive } from '@vue/runtime-core'
import axios from 'axios'

export default {
  name: 'HomeView',
  components: {
    TopLab,
    HomeMenu,
    HomePreferredProducts,
    HomeCategoryRecommendation
  },
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
  }
}
</script>
<style scoped lang="scss">
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
</style>
