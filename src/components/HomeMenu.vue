<template>
  <div class="home-menu">
    <div class="home-nav">
        <rouet-link  class="hoverBorder" @click="drawer = true"><el-icon><Expand /></el-icon><b>全部</b></rouet-link>
        <rouet-link class="hoverBorder">镇店之宝</rouet-link>
        <rouet-link class="hoverBorder">Prime</rouet-link>
        <rouet-link class="hoverBorder">优惠券</rouet-link>
        <rouet-link class="hoverBorder">新品发布</rouet-link>
        <rouet-link class="hoverBorder">奥莱折扣</rouet-link>
        <rouet-link class="hoverBorder">Kindle电子书</rouet-link>
        <rouet-link class="hoverBorder">全球开店</rouet-link>
        <rouet-link class="hoverBorder">客户服务</rouet-link>
    </div>
    <div class="home-advert">
        <img src="https://images-cn.ssl-images-amazon.cn/images/G/28/heyinan/2022/Event/Jul/SH_ToySports/XCM_Manual_1449041_2453236_4855544_400x39_zh_CN._CB631935250_.jpg" alt="">
    </div>
  </div>
  <el-drawer v-model="drawer" title="你好，登录" size="25%" direction="ltr">
    <div class="user-icon">
      <el-icon><User /></el-icon>
    </div>
    <div>
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
      <el-sub-menu index="1">
          <template #title>
            <span>热门导航</span>
          </template>
        </el-sub-menu>
        <el-menu-item index="2">
          <span>镇店之宝</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span>领券中心</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span>奥莱折扣</span>
        </el-menu-item>
        <el-menu-item index="5" class="bottomLine">
          <span>新品发布</span>
        </el-menu-item>
      </el-menu>
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <span>全部商品分类</span>
          </template>
        </el-sub-menu>
        <el-menu-item v-for="item in categoryOptions.slice(0,4)" :key="item.value" :index="item.value">
          <span>{{item.label}}</span>
        </el-menu-item>
        <div class="demo-collapse">
          <el-collapse v-model="activeName" accordion v-show="!isHidden" @click="isHidden = !isHidden">
            <el-collapse-item title="查看所有" name="1">
            </el-collapse-item>
          </el-collapse>
          <el-menu-item v-show="isHidden" v-for="item in categoryOptions.slice(5)" :key="item.value" :index="item.value">
                <span>{{item.label}}</span>
          </el-menu-item>
          <el-collapse v-model="activeName" accordion v-show="isHidden" @click="isHidden = !isHidden">
            <el-collapse-item title="查看少数" name="2">
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-menu>
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
      <el-sub-menu index="1">
          <template #title>
            <span>帮助和设置</span>
          </template>
        </el-sub-menu>
        <el-menu-item index="2">
          <span>我要开全球店</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span>我的账户</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span>帮助</span>
        </el-menu-item>
        <el-menu-item index="5" class="bottomLine">
          <span>登录</span>
        </el-menu-item>
      </el-menu>
    </div>
  </el-drawer>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HomeMenu',
  props: ['categoryOptions'],
  setup () {
    const drawer = ref(false)
    const innerDrawer = ref(false)
    const isHidden = ref(false)
    return {
      drawer,
      innerDrawer,
      isHidden
    }
  }
}
</script>

<style lang='scss'>
.home-menu{
    width: 100%;
    background-color: #232f3e;
    color: white;
    display: flex;
    height: 50px;
    align-items: center;
    .home-nav{
        width: 50%;
        display: flex;
        justify-content: space-around;
      .hoverBorder{
        padding: 5px;
      }
      .hoverBorder:hover{
        border: 1px solid white;
        border-radius: 3px;
        padding: 4px;
      }
    }
    .home-advert{
        width: 50vw;
        display: flex;
        justify-content: flex-end
    }
}
.el-drawer__body {
  padding: 0;
}
.el-drawer__header{
  background-color: #232f3e;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  padding: 0;
  height: 45px;
  .el-drawer__title{
    height: 21px;
    font-weight: bold;
    font-size: 15px;
    color: white;
  }
}
.user-icon{
  position: absolute;
  top: 7px;
  left: 80px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  .el-icon{
    font-size: 30px;
  }
}
.bottomLine{
  border-bottom: 1px solid #aaa;
}
.el-sub-menu__title{
  font-size: 20px;
  font-weight: bold;
}
.el-sub-menu__title .el-icon svg{
  display: none;
}
.el-collapse-item__header{
  text-indent:1.5rem
}
</style>
