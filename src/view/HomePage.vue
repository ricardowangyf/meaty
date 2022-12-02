<template>
  <div class="body">
    <div class="center">
      <div class="productname">
        <h1>产品名字</h1>
      </div>
      <div>
        <input class="homepageinput" placeholder="搜索您想要的产品" />
      </div>
      <div class="main">
        <div class="rectangle">
          <div class="content">
            <h1 class="meatyname">多肉植物</h1>
            <p class="air">让空气更加清新</p>
            <p class="make">MAKE THE AIR FRESHRE</p>
          </div>
          <img src="../assets/img/cactus.jpg" class="cactus" />
        </div>
        <div class="routerlink">
          <router-link to="/homepage/all" class="button">
            <div class="fontsize">全部</div>
          </router-link>
          <router-link to="/homepage/sunflower" class="anotherbutton">
            <div class="anotherfontsize">向日葵</div>
          </router-link>
          <router-link to="/homepage/cactus" class="anotherbutton">
            <div class="anotherfontsize">仙人掌</div>
          </router-link>
          <router-link to="/homepage/cactus" class="anotherbutton">
            <div class="anotherfontsize">绿萝</div>
          </router-link>
        </div>
        <HomeAll
          :title="users.name"
          :des="users.imgurl"
          :eal="users.paragraph"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HomeAll from "../components/HomeAll.vue";
import { reqCategoryList } from "../API/index";

export default {
  name: "HomePage",
  props: ["type"],
  data() {
    return {
      users: [{}],
    };
  },
  mounted() {
    reqCategoryList().then((data) => {
      this.users = data.data;
      console.log("---> ", this.users);
    });
  },
  components: {
    HomeAll,
  },
};
</script>

<style>
p {
  margin: 0;
}

h1 {
  margin: 0;
}

a {
  text-decoration: none;
}
.body {
  margin: 15px;
}

.homepageinput {
  width: 94.12%;
  height: 36.02px;
  border-radius: 5.76px;
  border: none;
  background: url("../assets/img/search.svg") no-repeat#fafaf5;
  padding-left: 10px;
  margin-bottom: 25px;
  outline: none;
  background-position: 325px 3px;
}

.productname {
  padding-bottom: 20px;
}

.productname h1 {
  font-family: Helvetica;
  font-size: 5.82px;
  color: #333333;
  letter-spacing: 0;
  margin: 0;
  font-weight: 400;
}

.center {
  margin: 0 auto;
}

.rectangle {
  box-shadow: 0 2px 4px 0 rgba(171, 171, 171, 0.21);
  border-radius: 5.04px;
  width: 98%;
  height: 135px;
  background-color: #f9d694;
}

.content {
  padding-left: 19px;
  padding-top: 14px;
}

.meatyname {
  font-family: Helvetica;
  font-size: 25px;
  color: #382d23;
  letter-spacing: 0;
  font-weight: 400;
}

.make {
  opacity: 0.6;
  font-family: Helvetica;
  font-size: 3.39px;
  color: #382d23;
  letter-spacing: 0;
  font-weight: 300;
}

.air {
  opacity: 0.8;
  font-family: Helvetica;
  font-size: 5.8px;
  color: #382d23;
  font-weight: 400;
  letter-spacing: 0;
}

.png {
  position: relative;
  left: 247px;
  width: 150px;
  bottom: 85px;
}

.routerlink {
  display: flex;
  justify-content: space-between;
}

.routerlink {
  padding-top: 25px;
}

.cactus {
  width: 110px;
  position: relative;
  bottom: 81px;
  left: 263px;
}

.fontsize {
  text-decoration: none;
  font-size: 16.37px;
  text-align: center;
  font-family: Helvetica;
  color: #ffffff;
  letter-spacing: 0;
  padding-top: 12px;
}

.anotherfontsize {
  text-decoration: none;
  font-size: 16.37px;
  letter-spacing: 0;
  opacity: 0.7;
  color: #333333;
  text-align: center;
  padding-top: 11px;
}

.button {
  background: #4c6ef5;
  box-shadow: 0 4px 10px 0 rgb(76 110 245 / 37%);
  border-radius: 19.8px;
  width: 20%;
  height: 50px;
}

.anotherbutton {
  background: #f1f3f5;
  border-radius: 20px;
  width: 20%;
  height: 50px;
}
</style>