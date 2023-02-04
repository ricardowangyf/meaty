
<template>
  <!-- 过滤按钮 -->
  <div class="button-link">
    <ul class="buttonstyle">
      <li  @click="clickTab(index)" v-for="(item,index) in tabList" :key="index" class="plant-name">{{
  item.name
}} </li>
      <div>
        {{ content }}</div>
    </ul>

  </div>
</template>

<script>
import { reqCategoryList } from "../API/index";

export default {
  name: "FilterButton",
  data() {
    return {
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
          name: '绿萝'
        }
      ],
      tableData: [],
      content: 'fdgfdgffdgfd',
      name: ''
    }
  },
  mounted() {
    reqCategoryList().then((data) => {
      this.tableData = data.data;
      const type = this.$route.params.type || "all";
      this.filterDatas(type, data.data);
      // console.log("this.tableData", data.data);
    });
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
        console.log("tableData", this.tableData);
      },
    },
  },
  methods: {
    clickTab(e, content) {
      if (e == content) {
        // console.log(content);
        this.content = 'aefwergeqrgheqhrgqethqahrt'
      }
      else {
        // console.log(content);
        this.content = 'swergewrg egr erg'
        console.log(e)
      }

    },
    filterDatas(type, list) {
      if (type === "greenpineapple") {
        this.items = list.filter((tableData) => tableData.deleteAt);
      } else if (type === "cactus") {
        this.items = list.filter((tableData) => tableData.favorties);
      } else {
        this.items = list;
      }
      console.log("items", this.items);
      console.log("type:  ", type);
    },
  }
};
</script>

<style lang="less">
.button-link {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
  padding-bottom: 25px;

  .all {
    text-align: center;
    font-weight: 300;
    font-size: 0.9rem;
    padding-top: 6px;
  }

  .plant-name {
    text-align: center;
    opacity: 0.7;
    color: #333333;
    padding-top: 0.2rem;
    box-shadow: 0 4px 10px 0 rgb(76 110 245 / 37%);
    border-radius: 19.8px;
    width: 20%;
    opacity: 0.7;
    font-size: 4.37px;
    color: #333333;
    letter-spacing: 0;
    background: #F1F3F5;
    font-size: 0.7rem;
    letter-spacing: 0;
    text-align: center;
    opacity: 0.7;
    color: #333333;
    padding-top: 0.4rem;
  }

  .anotherbutton {
    width: 20%;
    box-shadow: 0 4px 10px 0 rgb(76 110 245 / 37%);
    border-radius: 19.8px;
    height: 2.1rem;
    background: #4c6ef5;
    color: #fff;
  }

  .buttonstyle {
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 0;
  }

  .buttontext-style {
    background: #f1f3f5;
    border-radius: 19.8px;
    width: 20%;
    height: 2.1rem;
  }
}
</style>