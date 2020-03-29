<template>
	<div class="register">
		<van-nav-bar title="注册" left-text="" left-arrow @click-left="returnLogin"/>
		<van-cell-group>
			<van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名"/>
			<van-field v-model="telephone" required clearable label="手机号码" placeholder="请输入手机号码"/>
			<van-field v-model="password" required clearable type="password" label="密码" placeholder="请输入密码"/>
			<van-field v-model="repeatPwd" required clearable type="password" label="确认密码" placeholder="请再次输入密码"/>
			<van-checkbox v-model="checked" checked-color="#07c160" shape="square"><span>我已阅读并同意</span><span style="color: #203fd9"><van-icon name="arrow-left" /><van-icon name="arrow-left" />DV国际交易协议<van-icon name="arrow" /><van-icon name="arrow" /></span></van-checkbox>
			<van-button round type="info" @click="submit">注册</van-button>
		</van-cell-group>
	</div>
</template>

<script>
import api from '@/service/api';
export default {
    data() {
        return {
            username: '',
            telephone: '',
            password: '',
            repeatPwd: '',
            checked: false,
            data: {}
        };
    },
    methods: {
        returnLogin() {
            this.$router.push({path: '/home/Login'});
        },
        submit() {
            if(this.username.trim() === '' || this.telephone.trim() === '' || this.password.trim() === '' || this.repeatPwd.trim() === '') {
                this.$notify({type: 'warning', message: '输入不能为空'});
                return false;
            }
            if(this.password !== this.repeatPwd) {
                this.$notify({type: 'warning', message: '密码不一致'});
                return false;
            }
            if(!this.checked) {
                this.$notify({type: 'warning', message: '请勾选协议！'});
                return false;
            }
            this.data.name = this.username;
            this.data.telephone = this.telephone;
            this.data.password = this.password;
            api.register(this.data).then(res => {
                console.log(res);
                if(res.data) {
                    if(res.data.success === 'true') {
                        this.$notify({type: 'success', message: '注册成功'});
                        this.$router.push({name: '/home/Login'});
                    } else {
                        this.$notify({type: 'warning', message: res.data.msg});
                    }
                }
            });
        }
    }
};
</script>

<style  scoped lang="scss">
	.register {
		position: relative;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background: #fff;
		z-index: 100;
	}
	.van-cell-group {
		margin: 0.8rem 0;
	}
	.van-cell {
		padding: 0.5rem 1.6rem;
		flex-direction: column;
	}
	.van-cell--required::before {
		left: 1.1rem;
		top: 0.64rem;
	}
	.register /deep/.van-field__label {
		margin-bottom: 0.2rem;
	}
	.van-checkbox {
		padding: 1rem;
	}
	.van-button--info {
		margin-top: 2rem;
		width: 12rem;
		left: 50%;
		transform: translateX(-50%);
		background-color: #0023d3;
		border: 1px solid #0023d3;
	}
	.van-hairline--bottom::after {
        border-bottom-width: 0;
	}
	.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
        border-width: 0;
	}
	.van-cell:not(:last-child)::after {
		left: 1.5rem;
	}
</style>
