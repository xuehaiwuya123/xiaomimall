<template>
  <div class="cartList">
    <div class="header">
      <ul>
        <li>
          <span
            class="select-all"
            :class="{ selected: allSelected && list.length !== 0 }"
            @click="toggleAll"
          >
          </span>
          全选
        </li>
        <li class="name">商品名称</li>
        <li class="price">单价</li>
        <li class="count">数量</li>
        <li class="price-total">小计</li>
        <li class="operate">操作</li>
      </ul>
    </div>
    <div class="content" v-for="(item, index) in list" :key="index">
      <ul>
        <li>
          <span
            class="selecte"
            :class="{ selected: item.productSelected }"
            @click="updateCart(item, 'selected')"
          ></span>
        </li>
        <li class="img-info">
          <img :src="item.productMainImage" alt="" />
          <span
            >{{ item.productName }}&nbsp;&nbsp;{{ item.productSubtitle }}</span
          >
        </li>
        <li class="price">{{ item.productPrice }}</li>
        <li class="count">
          <span class="count-sub" @click="updateCart(item, '-')">-</span>
          <span>{{ item.quantity }}</span>

          <span class="count-add" @click="updateCart(item, '+')">+</span>
        </li>
        <li class="total-price">{{ item.productTotalPrice }}</li>
        <li class="operate" @click="delProduct(item)"></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "cartList",
  data() {
    return {
      count: 0,
    };
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    allSelected: {
      type: Boolean,
      default: false,
    },
  },
  created() {},
  methods: {
    toggleAll() {
      this.$emit("toggleAll");
    },
    updateCart(val, type) {
      this.$emit("updateCart", val, type);
    },
    delProduct(val) {
      this.$emit("delProduct", val);
    },
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/reset.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
.cartList {
  background-color: #fff;
  .header {
    height: 80px;
    ul {
      height: 100%;
      @include flexFun();
      li {
        @include flexFun(center, center);
        font-size: 14px;
        color: #999999;
        text-align: center;
        .select-all {
          display: inline-block;
          width: 22px;
          height: 22px;
          margin-right: 15px;
          border: 1px solid #e5e5e5;
          cursor: pointer;
        }
      }
      li:nth-child(1),
      li:nth-child(3),
      li:nth-child(5),
      li:nth-child(6) {
        width: 136px;
      }
      li:nth-child(2) {
        width: 408px;
      }
      li:nth-child(4) {
        flex: 1;
      }
    }
  }
  .content {
    height: 126px;
    border-top: 1px solid #e5e5e5;
    ul {
      height: 100%;
      @include flexFun();
      li {
        font-size: 16px;
        text-align: center;
        .selecte {
          display: inline-block;
          width: 22px;
          height: 22px;
          margin-right: 15px;
          border: 1px solid #e5e5e5;
          cursor: pointer;
        }
      }
      li:nth-child(1),
      li:nth-child(3),
      li:nth-child(5),
      li:nth-child(6) {
        width: 136px;
      }
      li:nth-child(2) {
        width: 408px;
        font-size: 18px;
        color: #333333;
      }
      li:nth-child(4) {
        flex: 1;
      }
      li:nth-child(5) {
        color: #ff6600;
      }
      li:last-child {
        color: gray;
      }
      .img-info {
        @include flexFun();
        img {
          width: 80px;
          height: 80px;
        }
      }
      .count {
        @include flexFun(center, center);
        span {
          display: inline-block;
          width: 50px;
          height: 40px;
          line-height: 40px;
          border: 1px solid #e5e5e5;
        }
        .count-add {
          border-left: none;
          cursor: pointer;
        }
        span:nth-child(2) {
          border-right: none;
          border-left: none;
        }
        .count-sub {
          border-right: none;
          cursor: pointer;
        }
      }
      .operate {
        width: 14px;
        height: 12px;
        background: url(/imgs/icon-close.png) no-repeat center;
        background-size: contain;
        cursor: pointer;
      }
    }
  }
  .selected {
    display: inline-block;
    background: url(/imgs/icon-gou.png) #ff6600 no-repeat center;
    background-size: 16px 12px;
  }
}
</style>
