<template>
<div class="index">
    <div class="container">
        <div class="menu">
            <div class="menu-item">
                <a href="javascript:;">
                    <span>手机</span>
                    <span>电话卡</span>
                </a>
                <div class="children">
                    <ul v-for="(item, index) in menuList" :key="index">
                        <li class="item-list" v-for="(items, indexs) in item" :key="indexs">
                            <div class="content">
                                <img v-lazy="items.img" alt="" />
                                <span>{{ items.name }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="menu-item">
                <a href="javascript:;">
                    <span>笔记本</span>
                    <span>平板</span>
                </a>
                <div class="children">
                    <ul v-for="(item, index) in menuList" :key="index">
                        <li class="item-list" v-for="(items, indexs) in item" :key="indexs">
                            <div class="content">
                                <img v-lazy="items.img" alt="" />
                                <span>{{ items.name }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="menu-item">
                <a href="javascript:;">
                    <span>家电</span>
                    <span>插线板</span>
                </a>
                <div class="children">
                    <ul v-for="(item, index) in menuList" :key="index">
                        <li class="item-list" v-for="(items, indexs) in item" :key="indexs">
                            <div class="content">
                                <img v-lazy="items.img" alt="" />
                                <span>{{ items.name }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="menu-item">
                <a href="javascript:;">
                    <span>出行</span>
                    <span>穿戴</span>
                </a>
                <div class="children">
                    <ul v-for="(item, index) in menuList" :key="index">
                        <li class="item-list" v-for="(items, indexs) in item" :key="indexs">
                            <div class="content">
                                <img v-lazy="items.img" alt="" />
                                <span>{{ items.name }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="menu-item">
                <a href="javascript:;">
                    <span>智能</span>
                    <span>路由器</span>
                </a>
                <div class="children">
                    <ul v-for="(item, index) in menuList" :key="index">
                        <li class="item-list" v-for="(items, indexs) in item" :key="indexs">
                            <div class="content">
                                <img v-lazy="items.img" alt="" />
                                <span>{{ items.name }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="menu-item">
                <a href="javascript:;">
                    <span>电源</span>
                    <span>配件</span>
                </a>
                <div class="children">
                    <ul v-for="(item, index) in menuList" :key="index">
                        <li class="item-list" v-for="(items, indexs) in item" :key="indexs">
                            <div class="content">
                                <img v-lazy="items.img" alt="" />
                                <span>{{ items.name }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="menu-item">
                <a href="javascript:;">
                    <span>生活</span>
                    <span>箱包</span>
                </a>
                <div class="children">
                    <ul v-for="(item, index) in menuList" :key="index">
                        <li class="item-list" v-for="(items, indexs) in item" :key="indexs">
                            <div class="content">
                                <img v-lazy="items.img" alt="" />
                                <span>{{ items.name }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="menu-item">
                <a href="javascript:;">
                    <span>小米</span>
                    <span>文化</span>
                </a>
                <div class="children">
                    <ul v-for="(item, index) in menuList" :key="index">
                        <li class="item-list" v-for="(items, indexs) in item" :key="indexs">
                            <div class="content">
                                <img v-lazy="items.img" alt="" />
                                <span>{{ items.name }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="swiper-box">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="(item, index) in slideList" :key="index">
                    <a href="javascript:;" @click="jumpProduct(item)">
                        <img v-lazy="item.img" alt="" />
                    </a>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
        <div class="ads-box">
            <div class="ads-box-list" v-for="(item, index) in adsBoxList" :Key="index">
                <img v-lazy="item.imgUrl" alt="" />
            </div>
        </div>
        <div class="banner">
            <div class="banner-img"></div>
        </div>
    </div>
    <div class="phone-service">
        <div class="container">
            <div class="phone">
                <div class="left-menu">
                    <div class="left-menu-img"></div>
                </div>
                <div class="right-phone">
                    <div class="phone-item" v-for="(item, index) in phoneList" :Key="index">
                        <div class="main" v-for="(items, indexs) in item" :key="indexs">
                            <p class="title">{{ items.name }}</p>
                            <div class="img">
                                <img v-lazy="items.mainImage" alt="" />
                            </div>
                            <p class="name">{{ items.name }}</p>
                            <p class="info">{{ items.subtitle }}</p>
                            <div class="price-cart">
                                <span class="price"> {{ items.price }}元 </span>
                                <span class="icon-cart" @click="addCart()"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="service">
                <serviceBar></serviceBar>
            </div>
        </div>
    </div>
    <modal :showModal='showModal' title='提示' btnType="2" sureText="查看购物车" @closeFun='closeFun' @goCart='goCart'>
        <template v-slot:body>
            <p>
                加入购物车成功
            </p>
        </template>
    </modal>
</div>
</template>

<script>
import {
    Swiper,
    SwiperSlide
} from "vue-awesome-swiper";
import serviceBar from "./../components/serviceBar";
import modal from './../components/modal'
import "swiper/css/swiper.css";
export default {
    name: "index",
    components: {
        Swiper,
        SwiperSlide,
        serviceBar,
        modal
    },
    data() {
        return {
            menuList: [
                [{
                        id: 30,
                        img: "/imgs/item-box-1.png",
                        name: "小米CC9",
                    },
                    {
                        id: 31,
                        img: "/imgs/item-box-2.png",
                        name: "小米8青春版",
                    },
                    {
                        id: 32,
                        img: "/imgs/item-box-3.jpg",
                        name: "Redmi K20 Pro",
                    },
                    {
                        id: 33,
                        img: "/imgs/item-box-4.jpg",
                        name: "移动4G专区",
                    },
                ],
                [{
                        id: 30,
                        img: "/imgs/item-box-1.png",
                        name: "小米CC9",
                    },
                    {
                        id: 31,
                        img: "/imgs/item-box-2.png",
                        name: "小米8青春版",
                    },
                    {
                        id: 32,
                        img: "/imgs/item-box-3.jpg",
                        name: "Redmi K20 Pro",
                    },
                    {
                        id: 33,
                        img: "/imgs/item-box-4.jpg",
                        name: "移动4G专区",
                    },
                ],
                [{
                        id: 30,
                        img: "/imgs/item-box-1.png",
                        name: "小米CC9",
                    },
                    {
                        id: 31,
                        img: "/imgs/item-box-2.png",
                        name: "小米8青春版",
                    },
                    {
                        id: 32,
                        img: "/imgs/item-box-3.jpg",
                        name: "Redmi K20 Pro",
                    },
                    {
                        id: 33,
                        img: "/imgs/item-box-4.jpg",
                        name: "移动4G专区",
                    },
                ],
                [{
                        id: 30,
                        img: "/imgs/item-box-1.png",
                        name: "小米CC9",
                    },
                    {
                        id: 31,
                        img: "/imgs/item-box-2.png",
                        name: "小米8青春版",
                    },
                    {
                        id: 32,
                        img: "/imgs/item-box-3.jpg",
                        name: "Redmi K20 Pro",
                    },
                    {
                        id: 33,
                        img: "/imgs/item-box-4.jpg",
                        name: "移动4G专区",
                    },
                ],
                [{
                        id: 30,
                        img: "/imgs/item-box-1.png",
                        name: "小米CC9",
                    },
                    {
                        id: 31,
                        img: "/imgs/item-box-2.png",
                        name: "小米8青春版",
                    },
                    {
                        id: 32,
                        img: "/imgs/item-box-3.jpg",
                        name: "Redmi K20 Pro",
                    },
                    {
                        id: 33,
                        img: "/imgs/item-box-4.jpg",
                        name: "移动4G专区",
                    },
                ],
                [{
                        id: 30,
                        img: "/imgs/item-box-1.png",
                        name: "小米CC9",
                    },
                    {
                        id: 31,
                        img: "/imgs/item-box-2.png",
                        name: "小米8青春版",
                    },
                    {
                        id: 32,
                        img: "/imgs/item-box-3.jpg",
                        name: "Redmi K20 Pro",
                    },
                    {
                        id: 33,
                        img: "/imgs/item-box-4.jpg",
                        name: "移动4G专区",
                    },
                ],
            ],
            swiperOptions: {
                autoplay: true,
                loop: true,
                effect: "cube",
                cubeEffect: {
                    shadowOffset: 100,
                    shadowScale: 0.6,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
            slideList: [{
                    id: "42",
                    img: "/imgs/slider/slide-1.jpg",
                },
                {
                    id: "45",
                    img: "/imgs/slider/slide-2.jpg",
                },
                {
                    id: "46",
                    img: "/imgs/slider/slide-3.jpg",
                },
                {
                    id: "",
                    img: "/imgs/slider/slide-4.jpg",
                },
                {
                    id: "",
                    img: "/imgs/slider/slide-1.jpg",
                },
            ],
            adsBoxList: [{
                    imgUrl: "/imgs/ads/ads-1.png",
                },
                {
                    imgUrl: "/imgs/ads/ads-2.jpg",
                },
                {
                    imgUrl: "/imgs/ads/ads-3.png",
                },
                {
                    imgUrl: "/imgs/ads/ads-4.jpg",
                },
            ],
            phoneList: [],
            showModal: false
        };
    },
    created() {
        this.getPhoneList();
    },
    methods: {
        getPhoneList() {
            this.axios
                .get("/products", {
                    params: {
                        categoryId: 100012,
                        pageSize: 14,
                    },
                })
                .then((res) => {
                    // 注意这里报错
                    this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
                });
        },
        jumpProduct (item) {
            this.$router.push(
                {                
                    path: '/product/' + item.id
                }
            )
        },
        addCart() {
            this.showModal = true
        },
        closeFun(val) {
            this.showModal = val
        },
        goCart () {
            this.$router.push({
                name: 'cart'
            })
        }
    },
};
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";

.index {
    position: relative;

    .container {
        padding-bottom: 20px;

        .menu {
            width: 264px;
            height: 451px;
            padding: 26px 0;
            box-sizing: border-box;
            position: absolute;
            left: 0;
            top: 0;
            // 可以直接在谷歌浏览器中通过颜色设置它的透明度，这样只会让背景的透明度变模糊，字体的透明度不会变
            background-color: #55585a7a;
            z-index: 100;

            .menu-item {
                height: 50px;

                a {
                    display: inline-block;
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    padding-left: 30px;
                    box-sizing: border-box;
                    font-size: 16px;
                    color: #ffffff;
                    position: relative;

                    span {
                        margin-right: 5px;
                    }

                    &::after {
                        @include fakeFun(10px, 15px);
                        @include bgImgFun(10px, 15px, "/imgs/icon-arrow.png");
                        position: absolute;
                        right: 20px;
                        top: 50%;
                        transform: translateY(-50%);
                    }

                    &:hover {
                        background: rgb(255, 102, 0);
                    }
                }

                &:hover {
                    .children {
                        display: block;
                        width: 962px;
                        height: 451px;
                        opacity: 1;
                        transition: all 0.5s;
                    }
                }

                .children {
                    width: 0;
                    height: 0;
                    opacity: 0;
                    position: absolute;
                    top: 0;
                    left: 264px;
                    overflow: hidden;
                    background: #fff;
                    border: 1px solid #cccccc;
                    transition: all 0.5s;

                    ul {
                        display: flex;
                        height: 75px;

                        .item-list {
                            flex: 1;

                            .content {
                                height: 75px;
                                display: flex;
                                justify-content: center;
                                align-items: center;

                                img {
                                    width: 60px;
                                    height: 60px;
                                    margin-right: 5px;
                                }

                                span {
                                    color: black;
                                }
                            }
                        }
                    }
                }
            }
        }

        .swiper-box {
            width: 1226px;
            height: 451px;

            img {
                width: 100%;
                height: 451px;
            }
        }

        .ads-box {
            margin-top: 20px;
            @include flexFun();

            .ads-box-list {
                width: 296px;
                height: 167px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .banner {
            margin-top: 20px;

            .banner-img {
                @include bgImgFun(1226px, 130px, "/imgs/banner-1.png");
            }
        }

    }

    .phone-service {
        padding-top: 20px;
        background-color: #f5f5f5;

        .phone {
            display: flex;

            .left-menu {
                margin-right: 16px;
                @include bgImgFun(224px, 619px, "/imgs/mix-alpha.jpg");
                background-size: 224px 619px;
            }

            .right-phone {
                width: 986px;
                height: 619px;

                .phone-item {
                    @include flexFun();
                    margin-bottom: 15px;

                    .main {
                        width: 236px;
                        height: 302px;
                        text-align: center;
                        font-size: 14px;
                        background: #fff;

                        .title {
                            width: 67px;
                            height: 24px;
                            line-height: 24px;
                            margin-left: auto;
                            margin-right: auto;
                            background-color: #7ecf68;
                            color: #fff;
                        }

                        .img {
                            width: 236px;
                            height: 200px;

                            img {
                                width: 100%;
                                height: 150px;
                                margin-top: 20px;
                            }
                        }

                        .name {
                            font-weight: bold;
                            color: #333333;
                        }

                        .info {
                            color: #999999;
                            font-size: 12px;
                            margin-top: 5px;
                        }

                        .price-cart {
                            height: 30px;
                            @include flexFun(center, center);

                            .price {
                                margin-right: 5px;
                                color: #f20a0a;
                                font-weight: bold;
                                cursor: pointer;
                            }

                            .icon-cart {
                                @include bgImgFun(22px, 22px, "/imgs/icon-cart-hover.png");
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
    }

    .swiper-button-prev {
        left: 264px;
    }
}
</style>
