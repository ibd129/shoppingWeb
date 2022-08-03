<template>
  <div class="footer">
    <div class="navBackTop">
        <a href="#app">回到顶部</a>
    </div>
    <div class="navAbout">
        <div>
            <a>了解我们</a>
            <a>人才招聘</a>
            <a>亚马逊科学</a>
        </div>
        <div>
            <a>合作信息</a>
            <a>我要开店</a>
            <a>加入联盟</a>
        </div>
        <div>
            <a>帮助中心和购物指南</a>
            <a>付款与退款</a>
            <a>退货与换货</a>
            <a>帮助中心</a>
        </div>
        <div>
            <a>APP下载</a>
            <a>iOS</a>
            <a>Android</a>
        </div>
    </div>
    <div class="navRegion">
        <img src="@/assets/logo.jpeg" alt="">
        <div class="regionName">
            <a>美国/地区</a>
            <a>加拿大</a>
            <a>巴西</a>
            <a>墨西哥</a>
            <a>英国/地区</a>
            <a>法国/地区</a>
            <a>意大利</a>
            <a>西班牙</a>
            <a>德国/地区</a>
            <a>日本</a>
            <a>印度</a>
            <a>家族网站:Shopbop</a>
        </div>
    </div>
    <div class="VersionNumber">
        <div class="navAbout">
            <div>
            <a>互联网药品信息服务资格证书(京)-非经营性-2012-0005</a>
            <a>增值电信业务经营许可证:合字B2-20090004</a>
        </div>
        <div>
            <a>京公网安备11010502030232号</a>
            <a>营业执照:91110000717883277U</a>
        </div>
        <div>
            <a>京ICP备11014788号</a>
            <a>出版物经营许可证</a>
        </div>
        </div>
        <div class="end">
            <a>使用条件</a>
            <a>隐私声明</a>
            <span>© 1996-2022，Amazon.com, Inc.或其附属公司</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navFooter'
}
</script>

<style lang="scss">
.footer{
   .navBackTop{
        background-color: #37475a;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        a{
            color: #cbf3ff;
        }
   }
   .navBackTop:hover{
    opacity: .9;
   }
   .navAbout{
    background-color: #232f3e;
    height: 188px;
    display: flex;
    justify-content: space-evenly;
    padding: 30px;
    border-bottom: white solid 1px;
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        a{
            color: white;
            margin: 10px;
        }
        a:nth-child(1) {
            font-size: 18px;
            font-weight: bold;
        }
    }
   }
   .navRegion{
    height: 150px;
    background-color: #232f3e;
    img{
        width: 100px;
        margin: 20px;
    }
    .regionName{
        display: flex;
        justify-content: center;
        text-indent: 1rem;
        align-items: center;
        color: white;
        font-size: 12px;
    }
   }
   .VersionNumber{
    height: 165px;
    background-color: #131a22;
    font-size: 12px;
    div a:nth-child(1){
        font-weight: normal!important;
        font-size: 12px;
    }
    .navAbout{
        background: none;
        border:none;
        height: 50px;
    }
    .end{
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        text-indent: 1rem;
        padding: 15px;
    }
   }
}
</style>
