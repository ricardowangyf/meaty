<template>
  <!-- 主页 -->
  <div class="body center">
    <div class="main">
      <div class="inputandcion">
        <input class="keyword" laceholder="搜索你想要的产品" v-model.trim="keyWord" />
        <!-- <button @click="serch">
          <img class="hualigs" src="../assets/img/search.svg" alt="" />
        </button> -->
      </div>
      <div class="centernow">
        <!-- 轮播图 -->
        <RectAngle />

        <!-- 过滤按钮 -->
        <Filterbutton />

        <li v-for="(tableData) in tableData" :key="tableData.name" class="background">
          <HomeAll :title="tableData.name" :des="tableData.imgurl" :eal="tableData.paragraph" />
        </li>
      </div>
      <!-- 底部商品导航 -->
      <FooterPage />
    </div>
  </div>
</template>

<script>
import HomeAll from "../components/HomeAll.vue"; //商品信息
import Filterbutton from "../components/Filterbutton.vue"; //过滤按钮
import RectAngle from "../components/rectangle.vue"; //轮播图组件
import FooterPage from "../components/Footer.vue"; //底部商品导航
import { reqCategoryList } from "../API/index"; //轮播图

export default {
  name: "HomePage",
  props: ["type"],
  data() {
    return {
      tableData: [],
      item: [],
      name: " ",
      keyWord: " ",
    };
  },
  mounted() {
    reqCategoryList().then((data) => {
      this.tableData = data.data;
      console.log("---> ", this.tableData);
    });
  },
  components: {
    HomeAll,
    FooterPage, //底部商品导航,
    Filterbutton, //过滤按钮,
    RectAngle,//轮播图
  },
  watch: {
    $route: {
      handler(newVal, olaVal) {
        const newType = newVal.params.type;
        const oldType = olaVal.params.type;
        this.name = newVal.params.name;
        if (newType && newType !== oldType) {
          this.filterDatas(newType, this.tableData);
        }
      },
    },
  },
  methods: {
    filterDatas(type, list) {
      if (type === "sunflower") {
        this.item = list.filter((item) => item.sunflower);
      } else if (type === "cactus") {
        this.item = list.filter((item) => item.cactus);
      } else if (type === "greenpineapple") {
        this.item = list.filter((item) => item.greenpineapple);
      } else {
        this.item = list;
      }
      console.log("this.item", this.item);
      console.log("type", type);
      this.item &&
        this.item.length > 0 &&
        this.$router.push(` `).catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang='less'>
p {
  margin: 0;
}

h1 {
  margin: 0;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
}

.body {
  padding-top: 25px;
}

.inputandcion {
  display: flex;
}

.router-link-exact-active {
  background: #4c6ef5;
  color: #fff;
}

.inputandcion {
  padding-left: 1rem;
  padding-bottom: 2rem;

  button {
    position: relative;
    right: 35px;
    background: rgb(250, 250, 245);
    border: none;
    padding: 0;
  }

  .keyword {
    width: 20rem;
    background: #fafaf5;
    border-radius: 5.76px;
    height: 2.5rem;
    border: none;
    outline: none;
  }
}

.centernow {
  margin-left: 0.9rem;
  margin-right: 0.9rem;
  margin-bottom: 8.5rem;

  .cactus {
    width: 8rem;
    height: 9.1rem;
  }

  .background {
    background: #ffffff;
    margin-bottom: 1.8rem;
    box-shadow: 0px 18px 12px 3px rgb(173 174 179 / 13%), 1px 6px 20px 8px rgb(173 173 179 / 13%);
    border-radius: 5.04px;
    height: 8rem;
  }
}

.fontsize {
  font-size: 1rem;
  text-align: center;
  letter-spacing: 0;
  padding-top: 6px;
  opacity: 0.6;
}
</style>