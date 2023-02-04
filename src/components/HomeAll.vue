<template>
  <!-- 详情多肉植物组件 -->
  <div class="detali-plant">
    <div class="paragraphcontent">
      <div class="picture">
        <img :src="des" class="imgsize" />
      </div>
      <div class="textspacing">
        <h1 class="header">{{ title }}</h1>
        <h2 class="paragraph">{{ eal }}</h2>
        <el-rate v-model="value" disabled text-color="#ff9900" score-template="{value}" />
      </div>
    </div>
    <div class="shopping-cart">
      <button class="shopping-text">加入购物车</button>
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
    return {
      value: 5
    };
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

.el-rate__icon {
  font-size: 18px;
  color: #C0C4CC;
  transition: .3s;
}

.textspacing {
  width: 57%;
  height: 123px;
  padding-top: 10px;

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
    margin-right: 12px;
  }
}

.shopping-cart {
  display: flex;
  justify-content: flex-end;
}

.shopping-cart {
  height: 31px;
  text-align: center;
  font-weight: 100;
}

.shopping-text {
  border-top-left-radius: 20px;
  background: #76C477;
  border-bottom-right-radius: 20px;
  color: white;
  border: none;
  padding-top: 6px;
  display: flex;
  justify-content: flex-end;
}
</style>