<template>
  <div>
    <!-- 主页 -->
    <div class="body center">
      <div class="input-box">
        <input v-model.trim="keyWord" placeholder="搜索你想要的产品" change class="Input-box-css" />
        <button class="serch" @click="serch">
          <img src="../assets/img/search.svg" alt />
        </button>
      </div>
      <div class="homepage-center">
        <RectAngle />
        <div class="button-link">
          <router-link :to="`/detail/${items.name}`" class="button-style">
            <li v-for="(items, index) in tabList" :key="index" class="plant-name"
              :class="{ active: currentIndex === index }">
              {{ items.name }}
            </li>
          </router-link>
        </div>
        <div v-if="tableData && tableData.length > 0">
          <li v-for="(item, index) in tableData" :key="index" class="component-details" @click="button(item)">
            <HomePagetwo :title="item.name" :des="item.imgurl" :eal="item.paragraph" />
          </li>
        </div>
      </div>
      <FooterPage />
    </div>
  </div>
</template>

<script>
import { reqCategoryList } from "../API/index";
import HomePagetwo from "../components/HomePagetwo.vue"; //商品组件(无加入购物车)
import RectAngle from "../components/rectangle.vue"; //轮播图
import FooterPage from "../components/Footer.vue"; //底部导航

export default {
  name: "HomePage",
  props: ["type"],
  data() {
    return {
      tableData: [],
      items: [],
      name: " ",
      keyWord: " ",
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
      currentIndex: 0,
      content: 'fdgfdgffdgfd',
    };
  },
  mounted() {
    this.getList()
    // reqCategoryList().then((data) => {
    //   this.tableData = data.data;
    //   const type = this.$route.params.type || "all";
    //   this.filterDatas(type, data.data);
    //   console.log("this.tableData", this.tableData);
    // });
  },
  components: {
    HomePagetwo,//商品组件(无加入购物车)
    FooterPage, //底部导航,
    RectAngle,//轮播图
  },
  methods: {
    getList(favorties) {
      reqCategoryList().then((data) => {
        if (favorties) {
          this.tableData = data.data.filter(e => e.favorties === favorties)
        } else {
          this.tableData = data.data;
        }
        const type = this.$route.params.type || "all";
        this.filterDatas(type, data.data);
        console.log("this.tableData", data.data);
      });
    },
    button(item) {
      this.$router.push({
        path: '/detail',
        query: {
          'data': JSON.stringify(item)
        }
      })
    },
    //搜索
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
      this.tableData = this.items;
      console.log("------:>this.tableData", this.items);
    },
    //过滤
    filterDatas(type, list) {
      if (type === "Trash") {
        this.tableData = list.filter((item) => item.deleteAt);
      } else if (type === "favorites") {
        this.tableData = list.filter((item) => item.favorties);
      } else {
        this.tableData = list;
      }
      console.log("type:  ", type);
    },
    //列表切换
    clickTab(index, item) {
      this.currentIndex = index
      this.getList(item.name)
    },
  },
};
</script>

<style lang='less'>
.body {
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

  .button-link {
    padding: 25px 0 25px 0;

    .all {
      text-align: center;
      font-weight: 300;
      font-size: 0.9rem;
      padding-top: 6px;
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

    .anotherbutton {
      width: 20%;
      box-shadow: 0 4px 10px 0 rgb(76 110 245 / 37%);
      border-radius: 19.8px;
      height: 2.1rem;
      background: #4c6ef5;
      color: #fff;
    }

    .button-style {
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: space-between;
    }

    .buttontext-style {
      background: #f1f3f5;
      border-radius: 19.8px;
      width: 20%;
      height: 2.1rem;
    }

    .active {
      background: #4C6EF5;
      color: #fff;
    }
  }

  .input-box {
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

    .Input-box-css {
      width: 20rem;
      border-radius: 5.76px;
      height: 2.5rem;
      border: none;
      outline: none;
      background: #FAFAF5;
      border-radius: 5.76px;
    }
  }

  .homepage-center {
    margin: 0 1.9rem 6.5rem 1.9rem;

    .cactus {
      width: 8rem;
      height: 9.1rem;
    }

    .component-details {
      margin-bottom: 3rem;
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
}</style>