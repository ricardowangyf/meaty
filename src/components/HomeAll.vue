<template>
  <!-- 路由内容 -->
  <div class="password-all">
    <div class="password-leftwhite">
      <img :src="eal" style="border-radius: 5px" />
    </div>
    <div class="password-right">
      <div class="password-jkl">
        <h1 class="title">{{ title }}</h1>
        <h2 class="des">{{ des }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    des: {
      type: String,
      default: "",
    },
    eal: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>
<style>
.password-jkl {
  background: #ffffff;
  box-shadow: 0 -3px 6px 0 rgb(103 108 135 / 13%), 0 3px 6px 0 rgb(76 77 85 / 13%);
  border-radius: 5.04px;
  width: 100%;
  height: 130px;
}
</style>