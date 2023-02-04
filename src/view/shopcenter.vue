<template>
  <!-- 商城页面 -->
  <div class="juzhong">
    <Filterbutton />
    <div class="plant-details">
      <li v-for="(tableData) in tableData" :key="tableData.name" class="plant-details">
        <router-link :to="`/${tableData.name}/detalis`">
          <HomeAll :title="tableData.name" :des="tableData.imgurl" :eal="tableData.paragraph" />
        </router-link>
      </li>
    </div>
    <FooterPage />
  </div>
</template>

<script>
import Filterbutton from "../components/Filterbutton.vue";//过滤按钮
import FooterPage from "../components/Footer.vue";//底部导航栏
import HomeAll from "../components/HomeAll.vue"; //商品信息
import { reqCategoryList } from "../API/index"; //轮播图

export default {
  name: "ShopCenter",
  props: ["type"],
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
    FooterPage,//底部导航栏
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

.juzhong {
  margin: 0 25px 0 25px;

  .plant-details {
    margin-bottom: 2.5rem;
    box-shadow: 12px 4px 54px 3px rgb(173 174 179 / 13%), 1px 6px 20px 8px rgb(173 173 179 / 13%);
    border-radius: 5.04px;
  }

  .gouwucjhe {
    background: #76c477;
    position: relative;
    bottom: 76px;
    width: 78px;
    left: 239px;
    border-top-left-radius: 22px;
    height: 22px;
  }
}
</style>