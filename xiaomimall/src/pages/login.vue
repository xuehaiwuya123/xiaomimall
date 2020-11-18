<template>
<div class="login">
    <div class="header">
        <div class="container">
            <div class="logo">
                <img src="/imgs/login-logo.png" alt="" />
            </div>
        </div>
    </div>
    <div class="main">
        <div class="login-img">
            <div class="">
                <div class="login-form">
                    <div class="form-header">
                        <span>账号登录</span>
                        <span class="line"></span>
                        <span>扫码登录</span>
                    </div>
                    <div class="user-name">
                        <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="username" />
                    </div>
                    <div class="password">
                        <input type="text" placeholder="密码" v-model="password" />
                    </div>
                    <div class="login-button" @click="login">登录</div>
                    <div class="login-footer">
                        <div class="left-footer">
                            <span>手机短信登录/</span>
                            <span @click="register">注册</span>
                        </div>
                        <div class="right-footer">
                            <span>立即注册</span>
                            <span class="line"></span>
                            <span>忘记密码?</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="container">
            <div class="footer-info">
                <div class="first-line">
                    <div class="content" v-for="(item, index) in footerList" :key="index">
                        {{ item.label }}
                    </div>
                </div>
                <div class="second-line">
                    小米公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            footerList: [{
                    label: "简体",
                },
                {
                    label: "繁体",
                },
                {
                    label: "English",
                },
                {
                    label: "常见问题",
                },
                {
                    label: "隐私政策",
                },
            ],
            username: '',
            password: '',
            userId: ''
        };
    },
    methods: {
        login() {
            let {
                username,
                password
            } = this
            this.axios.post('/user/login', {
                username,
                password
            }).then((res) => {
                console.log(res, 'res')
                // 将userId存储在cookie中， 这时使用vue-cookie插件
                this.$cookie.set('userId', res.id, {
                    expires: '1M'
                });
                this.$store.dispatch('saveUserName', res.username)
                this.$router.push({
                    name: 'index',
                    query: res
                })
            }).catch(err => {
                alert(err)
            })
        },
        register() {
            let {
                username,
                password
            } = this
            this.axios.post('/user/register', {
                username,
                password
            }).then(() => {
                alert('注册成功')
            }).catch(err => {
                alert(err)
            })
        }
    }
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/config.scss";
@import "./../assets/scss/reset.scss";
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";

.login {
    .header {
        height: 112px;
        background-color: #fff;

        .logo {
            height: 112px;
        }
    }

    .main {
        height: 576px;

        .login-img {
            width: auto;
            height: 576px;
            background: url("/imgs/login-bg.jpg") no-repeat center;
            position: relative;

            .login-form {
                width: 410px;
                height: 510px;
                padding: 40px 31px 0 31px;
                box-sizing: border-box;
                position: absolute;
                top: 37px;
                right: 100px;
                background: #fff;

                .form-header {
                    height: 30px;
                    @include flexFun(center, center);

                    span {
                        display: inline-block;
                        font-family: PingFangSC-Regular;
                        font-size: 24px;
                        color: #FF6600;
                    }

                    .line {
                        width: 2px;
                        height: 25px;
                        background: #D7D7D7;
                        margin: 0 35px 0 35px;
                    }

                    span:nth-child(3) {
                        color: #666666;
                    }
                }

                .user-name,
                .password {
                    width: 348px;
                    height: 50px;
                    line-height: 50px;
                    margin-top: 49px;
                    box-sizing: border-box;
                    padding-left: 10px;
                    border: 1px solid #E5E5E5;
                    color: #999999;

                    input {
                        width: 330px;
                        height: 40px;
                        border: none;
                        color: #999999;
                    }
                }

                .password {
                    margin-top: 20px;
                }

                .login-button {
                    width: 348px;
                    height: 50px;
                    margin-top: 30px;
                    text-align: center;
                    line-height: 50px;
                    background: #FF6600;
                    cursor: pointer;

                    font-family: PingFangSC-Regular;
                    font-size: 16px;
                    color: #FFFFFF;
                }

                .login-footer {
                    width: 348px;
                    height: 14px;
                    @include flexFun();

                    margin-top: 14px;
                    font-size: 14px;
                    color: #FF6600;
                    cursor: pointer;

                    .right-footer {
                        color: #999999;

                        .line {
                            display: inline-block;
                            width: 1px;
                            height: 14px;
                            margin-left: 5px;
                            margin-right: 5px;
                            background: #D7D7D7;
                        }
                    }
                }
            }
        }
    }

    .footer {
        margin-top: 100px;
        margin-bottom: 93px;
        font-size: 14px;
        color: #333333;

        .footer-info {
            .first-line {
                @include flexFun(center, center);

                .content {
                    margin-left: 5px;
                    margin-right: 5px;
                    position: relative;

                    &::after {
                        @include fakeFun(1px, 13px);
                        background-color: #999999;
                        position: absolute;
                        top: 1px;
                        right: -5px;

                    }

                    &:last-child::after {
                        display: none;
                    }
                }

            }

            .second-line {
                margin-top: 10px;
                text-align: center;
            }
        }
    }
}
</style>
