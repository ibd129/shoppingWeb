<template>
    <div id="help">
        <div class="helpTitle">账户和登录问题</div>
        <el-card class="box-card">
        <template #header>
        <div class="card-header">
            <span>请选择您的问题类型?</span>
        </div>
        </template>
        <div class="text item">
            <span>选择一个问题</span>
            <el-select v-model="data.options.value" placeholder="请选择类别">
                    <el-option
                    v-for="item in data.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
            </el-select>
        </div>
    </el-card>
        <div class="helpContent" v-show="data.options.value==='选项1'">
        <el-card class="box-card">
                <template #header>
                <div class="card-header">
                    <span>你知道吗</span>
                </div>
                </template>
                <div class="text item">
                    您是否尝试过我们的密码重置页面？
                </div>
                <div class="text item">
                    如果您已尝试重置密码，但尚未收到电子邮件，请检查您的垃圾邮件文件夹。
                </div>
                <div class="text item">
                    如果您已尝试使用手机号码重置密码，请关注亚马逊发送的验证码短信。
                </div>
                <div class="text item">
                    如果您最近更新了密码，请尝试清除浏览器自动填入的密码并重新输入新密码。
                </div>
            </el-card>
        </div>
        <div class="helpContent" v-show="data.options.value==='选项2'">
       <el-card class="box-card">
            <template #header>
            <div class="card-header">
                <span>你知道吗</span>
            </div>
            </template>
            <div class="text item">
                您是否尝试过我们的密码重置页面？
            </div>
             <div class="text item">
                如果您已尝试重置密码，但尚未收电子邮件，请检查您的垃圾邮件文件夹。
            </div>
             <div class="text item">
                如果您已尝试使用手机号码重置密码，请关注亚马逊发送的验证码短信。
            </div>
             <div class="text item">
                如果您最近更新了密码，请尝试清除浏览器自动填入的密码并重新输入新密码。
            </div>
            <div class="text item">
                如果您需要更多密码相关的帮助，请致电 4008105666 联系我们。
            </div>
        </el-card>
        </div>
        <div class="helpContent" v-show="data.options.value==='选项3'">
       <el-card class="box-card">
            <template #header>
            <div class="card-header">
                <span>你知道吗</span>
            </div>
            </template>
            <div class="text item">
                您可以从我们的创建账户页面。
            </div>
             <div class="text item">
                如果您在创建帐户时需要更多帮助，请致电 4008105666 联系我们。
            </div>
        </el-card>
        </div>
        <div class="helpContent" v-show="data.options.value==='选项4'">
       <el-card class="box-card">
            <template #header>
            <div class="card-header">
                <span>你知道吗</span>
            </div>
            </template>
            <div class="text item">
                很抱歉，您在创建账户时遇到问题。
            </div>
             <div class="text item">
                您是否尝试过我们的创建账户页面。
            </div>
             <div class="text item">
                如果您在创建帐户时需要更多帮助，请致电 4008105666 联系我们。
            </div>
        </el-card>
        </div>
    </div>
    <Footer/>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'helpCustomer',
  setup () {
    const data = reactive({
      options: [{
        value: '选项1',
        label: '我忘记了我的密码'
      }, {
        value: '选项2',
        label: '无法登录我的账户'
      }, {
        value: '选项3',
        label: '没有帐户，但需要协助'
      }, {
        value: '选项4',
        label: '我无法创建账户'
      }]
    })
    return {
      data
    }
  }
}
</script>

<style  lang="scss">
#help{
    margin: 80px;
    width: 60vw;
    .helpTitle{
        display: flex;
        font-size: 25px;
        font-weight: bold;
        margin: 10px;
    }
    .card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.box-card {
  width: 60vw;
}
.el-card__body{
    .item{
        display: flex;
        justify-content: space-between
    }
}
}
.helpContent{
    margin-top: 30px;
    .card-header{
        font-size: 18px;
        color: orange;
    }
}
</style>
