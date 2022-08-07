<template>
  <div id="order">
    <div class="orderContainer">
      <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>我的订单</el-breadcrumb-item>
    </el-breadcrumb>
      <el-card class="box-card">
        <div  class="text item">订单：如果您需要管理和查询2015年11月之前的海外购订单，请点击这里。</div>
      </el-card>
      <div class="orderTitle">
        <div><h2>我的订单</h2></div>
        <el-input
          v-model="input1"
          class="w-50 m-2"
          size="large"
          placeholder="搜索所有订单"
          prefix-icon="Search"
        />
        <el-button type="primary" round>搜索订单</el-button>
      </div>
      <div class="orderTag">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="订单" name="first">
            <div>
              <h3>0 订单</h3>
              <span>下单于</span>
              <el-select v-model="options.value" class="m-2" placeholder="请选择时间">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div>过去 30 天 期间您未下任何订单. 查看 过去3个月 期间的订单</div>
          </el-tab-pane>
          <el-tab-pane label="尚未配送" name="second" >
            <div>需要查找订单？您的所有订单已经配送。 查看所有订单</div>
            <el-table v-loading="loading" element-loading-background="white" :data="tableData" style="width: 100%">
              <el-table-column  v-if="tableData.length === 0" prop="date" label="Date" width="180" />
              <el-table-column  v-if="tableData.length > 0" prop="date" label="Date" width="180" />
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="已取消的订单" name="third">
            <div>我们未找到任何已取消的订单 (在过去6个月)。 查看所有订单</div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
export default {
  name: 'orderInfo',
  setup () {
    const options = reactive(
      [
        {
          value: '过去30天',
          label: '过去30天'
        },
        {
          value: '过去3个月',
          label: '过去3个月'
        },
        {
          value: '2022',
          label: '2022'
        }
      ]
    )
    const activeName = ref('first')
    const loading = ref(true)
    const tableData = reactive([
      {
        date: '订单1'
      },
      {
        date: '订单2'
      }
    ])
    setTimeout(() => {
      loading.value = false
    }, 4000)
    if (tableData.length === 0) {
      tableData[0] = { date: '暂无订单' }
    }
    console.log(tableData)
    return {
      options,
      activeName,
      loading,
      tableData
    }
  }
}
</script>

<style lang="scss">
#order{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  .orderContainer{
    width: 70%;
    div {
      margin: 10px;
    }
  }
  .orderTitle{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    div{
      display: flex;
      width: 100%;
    }
  }
  .orderTag{
    .el-tabs {
      --el-tabs-header-height: 30px;
    }
    .el-tabs__active-bar{
      left: -10px;
    }
  }
}
</style>
