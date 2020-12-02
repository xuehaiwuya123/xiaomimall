<template>
  <div class="product">
    <product-params>
      <template v-slot:body>
        <div class="btn">立即购买</div>
      </template>
    </product-params>
    <div class="container">
      <div class="video-content">
        <div class="video-bg">点击显示的图片</div>
        <div class="video-box">
          <div class="video-over"></div>
          <div class="video">
          遮罩层
            <span class="icon-close">关闭按钮</span>
            <video
              src="/imgs/product/video.mp4"
              muted
              autoplay
              controls="controls"
            ></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import productParams from "./../components/productParams";
export default {
  name: "product",
  components: {
    productParams,
  },
};
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/reset.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
.product {
  .container {
    .video-content {
    }
  }
}
</style>