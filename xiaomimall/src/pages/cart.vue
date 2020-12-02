<template>
  <div class="cart">
    <orderHeader title="我的购物车">
      <template v-slot:tip>
        温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算
      </template>
    </orderHeader>
    <div class="main">
      <div class="container">
        <div class="cartList">
          <cartList
            :list="goodsList"
            :allSelected="allSelected"
            @toggleAll="toggleAll"
            @updateCart="updateCart"
            @delProduct="delProduct"
          ></cartList>
        </div>
        <div class="cartFooter">
          <div class="left">
            <span>继续购物</span>
            <span class="info"> 共<span class="specialFont">{{ goodsList.length }}</span>件商品，已选择<span class="specialFont">{{ selectGoodsCount }}</span>件</span>
          </div>
          <div class="right">
            <span class="total-price"> 合计: <span class="specialFont">{{ cartTotalPrice }}</span> 元 </span>
            <span class="toAccounts"> 去计算 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import orderHeader from "./../components/orderHeader";
import cartList from "./../components/cartList";
export default {
  name: "cart",
  components: {
    orderHeader,
    cartList,
  },
  data() {
    return {
      goodsList: [],
      allSelected: false,
      cartTotalPrice: 0,
      selectGoodsCount: 0
    };
  },
  mounted() {
    this.getGoodData();
  },
  methods: {
    getGoodData() {
      this.axios.get("/carts").then((res) => {
        this.getData(res);
      });
    },
    toggleAll() {
      let url = this.allSelected ? "/carts/unSelectAll" : "/carts/selectAll";
      this.axios.put(url).then((res) => {
        this.getData(res);
      });
    },
    updateCart(item, type) {
      let quantity = item.quantity;
      let selected = item.productSelected;
      if (type === "selected") {
        selected = !selected;
      }
      if (type === "-") {
        if (quantity <= 1) {
          alert("最少保留一件商品");
          return;
        }
        quantity--;
      }
      if (type === "+") {
        if (quantity >= item.productStock) {
          alert("超出了库存");
          return;
        }
        quantity++;
      }
      this.axios
        .put(`/carts/${item.productId}`, {
          quantity,
          selected,
        })
        .then((res) => {
          this.getData(res);
        });
    },
    delProduct(item) {
      this.axios.delete(`/carts/${item.productId}`).then((res) => {
        this.getData(res);
        alert("删除成功");
      });
    },
    getData(res) {
      this.goodsList = res.cartProductVoList || [];
      this.allSelected = res.selectedAll;
      this.cartTotalPrice = res.cartTotalPrice
      this.selectGoodsCount = this.goodsList.filter(item=> item.productSelected).length
    },
  },
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/reset.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
.cart {
  .main {
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: #f5f5f5;
    border-top: 2px solid #ff6600;
    .cartFooter {
      height: 50px;
      margin-top: 20px;
      font-size: 14px;

      @include flexFun();
      .left {
        color: #666666;
        .info {
          margin-left: 29px;
          margin-right: 29px;
        }
      }
      .right {
        color: #ff6600;
        span:nth-child(2) {
          display: inline-block;
          width: 200px;
          height: 50px;
          margin-left: 37px;

          line-height: 50px;
          text-align: center;
          background: #ff6600;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
        }
      }
    }
  }
  .specialFont {
      margin: 0 5px;
      font-size: 24px;
      color: #FF6600;
  }
}
</style>