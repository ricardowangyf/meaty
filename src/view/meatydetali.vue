<template>
  <div>
    <div class="Header">
      <img src="../assets/img/flower.jpg" />
      <div class="headerall">
        <a href="./HomePage.vue">
          <img src="../assets/img/left.svg" class="fanhui" />
        </a>
        <div class="divv">
          <h1 class="detalis">详情</h1>
        </div>
      </div>
    </div>
    <div class="body">
      <div style="
    font-family: Helvetica;
    font-size: 19.82px;
    color: #333333;
    letter-spacing: 0;
">
        {{ detali.name }}
      </div>
      <div>
        {{ introduce }}
      </div>
      <div style="
    opacity: 0.58;
    font-family: Helvetica;
    font-size: 15.3px;
    color: #333333;
    letter-spacing: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10;
    overflow: hidden;
">
        {{ detali.Productintroduction }}
        <button @click="open()">{{ mess }}</button>

      </div>
    </div>
  </div>
</template>

<script>

import { meatydetali } from "../API/index";


export default {
  name: 'MeatyDetali',
  data() {
    return {
      detali: {},
      name: " ",
      introduce: '商品介绍',
      mess: '查看更多',
      lookMore: true,
    }
  },
  methdos: {
    open(leg) {
      this.lookMore = false
      this.detali = leg
    },
  },
  mounted() {
    meatydetali().then((data) => {
      this.detali = data.data[0];
      console.log("-detali--> ", this.detali);
    });
  },
}
</script>
<style lang="less">
img {
  width: 100%;
}

.detalis {
  font-family: Helvetica;
  font-size: 20.82px;
  color: #333333;
  letter-spacing: 0;
  margin: 0;
  text-align: center;
  font-weight: 300;
}

.fanhui {
  width: 32px;
  height: 26px;
  position: relative;
  right: 132px;
}

.headerall {
  display: flex;
  justify-content: center;
  position: relative;
  bottom: 356px;
}

.divv {
  display: flex;
  justify-content: center;
  position: relative;
  right: 20px;
}

.body {
  border-radius: 50%;
  margin-left: 34px;
  margin-right: 34px;
}
</style>