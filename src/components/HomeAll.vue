<template>
  <!-- 路由内容 -->
  <div class="paragraphcontent">
    <div class="picture">
      <img :src="des" class="desa" />
    </div>
    <div class="textspacing">
      <h1 class="header">{{ title }}</h1>
      <h2 class="paragraph">{{ eal }}</h2>
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
  box-shadow: 0 -3px 6px 0 rgb(103 108 135 / 13%),
    0 3px 6px 0 rgb(76 77 85 / 13%);
  border-radius: 5.04px;
  width: 100%;
  height: 130px;
}

.paragraphcontent {
  display: flex;
  justify-content: space-between;
}

.desa {
  border-radius: 5px;
  padding: 20px;
}

.desa {
  width: 100px;
  height: 100px;
}

.textspacing {
  padding-top: 1.3rem;
}

.textspacing {
  height: 6rem;
  width: 12rem;
}

.textspacing .header {
  font-family: Helvetica;
  font-size: 18px;
  color: #333333;
  font-weight: 400;
  letter-spacing: 0;
}

.textspacing .paragraph {
  opacity: 0.6;
  font-family: Helvetica;
  font-size: 13.37px;
  color: #333333;
  font-weight: 400;
  margin-right: 40px;
}
</style>