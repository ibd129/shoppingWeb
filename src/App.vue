<template>
    <TopLab :categoryOptions="data.categoryOptions" v-show="isNav"/>
    <HomeMenu :categoryOptions="data.categoryOptions" v-if="isNav"/>
    <router-view :key="$route.fullPath"/>
    <Footer v-show="isNav"/>
</template>

<script>
// @ is an alias to /src
import TopLab from '@/components/TopLab.vue'
import HomeMenu from '@/components/HomeMenu.vue'
import Footer from '@/components/Footer.vue'
import { onMounted, onUpdated, reactive, ref } from '@vue/runtime-core'
import request from '@/utils/request'
import { useRouter } from 'vue-router'
export default {
  name: 'HomeView',
  components: {
    TopLab,
    HomeMenu,
    Footer
  },
  setup () {
    const router = useRouter()
    const data = reactive({
      categoryOptions: [],
      userInfo: []
    })
    const isNav = ref(true)
    onMounted(() => {
      request({
        method: 'get',
        url: '/AllCategories'
      }).then(res => {
        data.categoryOptions = res.data
      })
      request({
        method: 'get',
        url: '/userInfo'
      }).then(res => {
        data.userInfo = res.data
      })
    })
    onUpdated(() => {
      if (router.currentRoute._value.path === '/login' ||
      router.currentRoute._value.path === '/register' ||
      router.currentRoute._value.path === '/forgotpassword') {
        isNav.value = false
      } else {
        isNav.value = true
      }
    })
    return {
      data,
      isNav
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0;
  scroll-behavior: smooth;
  text-decoration: none;
}
body{
  background-color: #eaeded;
}
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
