<template>
  <!-- 404页面 -->
  <div>
    <div class="wrap">
      <div class="logo">
        <h1>404</h1>
        <p>The Page not Found-找不到你要访问的页面</p>
        <div class="sub">
          <p>
            <a href="/">Back</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.wrap {
  margin: 0 auto;
  max-width: 1000px;
}

.logo {
  margin-top: 50px;
}

.logo h1 {
  font-size: 200px;
  color: #8f8e8c;
  text-align: center;
  margin-bottom: 1px;
  text-shadow: 1px 1px 6px #fff;
}

.logo p {
  color: rgb(228, 146, 162);
  font-size: 20px;
  margin-top: 1px;
  text-align: center;
}

.logo p span {
  color: lightgreen;
}

.sub a {
  color: white;
  background: #8f8e8c;
  text-decoration: none;
  padding: 7px 120px;
  font-size: 13px;
  font-family: arial, serif;
  font-weight: bold;
}
</style>