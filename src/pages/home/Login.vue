<template>
	<div class="login">
		<div class="login-top">
			<img :src="logoPng" />
		</div>
		<van-cell-group>
			<van-field v-model="telephone" clearable label="手机号码" placeholder="请输入手机号码"/>
			<van-field v-model="password" clearable type="password" label="密码" placeholder="请输入密码"/>
		</van-cell-group>
		<div class="login-button">
			<van-button round type="info" @click="login">立即登录</van-button>
			<p>
				<span>忘记密码？</span>
				<router-link to="/register" tag="span">立即注册</router-link>
			</p>
		</div>
		<div class="login-others">
			<p>第三方登录</p>
			<ul>
				<li v-for="(item,index) in loginType" :key="index">
					<i :class="item"></i>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import httpRequest from '#/js/httpRequest';
export default {
    data() {
        return {
            logoPng: require('../../../public/imgs/logo.png'),
            telephone: '',
            password: '',
            loginData: {},
            loginType: ['iconfont iconzhifubao', 'iconfont icontaobao', 'iconfont iconQQ', 'iconfont iconweixin']
        };
    },
    methods: {
        login() {
            if(this.telephone.trim() === '' || this.password.trim() === '') {
                this.$notify({type: 'warning', message: '输入不能为空'});
                return false;
            }
            this.loginData.telephone = this.telephone;
            this.loginData.password = this.password;
            httpRequest.login(this.loginData).then((res) => {
                console.log(res);
                if(res.success === 'true') {
                    const token = res.result.token;
                    const phone = res.result.phone;
                    localStorage.setItem('userPhone', phone);
                    this.$store.commit('home/login', token);
                    this.$router.push(this.$route.query.redirect);
                } else {
                    this.$notify({type: 'warning', message: res.msg});
                }
            }).catch((error) => {
                console.log('error', error);
                this.$notify({type: 'warning', message: '服务器出错，请稍后再试！'});
            });
        }
    },
    beforeRouteEnter: function(to, from, next) {
        next();
    }
};
</script>

<style lang="scss" scoped>
	.login{
		width: 100%;
		height: 100%;
		background: #fff;
		position: relative;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		.login-top{
			height: 32vh;
			text-align: center;
			position: relative;
			img{
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%,-50%);
				width: 6rem;
				height: 5.5rem;
			}
		}
		.login-button{
			text-align: center;
			p{
				margin: 0.48rem auto;
				width: 80%;
				display: flex;
				justify-content: space-between;
			}
		}
		.login-others{
			p{
				margin-top: 1.8rem;
				text-align: center;
			}
			ul{
				margin-top: 0.8rem;
				display: flex;
				justify-content: space-between;
				li{
					width: 33.3333%;
					text-align: center;
					&:nth-child(1){color: #81c2ec;}
					&:nth-child(2){color: #f40;}
					&:nth-child(3){color: #30a5dd;}
					&:nth-child(4){color: #12d532;}
					i{
						font-size: 2rem;
					}
				}
			}
		}
	}
	.van-cell {
		padding: 0.5rem 1.6rem;
		flex-direction: column;
	}
	.van-hairline--top-bottom::after {
		border-width: 0;
	}
	.van-cell::after {
		position: absolute;
		box-sizing: border-box;
		content: ' ';
		pointer-events: none;
		right: 1.5rem;
		bottom: 0;
		left: 1.5rem;
		border-bottom: 1px solid #ebedf0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	.van-button--info {
		margin-top: 2rem;
		width: 12rem;
		background-color: #0023d3;
		border: 1px solid #0023d3;
	}
</style>
