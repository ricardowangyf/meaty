<template>
  <!-- 轮播图组件 -->
  <div class="rectangle">
    <div class="content">
      <h1 class="meatyname">多肉植物</h1>
      <p class="air">让空气更加清新</p>
      <p class="make">MAKE THE AIR FRESHRE</p>
    </div>
    <img src="../assets/img/cactus.jpg" class="cactus" />
  </div>
</template>

<script>
export default {
  name: "RectAngle",
};
</script>

<style lang="less">
.rectangle {
  box-shadow: 0 2px 4px 0 rgb(171 171 171 / 21%);
  border-radius: 5.04px;
  background-color: #f9d694;
  display: flex;
  width: 98%;
  height: 9.1rem;
  justify-content: space-between;
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
}
</style>