<template>
  <div>
    <!-- 商城页面 -->
    <div class="set-center">
      <div class="margin">
        <div class="button">
          <li v-for="(items, index) in tabList" :key="index" class="plant-name"
            :class="{ active: currentIndex === index }" @click="button(item)">
            {{ items.name }}
          </li>
        </div>
        <li v-for="(tableData) in tableData" :key="tableData.name" class="plant-details">
          <router-link :to="`/${tableData.name}/detalis`">
            <HomeAll :title="tableData.name" :des="tableData.imgurl" :eal="tableData.paragraph" />
          </router-link>
        </li>
      </div>
      <FooterPage />
    </div>
  </div>
</template>

<script>
import FooterPage from "../components/Footer.vue";//底部导航栏
import HomeAll from "../components/HomeAll.vue"; //商品信息
import { reqCategoryList } from "../API/index"; //轮播图

export default {
  name: "ShopCenter",
  props: ["type"],
  data() {
    return {
      tableData: [],
      items: [],
      name: " ",
      currentIndex: 0,
      tabList: [
        {
          id: 1,
          name: '全部'
        }, {
          id: 2,
          name: '向日葵'
        },
        {
          id: 3,
          name: '仙人掌'
        },
        {
          id: 4,
          name: '玉露'
        }
      ],
    };
  },
  methods: {
    //列表切换
    clickTab(index, item) {
      this.currentIndex = index
      this.getList(item.name)
    },
    button(item) {
      this.$router.push({
        path: '/detail',
        query: {
          'name': item.name
        }
      }),
        this.showData = !this.showData;
      this.HomePagetwo = this.dataToShow;
    },
  },
  components: {
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

.margin {
  margin: 0 25px 0 25px;

  .router-link-exact-active {
    background: #4c6ef5;
    color: #fff;
  }

  .plant-details {
    background: #ffffff;
    margin-bottom: 2.5rem;
    box-shadow: 12px 4px 54px 3px rgb(173 174 179 / 13%), 1px 6px 20px 8px rgb(173 173 179 / 13%);
    border-radius: 5.04px;
  }

  .button {
    display: flex;
    justify-content: space-between;
    padding: 25px 0 25px 0;
  }

  .plant-name {
    text-align: center;
    color: #333333;
    box-shadow: 0 4px 10px 0 rgb(76 110 245 / 37%);
    border-radius: 19.8px;
    width: 20%;
    letter-spacing: 0;
    background: #F1F3F5;
    font-size: 0.7rem;
    opacity: 0.7;
    padding-top: 0.4rem;
    height: 24px;
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