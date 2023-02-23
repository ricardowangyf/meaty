<template>
  <div>
    <div class="header-detali">
      <div class="headerall">

        <img :src="detali.imgurl" class="header-detali" width="100%" height="315px" />
        <div class="divv">
          <router-link to="/" class="towardsleft">
            <img src="../assets/img/left.svg" class="fanhui" />
          </router-link>
          <h1 class="detalis">详情</h1>

          <div class="clear" />
        </div>
      </div>
    </div>
    <div class="meatybody">
      <div class="padddding">
        <div class="detaliname">
          {{ detali.name }}
        </div>
        <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}" class="el-rate__icon">
        </el-rate>
        <div class="spreadout">
          {{ introduce }}
        </div>
        <div class="paragraph">
          {{ detali.paragraph }}
        </div>
        <div class="botton">
          <button class="bottoncontant" id="more" v-show="this.roleNumber > 5 && lookMore"
            @click="selectMore(this.roleNumber)">{{ mess }}</button>
        </div>
        <div class="flex">
          <div class="count-c clearfix">
            <!-- <button class="reduce">-</button>
            <input @click="num++" type="text" class="textinput">
            <button class="add">+</button>
            <button type="button" @click="num++">点击加1</button> -->
            <button type="button" v-on:click="add" class="add">+</button> <!--可以用@ 代替v-on-->
            <!-- <h2>当前计数：{{ counter }}</h2> -->
            <input type="text" class="textinput" :placeholder="counter">
            <button type="button" @click="sub" class="add">-</button>
          </div>
          <div>
            <button class="jiesuan">{{ esee }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { details } from "../API/index";

export default {
  name: 'MeatyDetali',
  data() {
    return {
      detali: {},
      name: " ",
      introduce: '商品介绍',
      mess: '查看更多',
      roleNumber: {},
      esee: '结算订单',
      lookMore: true,
      counter:1,
      initLength: 5,
      num: 1,
      value: 5
    }
  },
  // watch: {
  //   $route: {
  //     handler(newVal) {
  //       newVal && this.getdetail();
  //       console.log("------->", this.getdetail);
  //     },
  //   },
  // },
  methods: {
    // getdetail() {
    //   const name = this.$route.params && this.$route.params.name;
    //   name &&
    //     details({ name }).then((data) => {
    //       this.details = data.data;
    //       console.log("this.details", data.data);
    //     });
    //   return this.detali
    // },
    add: function () {
      this.counter++
    },
    sub: function () {
      this.counter--
    },
    selectMore(leg) {
      this.lookMore = false
      this.initLength = leg
      this.roleNumber = this.detali.paragraph.length
    },
  },
  mounted() {
    this.detali = JSON.parse(this.$route.query.data)
    console.log(JSON.parse(this.$route.query.data))
    // meatydetali().then((data) => {
    //   this.detali = data.data[0];
    //   console.log("-detali-> ", this.detali);
    // });
    // this.getdetail()
    // console.log('----->', this.getdetail())
  },
}
</script>
<style lang="less">
.clear {
  clear: both;
}

.detalis {
  font-family: Helvetica;
  font-size: 15.82px;
  color: #333333;
  letter-spacing: 0;
  margin: 0;
  padding-right: 30px;
  font-weight: 200;
}

.fanhui {
  width: 15px;
  height: 15px;
}

.detaliname {
  font-family: Helvetica;
  font-size: 22.82px;
  color: #333333;
  letter-spacing: 0;
}

.icon-login {
  width: 20px;
  height: 20px;
}

.spreadout {
  padding: 25px 0 15px 0;
  font-weight: 300;
}

.botton {
  padding: 10px 0 33px 0;
}

.towardsleft {
  padding-left: 15px;
}

.add{
  background: white;
    border: none;
}

.paragraph {
  opacity: 0.58;
  font-family: Helvetica;
  font-size: 10.3px;
  color: #333333;
  letter-spacing: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: hidden;
}

.el-rate__icon {
  font-size: 18px;
  color: #C0C4CC;
  transition: .3s;
}

// .headerall {
//   padding-top: 15px;
// }

.divv {
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 310px;
}

.meatybody {
  background: #fff;
  margin: 0 40px 0 40px;
}

tbody .count-c {
  width: 98px;
  margin: 0 auto;
}

.clearfix::before,
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}

tbody .add,
tbody .reduce {
  float: left;
  width: 22px;
  height: 22px;
  border: 1px solid #ccc;
  text-align: center;
  background: none;
  outline: none;
  cursor: pointer;
}

tbody input[type='text'] {
  width: 50px;
  float: left;
  height: 18px;
  text-align: center;
}

tbody .add,
tbody .reduce {
  float: left;
  width: 22px;
  height: 22px;
  border: 1px solid #ccc;
  text-align: center;
  background: none;
  outline: none;
  cursor: pointer;
}

.textinput {
  text-align: center;
  background: #FFFFFF;
  box-shadow: 0 -3px 6px 0 rgb(173 174 179 / 17%), 0 3px 6px 0 rgb(173 174 179 / 17%);
  border-radius: 5.04px;
  border: none;
  width: 100px;
  height: 50px;
}

.add {
  width: 0;
  height: 0;
  background: #fff;
  border: none;
  position: relative;
  right: 25px;
}

.reduce {
  width: 0;
  height: 0;
  background: #fff;
  border: none;
  position: relative;
  left: 12px;
}

.bottoncontant {
  font-family: Helvetica;
  font-size: 16.1px;
  color: #82C91E;
  letter-spacing: 0;
  padding: 0;
  background: #fff;
  border: none;
}


.jiesuan {
  background: #76C477;
  width: 147px;
  height: 50px;
  border: 0.18px solid rgba(120, 189, 23, 0.39);
  box-shadow: 0 4px 10px 0 rgba(118, 196, 119, 0.39);
  border-radius: 3.6px;
  font-family: Helvetica;
  font-size: 5.82px;
  color: #FFFFFF;
  letter-spacing: 0;
}

.flex {
  display: flex;
  justify-content: space-between;
}
</style>