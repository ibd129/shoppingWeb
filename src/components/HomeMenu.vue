<template>
  <div class="home-menu">
    <div class="home-nav">
        <rouet-link>全部</rouet-link>
        <rouet-link>镇店之宝</rouet-link>
        <rouet-link>Prime</rouet-link>
        <rouet-link>优惠券</rouet-link>
        <rouet-link>新品发布</rouet-link>
        <rouet-link>奥莱折扣</rouet-link>
        <rouet-link>Kindle电子书</rouet-link>
        <rouet-link>全球开店</rouet-link>
        <rouet-link>客户服务</rouet-link>
    </div>
    <div class="home-advert">
        <img src="https://images-cn.ssl-images-amazon.cn/images/G/28/heyinan/2022/Event/Jul/SH_ToySports/XCM_Manual_1449041_2453236_4855544_400x39_zh_CN._CB631935250_.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMenu'
}
</script>

<style lang='scss'>
.home-menu{
    width: 100%;
    background-color: #232f3e;
    color: white;
    display: flex;
    height: 50px;
    line-height: 50px;
    .home-nav{
        width: 50%;
        display: flex;
        justify-content: space-around;
    }
    .home-advert{
        width: 50vw;
        display: flex;
        justify-content: flex-end
    }
}
</style>
