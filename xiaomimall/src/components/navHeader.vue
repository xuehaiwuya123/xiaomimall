<template>
  <div class="nav-header">
    <div class="nav-topBar">
      <div class="container">
        <div class="left">
          <a>小米商城</a>
          <a>MUI</a>
          <a>云服务</a>
          <a>协议规则</a>
        </div>
        <div class="right">
          <a>admin</a>
          <a>退出</a>
          <a>我的订单</a>
          <a class="cart">购物车(0)</a>
        </div>
      </div>
    </div>
    <div class="top-header">
      <div class="container">
        <div class="logo"></div>
        <div class="menu">
          <a>小米手机</a>
          <a>Red红米</a>
          <a>电视</a>
        </div>
        <div class="search">
          <div class="search-box">
            <input type="text" />
          </div>
          <div class="search-btn">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-header",
};
</script>
<style lang="scss">
@import "./../assets/scss/base.scss";
.nav-header {
  .nav-topBar {
    height: 39px;
    line-height: 39px;
    color: #b0b0b0;
    background-color: #333333;
    .container {
      display: flex;
      justify-content: space-between;
    }
    .left,
    .right {
      color: #b0b0b0;
      .cart {
        display: inline-block;
        width: 110px;
        height: 39px;
        text-align: center;
        background: #ff6600;
        color: #ffffff;
      }
      a {
        margin-right: 17px;
      }
      a:last-child {
        margin-right: 0;
      }
    }
  }
  .top-header {
    height: 112px;
    .container {
      height: 112px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        width: 55px;
        height: 55px;
        background: #ff6600 url("../../public/imgs/mi-logo.png") no-repeat;
        background-size: contain;
        cursor: pointer;
      }
      .menu {
        width: 643px;
        a {
          line-height: 112px;
          margin-right: 20px;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
        }
      }
      .search {
        width: 320px;
        display: flex;
        align-items: center;
        .search-box {
          width: 264px;
          height: 50px;
          border: 1px solid #e0e0e0;
          input {
            width: 100%;
            height: 50px;
            padding-left: 20px;
            border: none;
            box-sizing: border-box;
          }
        }
        .search-btn {
          width: 56px;
          height: 50px;
          border: 1px solid #e0e0e0;
          text-align: center;
          line-height: 56px;
          cursor: pointer;
          span {
            display: inline-block;
            width: 18px;
            height: 18px;
            background: url("../../public/imgs/icon-search.png") no-repeat;
            background-size: contain;
          }
        }
      }
    }
  }
}
</style>
