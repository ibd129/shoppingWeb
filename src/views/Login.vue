<template>
  <div id="login">
    <el-card class="box-card">
        <template #header>
        <div class="card-header">
            <span>登录</span>
        </div>
        </template>
        <div class="text item">
          <el-form
            :label-position="labelPosition"
            label-width="100px"
            :model="formLabelAlign"
            style="max-width: 460px"
        >
                <el-form-item label="邮箱地址或手机号码">
                <el-input v-model="formLabelAlign.name" />
                </el-form-item>
                <el-button type="primary" plain size="large">继续</el-button>
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
                <el-divider>更多登录方式</el-divider>
                <el-button type="success">
                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M36.9974 21.7112C36.8434 13.0079 29.7401 6 21 6C12.1634 6 5 13.1634 5 22C5 26.1701 6.59531 29.9676 9.20892 32.8154L8.01043 40.0257L15.125 36.9699C18.2597 38.0122 21.218 38.2728 24 37.7516" fill="none"/><path d="M36.9974 21.7112C36.8434 13.0079 29.7401 6 21 6C12.1634 6 5 13.1634 5 22C5 26.1701 6.59531 29.9676 9.20892 32.8154L8.01043 40.0257L15.125 36.9699C18.2597 38.0122 21.218 38.2728 24 37.7516" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M15.125 20.4667C16.3676 20.4667 17.375 19.4519 17.375 18.2C17.375 16.9482 16.3676 15.9333 15.125 15.9333C13.8824 15.9333 12.875 16.9482 12.875 18.2C12.875 19.4519 13.8824 20.4667 15.125 20.4667Z" fill="#000000"/><path d="M24.125 20.4667C25.3676 20.4667 26.375 19.4519 26.375 18.2C26.375 16.9482 25.3676 15.9333 24.125 15.9333C22.8824 15.9333 21.875 16.9482 21.875 18.2C21.875 19.4519 22.8824 20.4667 24.125 20.4667Z" fill="#000000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M38.7618 39.9293C37.0135 41.2302 34.8467 42 32.5 42C26.701 42 22 37.299 22 31.5C22 25.701 26.701 21 32.5 21C38.299 21 43 25.701 43 31.5C43 33.0997 42.6423 34.6159 42.0024 35.9728" fill="none"/><path d="M38.7618 39.9293C37.0135 41.2302 34.8467 42 32.5 42C26.701 42 22 37.299 22 31.5C22 25.701 26.701 21 32.5 21C38.299 21 43 25.701 43 31.5C43 33.0997 42.6423 34.6159 42.0024 35.9728" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="bevel"/><path fill-rule="evenodd" clip-rule="evenodd" d="M42.0024 35.9728L43 42L38.7618 39.9293" fill="none"/><path d="M42.0024 35.9728L43 42L38.7618 39.9293" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M35.6875 30.7999C34.7555 30.7999 34 30.0388 34 29.0999C34 28.161 34.7555 27.3999 35.6875 27.3999C36.6195 27.3999 37.375 28.161 37.375 29.0999C37.375 30.0388 36.6195 30.7999 35.6875 30.7999Z" fill="#000000"/><path d="M28.9375 30.7999C28.0055 30.7999 27.25 30.0388 27.25 29.0999C27.25 28.161 28.0055 27.3999 28.9375 27.3999C29.8695 27.3999 30.625 28.161 30.625 29.0999C30.625 30.0388 29.8695 30.7999 28.9375 30.7999Z" fill="#000000"/></svg>&nbsp;微信账号登录
                </el-button>
                <el-checkbox v-model="checked">我已阅读并同意网站的使用条件及隐私声明。</el-checkbox>
                <div class="sureChecked">! 请阅读并勾选网站使用条件和隐私声明</div>
            </el-form>
        </div>
        <el-divider>Amazon的新客户？</el-divider>
        <el-button plain>
          创建您的 Amazon 账户
        </el-button>
    </el-card>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  name: 'LoginView',
  setup () {
    const labelPosition = ref('top')
    const formLabelAlign = reactive({
      name: '',
      region: '',
      type: ''
    })
    const data = reactive(
      [{
        label: '需要帮助？',
        children: [{
          label: '忘记密码'
        },
        {
          label: '其他登录问题'
        }]
      }]
    )
    function handleNodeClick (data) {
      console.log(data.$treeNodeId)
    }
    return {
      labelPosition,
      formLabelAlign,
      data,
      handleNodeClick
    }
  }
}
</script>

<style lang="scss">
#login{
    display: flex;
    height: 80vh;
    justify-content: center;
    align-items: center;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
  font-weight: bold;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.box-card {
  width: 480px;
}
.el-card__body{
    .is-plain{
        width: 440px
    }
    .text{
        .el-form{
            .el-button{
                width: 440px;
            }
        }
    }
}
.el-tree{
    color: skyblue;
}
.el-checkbox__label{
    font-size: 12px;
}
.sureChecked{
    font-size: 12px;
}
</style>
