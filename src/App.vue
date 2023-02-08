<template>
  <div id="app">
    <router-view/>
    <!-- <HomePage /> -->
  </div>
</template>

<script>
// import HomePage from "./view/HomePage.vue";
export default {
  name: "App",
  // components: {
  //   HomePage,
  // },
  mounted() {
      let width=("body");
      if(width>=1200){
        let fontsize=width/1920*40;//fontsize为当前屏幕的基数字体，相对于设计稿计算得到的。
        ("html").css("font-size",`${fontsize}px`)
      }//当加载页面的时候设置生效
      window.onresize = () => {//当页面尺寸改变的时候生效
        return (() => {
          let width=("body");
          if(width>=1200){
            let fontsize=width/1920*40;
            ("html").css("font-size",`${fontsize}px`)
          }
        })()
      }
    }

};
</script>

<style>
body {
  margin: 0;
}
</style>