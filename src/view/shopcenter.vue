<template>
  <div>
    <Filterbutton />
    <li
      v-for="(tableData, i) in tableData"
      :key="tableData.name"
      :class="
        name === tableData.name || (i === 0 && !item.name)
          ? 'router-link-exact-active'
          : undefined
      "
      class="background"
    >
      <HomeAll
        :title="tableData.name"
        :des="tableData.imgurl"
        :eal="tableData.paragraph"
      />
    </li>
  </div>
</template>
<script>
import Filterbutton from "../components/Filterbutton.vue";
import HomeAll from "../components/HomeAll.vue"; //商品信息
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
</style>