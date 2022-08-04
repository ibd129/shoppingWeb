<template>
  <div id="forgotpassword"> <el-card class="box-card">
        <template #header>
        <div class="card-header">
            <span>密码帮助</span>
        </div>
        <div>输入与您的 Amazon 账户相关联的电子邮件地址或手机号码。</div>
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
            </el-form>
        </div>
        <el-divider></el-divider>
        <div>您是否修改过邮箱地址或手机号码？</div>
        <div class="forgotpasswordFooter">如果您不再使用与您的 Amazon 账户相关联的电子邮件地址，您可以联系<router-link to="order">客户服务部</router-link>，帮助您恢复账户访问。</div>
    </el-card>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'forgotView',
  props: ['isNav'],
  setup () {
    const router = useRouter()
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
      if (data.label === '忘记密码') {
        router.push({
          path: 'forgotpassword'
        })
      }
      if (data.label === '其他登录问题') {
        router.push({
          path: 'help'
        })
      }
    }
    return {
      labelPosition,
      formLabelAlign,
      data,
      handleNodeClick,
      router
    }
  }
}
</script>

<style lang="scss">
#forgotpassword{
    display: flex;
    height: 100vh;
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
.forgotpasswordFooter{
    font-size: 12px;
    a{
        color: aqua;
    }
}
</style>
