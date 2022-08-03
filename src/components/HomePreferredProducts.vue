<template>
    <div class="home-preferred-products">
        <div class="preferred-products-box" v-for="item in productCard" :key="item.PreferredProducts">
          <div class="img-box">
              <h3>{{item.headerTitle}}</h3>
              <img :src="item.PreferredProducts" alt="">
              <div>查看详情</div>
          </div>
        </div>
        <div class="preferred-products-box" v-for="item in lifeProduct" :key="item.imgUrl">
          <div class="img-box">
              <h3>{{item.title}}</h3>
              <img :src="item.imgUrl" alt="">
              <div>查看详情</div>
          </div>
        </div>
        <div class="preferred-products-box" v-for="item in lifeProduct2" :key="item.imgUrl">
          <div class="img-box">
              <h3>{{item.title}}</h3>
              <img :src="item.imgUrl" alt="">
              <div>查看详情</div>
          </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'HomePreferredProducts',
  props: ['productCard', 'lifeProduct', 'lifeProduct2']
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
