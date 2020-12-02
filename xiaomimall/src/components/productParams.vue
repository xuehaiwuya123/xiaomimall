<template>
  <div class="productParams">
    <div class="nav-header" :class="{ fixedClass: isFixed }">
      <div class="container">
        <div class="left">
          <a href="javascript:void(0)">小米8 透明探索版</a>
          <a href="javascript:void(0)">小米8</a>
          <a href="javascript:void(0)">小米8 SE</a>
        </div>
        <div class="right">
          <a href="javascript:void(0)">概述</a>
          <a href="javascript:void(0)">参数</a>
          <a href="javascript:void(0)">用户评价</a>
          <slot name="body"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "product-params",
  data() {
    return {
      isFixed: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },
  destroyed() {
    window.removeEventListener("scroll", this.initHeight, true);
  },
  methods: {
    initHeight() {
      // 获取浏览器的滚动的高度，以下是兼容性的写法
      let scrollHeight =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollHeight > 152 ? true : false;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/reset.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
.productParams {
  border-top: 1px solid #cccccc;
  .nav-header {
    background-color: #ffffff;
    z-index: 100;
    &.fixedClass {
      width: 100%;
      position: fixed;
      top: 0;
    }
    .container {
      @include flexFun();
      height: 60px;
      .left,
      .right {
        height: 24px;
        @include flexFun(center, flex-end);
        font-size: 18px;
        a {
          margin-right: 9px;
          color: #333;

          &::after {
            @include fakeFun(1px, 11px);
            background: #999999;
            margin-left: 10px;
          }
        }
        a:nth-child(2),
        a:nth-child(3) {
          font-size: 12px;
          color: #666;
        }
        a:last-child:after {
          display: none;
        }
      }
      .right {
        height: 24px;
        @include flexFun(center, flex-end);
        a {
          font-size: 14px;
          color: #666;
        }
        a:nth-child(3):after {
          display: none;
        }
        a:nth-child(2),
        a:nth-child(3) {
          font-size: 14px;
          color: #666;
        }
      }
    }
  }
}
</style>