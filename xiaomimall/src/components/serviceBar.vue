<template>
<div class="service-bar">
    <div class="main">
        <div class="main-item" v-for="(item, index) in list" :key="index">
            <img :src="getImg(item.iconUrl)" alt="" />
            <span>预约维修服务</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "service-bar",
    data() {
        return {
            list: [{
                    title: "预约维修服务",
                    iconUrl: "icon-setting",
                },
                {
                    title: "7天无理由退货",
                    iconUrl: "icon-7day",
                },
                {
                    title: "15天免费换货",
                    iconUrl: "icon-15day",
                },
                {
                    title: "满150元包邮",
                    iconUrl: "icon-post",
                },
            ],
        };
    },
    mounted() {},
    methods: {
        getImg(url) {
            return `/imgs/${url}.png`;
        },
    },
};
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";

.service-bar {
    .main {
        height: 90px;
        @include flexFun(space-around, center);

        .main-item {
            flex: 1;
            @include flexFun(center, center);
            position: relative;
            border-right: 1px solid #E5E5E5;

            img {
                width: 20px;
                height: auto;
                margin-right: 5px;
            }

            span {
                color: #666666;
                font-size: 16px;
            }

            &:last-child {
                border-right: none;
            }
        }
    }
}
</style>
