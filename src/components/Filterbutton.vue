
<template>
  <!-- 过滤按钮 -->
  <div class="button-link">
    <ul class="buttonstyle">
      <li @click="clickTab(index)" v-for="(item,index) in tabList" :key="index" class="plant-name">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { details } from "../API/index";

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
    details().then((data) => {
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
        this.content = 'aefwergeqrgheqhrgqethqahrt'
      }
      else {
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
      // console.log("items", this.items);
    },
  }
};
</script>

<style lang="less">
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

  .buttonstyle {
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
}
</style>