<template>
  <!-- 底部导航栏 -->
  <div class="navigation-bar">
    <router-link to="/" class="backgroundd">
      <div class="padding">
        <li>
          <img src="../assets/img/home.svg" />
        </li>
        <li class="home">主页</li>
      </div>
    </router-link>
    <router-link to="/community" class="backgroundd">
      <div class="padding">
        <li>
          <img src="../assets/img/community.svg" />
        </li>
        <li class="home">社区</li>
      </div>
    </router-link>
    <router-link to="/shopcenter" class="backgroundd">
      <div class="padding">
        <li>
          <img src="../assets/img/shop.svg" />
        </li>
        <li class="home">商城</li>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "FooterPage",
};
</script>
<style lang='less'>
.navigation-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  width: 100%;
  box-shadow: 0 -3px 6px 0 rgb(82 84 91 / 13%),
    0 3px 6px 0 rgb(106 108 118 / 13%);
  display: flex;
  justify-content: space-between;

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

  .backgroundd {
    background: white;
  }
}
</style>