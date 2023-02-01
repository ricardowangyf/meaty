<template>
  <!-- 商城页面 -->
  <div class="juzhong">
    <Filterbutton />
    <div class="jianju">
      <li v-for="(tableData, i) in tableData" :key="tableData.name" :class="
        name === tableData.name || (i === 0 && !item.name)
          ? 'router-link-exact-active'
          : undefined
      " class="background">
        <router-link :to="`/shopcenter/${tableData.name}`">
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

  .jianju {
    margin-bottom: 8.5rem;
  }

  .background {
    background: #ffffff;
    margin-top: 1.8rem;
    box-shadow: 0px 18px 12px 3px rgb(173 174 179 / 13%), 1px 6px 20px 8px rgb(173 173 179 / 13%);
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

    .gouwuche {
      margin: 0;
      font-family: Helvetica;
      font-size: 5.1px;
      color: #ffffff;
      letter-spacing: 0;
      text-align: right;
    }
  }
}
</style>