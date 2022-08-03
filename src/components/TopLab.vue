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
              <el-select v-model="select" placeholder="全部分类" style="width: 115px; height:40px">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </template>
            <template #append>
              <el-icon><Search /></el-icon>
            </template>
          </el-input>
        </div>
    </div>
    <div class="login func-entry hoverBorder">
      <div style="display: flex; align-items: center">
        <el-popover placement="bottom" :width="400" trigger="click">
          <template #reference>
            <span class="row-top"><el-button>你好，登录</el-button></span>
            <span class="row-bottom"><el-button>账户及列表</el-button></span>
          </template>
        </el-popover>
      </div>
    </div>
    <div class="order func-entry hoverBorder">
      <span class="row-top">退货</span>
      <span class="row-bottom">与我的订单</span>
    </div>
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
import { ref } from 'vue'
export default {
  name: 'TopLab',
  props: ['options'],
  setup () {
    const visible = ref(false)
    return {
      visible
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
