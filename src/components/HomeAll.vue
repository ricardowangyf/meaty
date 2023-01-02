<template>
  <!-- 多肉植物组件 -->
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

.desa {
  border-radius: 30px;
  padding: 20px;
}

.desa {
  width: 100px;
  height: 100px;
}

.paragraphcontent {
  display: flex;
}

.textspacing {
  padding-top: 1.3rem;
}

.textspacing {
  height: 7.6rem;
  width: 10rem;
}

.textspacing .header {
  font-family: Helvetica;
  font-size: 18px;
  color: #333333;
  font-weight: 400;
  letter-spacing: 0;
  margin: 0;
}

.textspacing .paragraph {
  opacity: 0.6;
  font-family: Helvetica;
  font-size: 4.37px;
  color: #333333;
  letter-spacing: 0;
  font-weight: 400;
  margin-right: 40px;
}

.paragraph {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
</style>