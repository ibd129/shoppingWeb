<template>
    <div class="home-preferred-products">
        <div class="preferred-products-box" v-for="item in 8" :key="item">
        <div class="img-box">
            <h3>今日特惠 同步全球 天天低价</h3>
            <img src="https://images-cn.ssl-images-amazon.cn/images/G/28/Yuzhe/GW/PC/ATF/SingleImageCard/Quad5_Deals_DOTD_397x304._SY304_CB621721473_.jpg" alt="">
            <div>查看详情</div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomePreferredProducts'
}
</script>

<style lang="scss">
.home-preferred-products{
  margin-top: -450px;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .preferred-products-box{
    width: 350px;
    height: 385px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    background-color: #fff;
    overflow: hidden;
    padding:20px 0px 15px 0px;
    .img-box{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      img{
        width: 300px;
        height: 300px;
      }
      h3{
        display: flex;
        width: 100%;
        text-indent: 1.5rem;
        margin-bottom: 10px;
      }
      div{
        display: flex;
        width: 100%;
        text-indent: 1.5rem;
        margin-top: 25px;
        font-size: 0.5rem;
      }
    }
  }
}
.today{
    margin-top: 0px;
}
</style>
