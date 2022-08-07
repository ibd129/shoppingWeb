<template>
  <div class="top-bar">
    <div class="logo">
      <img src="../assets/logo.jpeg" alt="">
    </div>
    <div class="search">
        <div class="mt-4">
          <el-input
            v-model="input3"
            placeholder="输入要搜索的商品"
            class="input-with-select"
            style="width: 70vw; height:40px"
          >
            <template #prepend>
              <el-select v-model="data.categoryOptions.label" placeholder="全部分类" style="width: 115px; height:40px">
                <el-option v-for="item in data.categoryOptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </template>
            <template #append>
              <el-icon><Search /></el-icon>
            </template>
          </el-input>
        </div>
    </div>
    <router-link to="login">
      <div class="login func-entry hoverBorder">
          <span class="row-top">你好，{{token ? token : '登录'}}</span>
          <span class="row-bottom">{{token ? '退出登录' : '账户及列表'}}</span>
      </div>
    </router-link>
    <router-link to="order">
      <div class="order func-entry hoverBorder">
        <span class="row-top">退货</span>
        <span class="row-bottom">与我的订单</span>
      </div>
    </router-link>
    <div class="cart hoverBorder">
      <div class="cart-count-container">
        <span class="cart-count">0</span>
        <span class="cart-icon">🛒</span>
      </div>
      <div>
        <span class="cart-text">购物车</span>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import request from '@/utils/request'
export default {
  name: 'TopLab',
  props: ['categoryOptions'],
  setup () {
    const visible = ref(false)
    const token = localStorage.getItem('token')
    const data = reactive({
      categoryOptions: []
    })
    onMounted(() => {
      request({
        method: 'get',
        url: '/AllCategories'
      }).then(res => {
        data.categoryOptions = res.data
      })
    })
    console.log(token)
    return {
      visible,
      token,
      data
    }
  }
}

</script>

<style lang=scss>
.top-bar{
  color: white;
  display: flex;
  justify-content: space-between;
  background-color: #101a22;
  height: 75px;
  line-height: 75px;
  .el-input__inner {
    --el-input-inner-height: calc(var(--el-input-height, 32px) - -6px);
  }
  .logo{
    width: 150px;
    img{
      width: 150px;
      height: 100%;
    }
  }
  .func-entry{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 5px;
    span:nth-child(1){
      font-size: 0.6rem;
      margin-top: -10px;
      height: 15px;
    }
    span:nth-child(2){
      font-size: 1rem;
      font-weight: bold;
      height: 55px;
    }
  }
}
.cart{
  display: flex;
  .cart-count-container{
    font-size: 0.6rem;
    height: 15px;
    .cart-count{
      position: relative;
      left: 22px;
      top: -15px;
      font-size: 1rem;
      color: orangered;
      font-weight: bold;
    }
    .cart-icon{
      font-size: 2rem;
    }
  }
  .cart-text{
    font-size: 1rem;
    font-weight: bold;
    height: 55px;
  }
}
</style>
