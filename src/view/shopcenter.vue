<template>
  <div class="juzhong">
    <Filterbutton />
    <div>
      <li
        v-for="(tableData, i) in tableData"
        :key="tableData.name"
        :class="
          name === tableData.name || (i === 0 && !item.name)
            ? 'router-link-exact-active'
            : undefined
        "
        class="background"
      >
        <HomeAll
          :title="tableData.name"
          :des="tableData.imgurl"
          :eal="tableData.paragraph"
        />
      </li>
      <div class="gouwucjhe">
        <h1 class="gouwuche">加入购物车</h1>
      </div>
    </div>
    <FooterPage />
  </div>
</template>
<script>
import Filterbutton from "../components/Filterbutton.vue";
import FooterPage from "../components/Footer.vue";
import HomeAll from "../components/HomeAll.vue"; //商品信息
import { reqCategoryList } from "../API/index"; //轮播图
export default {
  name: "ShopCenter",
  data() {
    return {
      tableData: [],
      item: [],
      name: " ",
    };
  },
  components: {
    Filterbutton, //过滤按钮,
    HomeAll, //商品信息
    FooterPage,
  },
  mounted() {
    reqCategoryList().then((data) => {
      this.tableData = data.data;
      console.log("---> ", this.tableData);
    });
  },
};
</script>
<style lang="less">
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}
.router-link-exact-active {
  background: #4c6ef5;
  color: #fff;
}
.fontsize {
  font-size: 1rem;
  text-align: center;
  letter-spacing: 0;
  padding-top: 6px;
  opacity: 0.6;
}
.paragraphcontent {
  display: flex;
  justify-content: flex-start;
  background: #fff;
  border: none;
}
.juzhong {
  margin-left: 25px;
  margin-right: 25px;
}
.background {
  background: #ffffff;
  margin-bottom: 1.9rem;
  box-shadow: 0 -3px 6px 0 rgb(82 84 91 / 13%),
    0 3px 6px 0 rgb(106 108 118 / 13%);
  border-radius: 5.04px;
  width: 100%;
  height: 9rem;
}

.gouwucjhe {
  background: #76c477;
    position: relative;
    bottom: 76px;
    width: 78px;
    left: 239px;
    border-top-left-radius: 22px;
    height: 22px;
  .gouwuche {
    margin: 0;
    font-family: Helvetica;
    font-size: 5.1px;
    color: #ffffff;
    letter-spacing: 0;
    text-align: right;
  }
}
</style>