<template>
  <!-- 主页 -->
  <div class="body center">
    <div class="main">
      <div class="inputandcion">
        <input v-model="keyWord" placeholder="搜索你想要的产品" suffix-icon change class="keyword" />
        <button class="sousuo" @click="serch">
          <img class="hualigs" src="../assets/img/search.svg" alt />
          <div class="claer" />
        </button>
      </div>
      <div class="centernow">
        <RectAngle />
        <Filterbutton class="shadow" />
        <div v-if="tableData && tableData.length > 0">
          <li v-for="(tableData) in tableData" :key="tableData.name" class="plant-assembly">
            <router-link :to="`/${tableData.name}/detail/`">
              <HomePagetwo :title="tableData.name" :des="tableData.imgurl" :eal="tableData.paragraph" />
            </router-link>
          </li>
        </div>
      </div>
      <FooterPage />
    </div>
  </div>
</template>

<script>
import HomePagetwo from "../components/HomePagetwo.vue"; //商品信息
import Filterbutton from "../components/Filterbutton.vue"; //过滤按钮
import RectAngle from "../components/rectangle.vue"; //轮播图组件
import FooterPage from "../components/Footer.vue"; //底部商品导航
import { reqCategoryList } from "../API/index";

export default {
  name: "HomePage",
  props: ["type"],
  data() {
    return {
      tableData: [],
      item: [],
      name: " ",
      keyWord: " ",
      meatyname: []
    };
  },
  mounted() {
    reqCategoryList().then((data) => {
      this.tableData = data.data;
      console.log("---> ", this.tableData);
    });
  },
  components: {
    HomePagetwo,
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
    serch() {
      var dataLists = [];
      if (this.keyWord) {
        for (var i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].name === this.keyWord) {
            dataLists.push(this.tableData[i]);
            console.log("this.tableData", this.tableData);
          }
        }
      } else {
        dataLists = this.tableData;
      }
      this.items = [...dataLists];
      console.log("this.items", this.items);
    },
    filterDatas(type, list) {
      if (type === "trash") {
        this.items = list.filter((item) => item.deleteAt);
      } else if (type === "favorites") {
        this.items = list.filter((item) => item.favorties);
      } else {
        this.items = list;
      }
      console.log("this.items", this.items);
      console.log("type:", type);
      this.tableData &&
        this.tableData.length > 0 &&
        this.$router
          .catch((err) => {
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

.sousuo {
  width: 28px;
  height: 20px;
}

.router-link-exact-active {
  background: #4c6ef5;
  color: #fff;
}

.inputandcion {
  padding: 17px 0 17px 1rem;
  display: flex;

  button {
    position: relative;
    right: 35px;
    background: #fafaf5;
    border: none;
    padding: 0;
    height: 34px;
    top: 3px;
  }

  .keyword {
    width: 20rem;
    border-radius: 5.76px;
    height: 2.5rem;
    border: none;
    outline: none;
    background: #FAFAF5;
    border-radius: 5.76px;
  }
}

.centernow {
  margin: 0 1.9rem 6.5rem 1.9rem;

  .cactus {
    width: 8rem;
    height: 9.1rem;
  }

  .plant-assembly {
    margin-bottom: 2.9rem;
    box-shadow: 12px 4px 54px 3px rgb(173 174 179 / 13%), 1px 6px 20px 8px rgb(173 173 179 / 13%);
    border-radius: 5.04px;
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