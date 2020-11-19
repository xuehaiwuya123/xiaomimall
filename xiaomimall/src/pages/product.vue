<template>
    <div class="product">
            <product-params>
                <template v-slot:body>
                    <div class="btn">
                        立即购买
                    </div>
                </template>
            </product-params>
        <div class="container">
            <div class="h">
            1231232221312312213231
            </div>
        </div>
    </div>
</template>
<script>
import productParams from './../components/productParams'
export default {
    name: 'product',
    components: {
        productParams
    }
}
</script>
<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/reset.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
    .product {
        .h {
            height: 2000px;
            background-color: red;
        }
    }
</style>