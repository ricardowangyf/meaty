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
<style lang="less">
.desa {
  border-radius: 30px;
  padding: 10px;
}

.desa {
  width: 115px;
  height: 115px;
}

.paragraphcontent {
  display: flex;
}

.textspacing {
  width: 12rem;
  height: 7.8rem;
  padding-top: 1rem;

  .header {
  font-family: Helvetica;
  font-size: 18px;
  color: #333333;
  font-weight: 400;
  letter-spacing: 0;
  margin: 0;
  padding-bottom: 10px;
}
.paragraph {
  opacity: 0.6;
  font-family: Helvetica;
  font-size: 4.37px;
  color: #333333;
  letter-spacing: 0;
  font-weight: 400;
  margin-right: 40px;
}

}

.paragraph {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
</style>