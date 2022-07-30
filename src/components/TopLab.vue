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
                <el-option label="Restaurant" value="1" />
                <el-option label="Order No." value="2" />
                <el-option label="Tel" value="3" />
              </el-select>
            </template>
            <template #append>
              <el-icon><Search /></el-icon>
            </template>
          </el-input>
        </div>
    </div>
    <div class="login">login</div>
    <div class="order">order</div>
    <div class="cart">cart</div>
  </div>
</template>

<script>
export default {
  name: 'TopLab'
}
</script>

<style lang=scss>
.top-bar{
  display: flex;
  justify-content: space-between;
  background-color: #101a22;
  height: 80px;
  line-height: 80px;
  .el-input__inner {
    --el-input-inner-height: calc(var(--el-input-height, 32px) - -6px);
  }
  .logo{
    width: 150px;
    img{
      width: 200px;
      height: 100%;
    }
  }
}

</style>
