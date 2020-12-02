<template>
    <div class="orderHeader">
        <div class="container clearfix">
            <div class="header-logo">
                <a href="javascript:void(0)"></a>
            </div>
            <div class="center">
                <span class="title">
                    我的购物车
                </span>
                <span class='tip'>
                    <slot name="tip"></slot>
                </span>
            </div>
            <div class="username">
                {{username}}
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: 'orderHeader',
    props: {
        title: {
            type: String,
            default: '我的购物车'
        }
    },
    computed: {
        // username () {
        //     return this.$store.state.username
        // }
        ...mapState(['username'])
    }
}
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/reset.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
    .orderHeader {
        .container {
            height: 118px;
            @include flexFun(flex-start, center);
            .header-logo{
                width: 55px;
                height: 55px;
            }
            .center{
                margin-left: 54px;
                .title {
                    font-weight: bold;
                    font-size: 28px;
                    color: #333333;
                }
                .tip {
                    margin-left: 17px;
                    font-size: 14px;
                    color: #999;
                    font-weight: 200;
                }
            }
            .username{
                flex: 1;
                text-align: right;
                color: #666666;
                font-size: 16px;
                cursor: pointer;
            }
        }
        .clearfix {
            clear: both;
        }
    }
</style>