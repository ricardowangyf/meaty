<template>
  <div>
    <!-- 商城页面 -->
    <div class="set-center">
      <div class="margin">
        <Filterbutton />
        <li v-for="(item, index) in tableData" :key="index" class="plant-details" @click="button(item)">
          <HomeAll :title="item.name" :des="item.imgurl" :eal="item.paragraph" />
        </li>
      </div>
      <FooterPage />
    </div>
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
      // 购物车
      shopCart: [],
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
  methods: {
    button(item) {
      this.$router.push({
        path: '/detail',
        query: {
          'data': JSON.stringify(item)
        }
      })
    },
 

  }
};
</script>
<style lang="less">
li {
  list-style-type: none;
}

a {
  text-decoration: none;
}

.margin {
  margin: 0 25px 0 25px;

  .plant-details {
    background: #ffffff;
    margin-bottom: 2.5rem;
    box-shadow: 12px 4px 54px 3px rgb(173 174 179 / 13%), 1px 6px 20px 8px rgb(173 173 179 / 13%);
    border-radius: 5.04px;
  }
}
</style>