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
          {{detali.name}}
        </div>
      </div>
    </div>
    <div class="body">
    <div>
    <h1>{{name}}</h1>
    </div>
    </div>
  </div>
</template>

<script>

import { detali } from "../API/index"; 


export default {
  name: 'MeatyDetali',
  data() {
    return {
      detali:[],
      name: " ",
    }
  },
  mounted() {
    detali().then((data) => {
      this.detali = data.data;
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
}
</style>