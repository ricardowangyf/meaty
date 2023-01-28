<template>
  <!-- 多肉植物组件 -->
  <div>
    <div class="paragraphcontent">
      <div class="picture">
        <img :src="des" class="imgsize" />
      </div>
      <div class="textspacing">
        <h1 class="header">{{ title }}</h1>
        <h2 class="paragraph">{{ eal }}</h2>
      </div>
    </div>
    <div class="buttondiv">
      <button class="flexend">加入购物车</button>
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
    return { };
  },
};
</script>
<style lang="less">
.imgsize {
  padding: 12px;
  border-radius: 30px;
}

.imgsize {
  width: 104px;
  height: 104px;
}

.paragraphcontent {
  display: flex;
}

.textspacing {
  width: 9.8rem;
  height: 6.6rem;
  padding-top: 1rem;

  .header {
    font-family: Helvetica;
    font-size: 18px;
    color: #333333;
    font-weight: 400;
    letter-spacing: 0;
    margin: 0;
    padding-bottom: 5px;
  }

  .paragraph {
    opacity: 0.6;
    font-family: Helvetica;
    font-size: 4.37px;
    color: #333333;
    letter-spacing: 0;
    font-weight: 400;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
}

.buttondiv {
  display: flex;
  justify-content: flex-end;
}

.flexend {
  display: flex;
  justify-content: flex-end;
}
</style>