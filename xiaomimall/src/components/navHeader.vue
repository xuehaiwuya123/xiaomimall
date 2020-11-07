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
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="menu">
          <a class="menu-item">
            <span>小米手机</span>
            <div class="children">
              <div
                class="child-item"
                v-for="(item, index) in phoneList"
                :key="index"
              >
                <div class="img">
                  <img :src="item.mainImage" alt="" />
                </div>
                <p class="info">{{ item.name }}</p>
                <p class="price">{{ item.price }}</p>
              </div>
            </div>
          </a>
          <a>
            <span>Red红米</span>
            <div class="children">
              <div
                class="child-item"
                v-for="(item, index) in phoneList"
                :key="index"
              >
                <div class="img">
                  <img :src="item.mainImage" alt="" />
                </div>
                <p class="info">{{ item.name }}</p>
                <p class="price">{{ item.price }}</p>
              </div>
            </div>
          </a>
          <a>
            <span> 电视 </span>
            <div class="children">
              <div
                class="child-item"
                v-for="(item, index) in TVList"
                :key="index"
              >
                <div class="img">
                  <img :src="getImgFun(item, 'TV')" alt="" />
                </div>
                <p class="info">{{ item.info }}</p>
                <p class="price">{{ item.price }}</p>
              </div>
            </div>
          </a>
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
  data() {
    return {
      phoneList: [
        { imgSrc: "phone-1", info: "小米手机", price: "9999元" },
        { imgSrc: "phone-2", info: "小米手机", price: "9999元" },
        { imgSrc: "phone-3", info: "小米手机", price: "9999元" },
        { imgSrc: "phone-4", info: "小米手机", price: "9999元" },
        { imgSrc: "phone-5", info: "小米手机", price: "9999元" },
        { imgSrc: "phone-6", info: "小米手机", price: "9999元" },
      ],
      TVList: [
        { imgSrc: "TV-1", info: "小米电视", price: "19999元" },
        { imgSrc: "TV-2", info: "小米电视", price: "19999元" },
        { imgSrc: "TV-3", info: "小米电视", price: "19999元" },
        { imgSrc: "TV-4", info: "小米电视", price: "19999元" },
        { imgSrc: "TV-5", info: "小米电视", price: "19999元" },
        { imgSrc: "TV-6", info: "小米电视", price: "19999元" },
      ],
    };
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    getProductList() {
      this.axios.get("/products", {
        params: {
          categoryId: "100012"
        },
      }).then( res => {
        if (res.list && res.list.length > 0) {
          res.list.length > 6 ? this.phoneList = res.list.splice(0, 6) : this.phoneList = res.list
        }
      })
    },
    getImgFun(item, type) {
      let imgType = `.png`;
      if (type === "TV") {
        imgType = `.jpg`;
      }
      return `imgs/nav-img/${item.imgSrc}${imgType}`;
    },
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
.nav-header {
  .nav-topBar {
    height: 39px;
    line-height: 39px;
    color: #b0b0b0;
    background-color: #333333;
    .container {
      @include flexFun();
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
      @include flexFun();
      .menu {
        width: 643px;
        padding-left: 209px;
        a {
          display: inline-block;
          margin-right: 20px;
          span {
            display: inline-block;
            line-height: 112px;
            color: #333333;
            font-weight: bold;
            font-size: 16px;
            cursor: pointer;
          }
          &:hover {
            .children {
              height: 220px;
              opacity: 1;
              transition: all 0.5s;
            }
          }
          .children {
            z-index: 999;
            width: 1226px;
            height: 0;
            opacity: 0;
            position: absolute;
            top: 112px;
            left: 0;
            overflow: hidden;
            @include flexFun();
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            transition: all 0.5s;
            background: #ffffff;
            .child-item {
              width: 16.6%;
              height: 220px;
              text-align: center;
              position: relative;
              &::after {
                @include fakeFun(1px, 100px);
                border-right: 1px solid #d7d7d7;
                position: absolute;
                top: 30px;
                right: 0;
              }
              &:last-child::after {
                display: none;
              }
              .img {
                width: auto;
                height: 111px;
                margin-top: 26px;
                img {
                  width: auto;
                  height: 111px;
                }
              }
              .info {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: #333333;
              }
              .price {
                color: #ff6600;
              }
            }
          }
        }
      }
      .search {
        width: 320px;
        @include flexFun();
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
            @include bgImgFun(18px, 18px, "/imgs/icon-search.png");
          }
        }
      }
    }
  }
}
</style>
