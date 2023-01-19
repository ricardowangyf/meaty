<template>
  <!-- 过滤按钮 -->
  <div class="routerlink">
    <router-link to="/all" class="anotherbutton router-link-exact-active">
      <div class="fontsize">全部</div>
    </router-link>
    <router-link to="/homepage/sunflower" class="xiangrikui">
      <div class="anotherfontsize">向日葵</div>
    </router-link>
    <router-link to="/homepage/cactus" class="xiangrikui">
      <div class="anotherfontsize">仙人掌</div>
    </router-link>
    <router-link to="/homepage/greenpineapple" class="xiangrikui">
      <div class="anotherfontsize">绿萝</div>
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
      console.log("---> ", this.tableData);
    });
  },
  methods: {
    filterDatas(type, list) {
      if (type === "trash") {
        this.items = list.filter((item) => item.deleteAt);
      } else if (type === "favorites") {
        this.items = list.filter((item) => item.favorties);
      } else {
        this.items = list;
      }
      console.log("this.items", this.items);
      console.log("type:  ", type);
      this.items &&
        this.items.length > 0 &&
        this.$router
          .push(`/homepage/${type}/${this.items[0].name}`)
          .catch((err) => {
            console.log(err);
          });
    },
  }
};
</script>

<style lang="less">
.routerlink {
  display: flex;
  justify-content: space-between;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;

  .anotherfontsize {
    font-size: 1rem;
    letter-spacing: 0;
    text-align: center;
    opacity: 0.7;
    color: #333333;
    padding-top: 0.3rem;
  }

  .anotherbutton {
    border-radius: 1rem;
  }

  .anotherbutton {
    width: 20%;
    height: 2.1rem;
  }

  .xiangrikui {
    background: #f1f3f5;
    border-radius: 19.8px;
    width: 20%;
    height: 2.1rem;
  }
}
</style>