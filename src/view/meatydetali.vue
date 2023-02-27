<template>
  <div>
    <div class="header-detali">
      <img :src="detali.imgurl" class="header-detali" width="100%" height="315px" />
      <div class="column">
        <router-link to="/" class="towardsleft">
          <img src="../assets/img/left.svg" class="back" />
        </router-link>
        <h1 class="detalis">详情</h1>
      </div>
    </div>
    <div class="meatybody">
      <div class="detaliname">
        {{ detali.name }}
      </div>
      <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}">
      </el-rate>
      <div class="container">
        {{ introduce }}
      </div>
      <div class="detali-paragraph">
        <!-- {{ detali.paragraph }} -->
        <p class="paragraph">{{ showAll ? this.detali.paragraph : this.detali.paragraph.slice(0, 20) + '...' }}</p>
      </div>
      <button class="botton" @click="shoemore">
        <div class="bottoncontant" id="more">{{ moretext }}</div>
        <img src="../assets/img/down.svg" width=" 20px" height=" 20px" style="margin-bottom: -5px;">
      </button>
      <div class="footer">
        <div class="button-add">
          <button type="button" @click="sub" class="less">-</button> <!--可以用@ 代替v-on-->
          <input type="text" class="textinput" :placeholder="counter">
          <button type="button" v-on:click="add" class="add">+</button>
        </div>
        <div>
          <button class="settlement">{{ indent }}</button>
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
      introduce: '商品介绍',
      moretext: '查看更多',
      indent: '结算订单',
      counter: 1, //初始数字
      value: 5, //星星的值
      showAll: false,
      lineHeight: 1.2,  // 设置行高
      lineClamp: 3  // 设置显示的行数
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
    add() {
      this.counter++
    },
    sub() {
      this.counter--
    },
    shoemore() {
      this.showAll = !this.showAll;
      if (this.showAll) {
        this.$refs.detali.paragraph.style.setProperty('max-height', 'none');
      } else {
        let height = this.$refs.detali.paragraph.clientHeight;
        let lineHeight = this.lineHeight * parseInt(getComputedStyle(this.$refs.detali.paragraph).fontSize);
        let maxLines = this.lineClamp;
        let maxHeight = lineHeight * maxLines;
        if (height > maxHeight) {
          this.$refs.detali.paragraph.style.setProperty('max-height', maxHeight + 'px');
        }
      }
    }
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
.header-detali {
  .detalis {
    font-size: 15.82px;
    color: #333333;
    margin: 0;
    padding-left: 125px;
    font-weight: 200;
  }

  .back {
    width: 15px;
    height: 15px;
  }

}

.container {
  padding: 25px 0 15px 0;
  font-weight: 300;
}

.detaliname {
  font-family: Helvetica;
  font-size: 22.82px;
  color: #333333;
  letter-spacing: 0;
}

.botton {
  display: flex;
  justify-content: flex-start;
  border: none;
  background: white;
  padding: 10px 0 33px 0;
}

.towardsleft {
  padding-left: 15px;
  padding-top: 2px;
}

.less {
  background: white;
  border: none;
  position: relative;
  left: 31px;
}

.add {
  background: white;
  border: none;
  position: relative;
  right: 27px;
}

.paragraph {
  opacity: 0.58;
  font-family: Helvetica;
  font-size: 10.3px;
  color: #333333;
  letter-spacing: 0; 
  line-height: 1.2;  // 设置行高
    max-height: calc(1.2 * 3 * var(--font-size));  // 设置最大高度
    overflow: hidden;
    text-overflow: ellipsis;
}

.column {
  display: flex;
  justify-content: flex-start;
  position: relative;
  bottom: 310px;
}

.meatybody {
  background: #fff;
  margin: 0 40px 0 40px;
}

.button-add {
  display: flex;
  position: relative;
  right: 20px;
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


.settlement {
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

.footer {
  display: flex;
  justify-content: space-between;
}
</style>