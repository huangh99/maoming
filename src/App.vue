<template>
  <router-view></router-view>
</template>
<script setup>
</script>

<style lang="scss">
html,
body {
  box-sizing: border-box;
  height: 100%;
  margin: 0;
  overflow: hidden;
  padding: 0;
  width: 100%;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

html ::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

/* 字体设置 */
/* 思源黑体-中等 */
@font-face {
  font-family: 'SHSCM';
  src: url('/font/SourceHanSansCN-Medium.otf');
}

/* 思源黑体-常规 */
@font-face {
  font-family: 'SHSCN';
  src: url('/font/SourceHanSansCN-Normal.otf');
}

/* 优设标题黑 */
@font-face {
  font-family: 'YouSheBiaoTiHei';
  src: url('/font/YouSheBiaoTiHei.ttf');
}

/* 旁门正道 */
@font-face {
  font-family: 'PangMenZhengDao';
  src: url('/font/PangMenZhengDaoBiaoTi.ttf');
}

/* 优设体 */
@font-face {
  font-family: 'YouSheRegular';
  src: url('/font/YouSheRegular.TTF');
}

/* 欣意冠黑体 */
@font-face {
  font-family: 'XinYiGuanHeiTi';
  src: url('/font/XinYiGuanHeiTi.ttf');
}

/* 钉钉进步体 */
@font-face {
  font-family: 'DingTalkJinBuTi';
  src: url('/font/DingTalkJinBuTi.ttf');
}

#app {
  font-family: 'SHSCN', Avenir, Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  line-height: 1;
  text-align: left;
  color: #2c3e50;
  width: 100%;
  box-sizing: border-box;
}

:focus-visible {
  outline: unset;
}
</style>

<style lang="scss" >
#app{
    :deep(.el-dialog){
      padding: 0;
      background-color: red!important;

      &.dialog-wrapper{
        :deep(.el-dialog__header){
          background-color: red!important;
          padding: 0;
        }

      }

    }
    // :deep([role="dialog"]){
    //   &.el-overlay-dialog{
    //     .el-dialog{
    //       padding: 0;
    //       background-color: red!important;

    //       .el-dialog__header{
    //         background-color: red;
    //       }
    //     }
    //   }
    // }
  }
</style>
