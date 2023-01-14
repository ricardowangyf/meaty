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
        <router-link to="/shopcenter/meatydetali">
          <HomeAll :title="tableData.name" :des="tableData.imgurl" :eal="tableData.paragraph" />
          <meatydetali />
        </router-link>
      </li>
      <!-- <div class="gouwucjhe">op
        <h1 class="gouwuche">{{ shoppingcart }}</h1>
      </div> -->
    </div>
    <FooterPage />
  </div>
</template>

<script>
import Filterbutton from "../components/Filterbutton.vue";//过滤按钮
import FooterPage from "../components/Footer.vue";//底部导航栏
import HomeAll from "../components/HomeAll.vue"; //商品信息
import meatydetali from "./meatydetali.vue"; //详情页面
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
    FooterPage,//底部导航栏
    meatydetali,//详情页面
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

/*.router-link-exact-active {
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
}*/

.juzhong {
  margin-left: 25px;
  margin-right: 25px;

  .jianju {
    margin-bottom: 8.5rem;
  }

  .background {
    background: #ffffff;
    margin-bottom: 1.9rem;
    box-shadow: 21px 18px 12px 3px rgb(173 174 179 / 13%), 7px 2px 8px 10px rgb(173 173 179 / 13%);
    border-radius: 5.04px;
    width: 18.7rem;
    height: 8rem;
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