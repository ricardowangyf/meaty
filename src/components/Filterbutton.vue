<template>
  <!-- 过滤按钮 -->
  <div class="button-link">
    <router-link to="/all" class="anotherbutton router-link-exact-active">
      <div class="all">全部</div>
    </router-link>
    <router-link to="/sunflower" class="buttontext-style">
      <div class="plant-name">向日葵</div>
    </router-link>
    <router-link to="/cactus" class="buttontext-style">
      <div class="plant-name">仙人掌</div>
    </router-link>
    <router-link to="/greenpineapple" class="buttontext-style">
      <div class="plant-name">绿萝</div>
    </router-link>
  </div>
</template>

<script>
import { reqCategoryList } from "../API/index";

export default {
  name: "FilterButton",
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

  .buttontext-style {
    background: #f1f3f5;
    border-radius: 19.8px;
    width: 20%;
    height: 2.1rem;
  }
}
</style>