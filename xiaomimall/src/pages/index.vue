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
                                <img :src="items.img" alt="" />
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
                                <img :src="items.img" alt="" />
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
                                <img :src="items.img" alt="" />
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
                                <img :src="items.img" alt="" />
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
                                <img :src="items.img" alt="" />
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
                                <img :src="items.img" alt="" />
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
                                <img :src="items.img" alt="" />
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
                                <img :src="items.img" alt="" />
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
                    <a href="javascript:;">
                        <img :src="item.img" alt="" />
                    </a>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
    </div>
</div>
</template>

<script>
import {
    Swiper,
    SwiperSlide
} from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
    name: "index",
    components: {
        Swiper,
        SwiperSlide,
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
        };
    },
};
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";

.index {
    .container {
        position: relative;

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
    }

    .swiper-button-prev {
        left: 264px;
    }
}
</style>
