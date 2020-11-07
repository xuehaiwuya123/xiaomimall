<template>
<div class="nav-footer">
    <div class="main">
        <div class="top">
            <div class="img">
                <!-- <img src="" alt="" /> -->
            </div>
            <div class="info">小米商城</div>
        </div>
        <div class="middle">
            <div class="item" v-for="(item, index) in menuList" :key="index">
                {{ item.menuName }}
            </div>
        </div>
        <div class="bottom">
            <p>
                Copyright ©2020 <span>mi.futurefe.com</span>
                All Rights Reserved.
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "nav-footer",
    data() {
        return {
            menuList: [{
                    menuName: "河畔一角主页"
                },
                {
                    menuName: "Vue全栈课程"
                },
                {
                    menuName: "React全家桶课程"
                },
                {
                    menuName: "微信支付专项课程"
                },
                {
                    menuName: "配套课程：Java通用型支付+电商平台双系统实战"
                },
            ],
        };
    },
};
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";

.nav-footer {
    height: 234px;
    background: rgb(51, 51, 51);
    text-align: center;
    color: white;

    .main {
        .top {
            padding-top: 46px;

            .img {
                @include bgImgFun(53px, 36px, '/imgs/logo-footer.png');
                margin-bottom: 13px;
            }
        }

        .middle {
            margin-top: 31px;
            margin-bottom: 13px;
            font-size: 16px;
            color: #999999;

            .item {
                display: inline-block;
                margin-right: 20px;
                position: relative;

                &::after {
                    @include fakeFun(1px, 16px);
                    background: gray;
                    position: absolute;
                    top: 2px;
                    right: -10px;
                }

                &:last-child::after {
                    display: none;
                }
            }
        }

        .bottom {
            font-size: 16px;
            color: #999999;

            p {
                span {
                    margin: 0 5px;
                    color: #ff6600;
                }
            }
        }
    }
}
</style>
