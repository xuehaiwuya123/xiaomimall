<template>
<transition name="fade">
    <div class="modal" v-show="showModal">
        <div class="mask"></div>
        <div class="content">
            <div class="header">
                <span>{{ title }}</span>
                <span class="icon-close" @click="closeFun"></span>
            </div>
            <div class="body">
                <slot name="body"></slot>
            </div>
            <div class="footer">
                <div class="btnType" v-if="btnType === '1'">
                    <span>{{ sureText }}</span>
                    <span>{{ cancelText }}</span>
                </div>
                <div class="btnType" v-if="btnType === '2'"  @click="goCart">
                    <span>
                        {{ sureText }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    name: "modal",
    props: {
        showModal: {
            type: Boolean,
            default: false,
        },
        // 标题
        title: {
            type: String,
            default: "",
        },
        // 取消按钮名称
        cancelText: {
            type: String,
            default: "取消",
        },
        // 确定按钮名称
        sureText: {
            type: String,
            default: "确定",
        },
        // 按钮类型
        btnType: {
            type: String,
            default: "1", // 1,两个按钮 2，一个按钮
        },
    },
    data() {
        return {};
    },
    methods: {
        closeFun() {
            this.$emit("closeFun", false);
        },
        goCart() {
            this.$emit('goCart')
        }
    },
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/modal.scss";

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
}
</style>
