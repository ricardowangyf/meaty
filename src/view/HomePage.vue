<template>
  <div class="body center">
    <div class="main">
      <input
        class="homepageinput"
        placeholder="搜索您想要的产品"
        v-model.trim="keyWord"
      />
      <div class="centernow">
        <div class="rectangle">
          <div class="content">
            <h1 class="meatyname">多肉植物</h1>
            <p class="air">让空气更加清新</p>
            <p class="make">MAKE THE AIR FRESHRE</p>
          </div>
          <img src="../assets/img/cactus.jpg" class="cactus" />
        </div>
        <div class="routerlink">
          <router-link to="/homepage/all" class="anotherbutton">
            <div class="fontsize">全部</div>
          </router-link>
          <router-link to="/homepage/sunflower" class="anotherbutton">
            <div class="anotherfontsize">向日葵</div>
          </router-link>
          <router-link to="/homepage/cactus" class="anotherbutton">
            <div class="anotherfontsize">仙人掌</div>
          </router-link>
          <router-link to="/homepage/greenpineapple" class="anotherbutton">
            <div class="anotherfontsize">绿萝</div>
          </router-link>
        </div>
        <li v-for="(users, i) in users" :key="users.name" class="background">
          <HomeAll
            :title="users.name"
            :des="users.imgurl"
            :eal="users.paragraph"
            :class="
              name === users.name || (i === 0 && !name)
                ? 'router-link-exact-active'
                : undefined
            "
          />
        </li>
      </div>
      <div class="navigationbar">
        <router-link to="home" style="background: white">
          <div class="padding">
            <li>
              <img src="../assets/img/home.svg" />
            </li>
            <li class="home">主页</li>
          </div>
        </router-link>
        <router-link to="community" style="background: white">
          <div class="padding">
            <li>
              <img src="../assets/img/community.svg" />
            </li>
            <li class="home">社区</li>
          </div>
        </router-link>
        <router-link to="shop" style="background: white">
          <div class="padding">
            <li>
              <img src="../assets/img/shop.svg" />
            </li>
            <li class="home">商城</li>
          </div>
        </router-link>
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
      name: " ",
      keyWord: " ",
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
          .push(`/list/${type}/detail/${this.items[0].name}`)
          .catch((err) => {
            console.log(err);
          });
    },
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

li {
  list-style-type: none;
}

a {
  text-decoration: none;
}

.homepageinput {
  border-radius: 5.76px;
  border: none;
  background: url(http://localhost:8080/img/search.94cb75fc.svg)
    no-repeat#fafaf5;
  padding-left: 1rem;
  margin-bottom: 1rem;
  outline: none;
  background-position: 18rem 0.1rem;
}

.homepageinput {
  width: 94.12%;
  height: 2.4rem;
}

.centernow {
  margin-left: 0.9rem;
  margin-right: 0.9rem;
}

.rectangle {
  box-shadow: 0 2px 4px 0 rgb(171 171 171 / 21%);
  border-radius: 0.4rem;
  background-color: #f9d694;
}

.rectangle {
  width: 98%;
  height: 9.1rem;
}

.rectangle {
  display: flex;
  justify-content: space-between;
}

.content {
  padding-left: 1rem;
  padding-top: 1rem;
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
  bottom: 85px;
}

.png {
  width: 150px;
}

.routerlink {
  display: flex;
  justify-content: space-between;
}

.routerlink {
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
}

.cactus {
  width: 8rem;
  height: 9.1rem;
}

.fontsize {
  font-size: 1rem;
  text-align: center;
  color: #fff;
  letter-spacing: 0;
  padding-top: 6px;
  opacity: 0.6;
}

.anotherfontsize {
  font-size: 1rem;
  letter-spacing: 0;
  opacity: 0.7;
  text-align: center;
  opacity: 0.7;
  /* font-size: 4.37px; */
  color: #333333;
  padding-top: 0.3rem;
}

.anotherbutton {
  background: #f1f3f5;
  border-radius: 1rem;
}

.anotherbutton {
  width: 20%;
  height: 2.1rem;
}

.router-link-exact-active {
  background: #4c6ef5;
  opacity: 0.7;
  color: #fff;
}

.background {
  background: #ffffff;
  margin-bottom: 2rem;
  box-shadow: 0 -3px 6px 0 rgb(82 84 91 / 13%),
    0 3px 6px 0 rgb(106 108 118 / 13%);
  border-radius: 5.04px;
}

.background {
  width: 100%;
  height: 9rem;
}

.navigationbar {
  margin-top: 3.6rem;
  box-shadow: 0 -3px 6px 0 rgb(82 84 91 / 13%),
    0 3px 6px 0 rgb(106 108 118 / 13%);
}

.navigationbar {
  display: flex;
  justify-content: space-between;
}

.padding {
  text-align: center;
  padding: 1rem;
}

.home {
  font-family: Helvetica;
  font-size: 0.64rem;
  color: #929292;
  letter-spacing: 0.04px;
  text-align: center;
}
</style>