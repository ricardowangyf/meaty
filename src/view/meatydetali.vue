<template>
  <div>
    <div class="header-detali">
      <div class="headerall">
        <router-link to="/" class="towardsleft">
          <img src="../assets/img/left.svg" class="fanhui" />
        </router-link>
        <div class="divv">
          <h1 class="detalis">详情</h1>
          <div class="clear" />
        </div>
      </div>
    </div>
    <div class="meatybody">
      <div class="detaliname">
        {{ detali.name }}
      </div>
      <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}" class="el-rate__icon">
      </el-rate>
      <div class="spreadout">
        {{ introduce }}
      </div>
      <div class="paragraph">
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
      value: 5
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
      console.log("-detali-> ", this.detali);
    });
  },
}
</script>
<style lang="less">
img {
  width: 100%;
}

.clear {
  clear: both;
}

.header-detali {
  height: 250px;
  background-size: 100% 390px;
  background-repeat: no-repeat;
  background-image: url(http://localhost:8080/img/flower.54c6e2b2.jpg);
}

.detalis {
  font-family: Helvetica;
  font-size: 15.82px;
  color: #333333;
  letter-spacing: 0;
  margin: 0;
  padding: 0;
  font-weight: 200;
}

.fanhui {
  width: 15px;
  height: 15px;
}

.detaliname {
  font-family: Helvetica;
  font-size: 16.82px;
  color: #333333;
  letter-spacing: 0;
}

.spreadout {
  margin-top: 20px;
  margin-bottom: 15px;
}

.towardsleft {
  padding-left: 20px;
}

.paragraph {
  opacity: 0.58;
  font-family: Helvetica;
  font-size: 15.3px;
  color: #333333;
  letter-spacing: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  overflow: hidden;

}

.el-rate__icon {
  font-size: 18px;
  /* margin-right: 6px; */
  color: #C0C4CC;
  transition: .3s;
}

.headerall {
  padding-top: 15px;
}

.divv {
  float: right;
  padding-right: 170px;
}

.meatybody {
  border-radius: 50%;
  margin-left: 34px;
  margin-right: 34px;
  margin-top: 20px;
}
</style>