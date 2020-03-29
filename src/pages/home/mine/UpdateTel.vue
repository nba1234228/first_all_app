<template>
	<div class="update-tel">
		<div class="update-tel-header">
			<van-nav-bar left-arrow title="修改手机号" @click-left="retPersonMsg" :border="false"/>
		</div>
		<div class="update-tel-container">
			<van-cell class="name">
				<template slot="title">
					<span>新手机号：</span>
					<input v-model="telephone" type="text" placeholder="请输入新手机号码" />
				</template>
			</van-cell>
			<van-cell class="code">
				<template slot="title">
					<span>验证码：</span>
					<input v-model="code" type="text" placeholder="请输入验证码" />
				</template>
				<button>获取验证码</button>
			</van-cell>
			<van-button type="primary" size="large" class="save" @click="retPersonMsg">保存</van-button>
		</div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            telephone: '',
            code: ''
        };
    },
    mounted() {
    },
    methods: {
        retPersonMsg() {
            this.$router.push({name: '/home/mine/PersonMsg'});
        }
    }
};
</script>

<style scoped lang="scss">
	.update-tel {
		position: relative;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 99;
	}
	.update-tel-header {
		width: 100%;
		height: 1.84rem;
		padding-top: $navPaddingTop;
		background-color: #0023d3;
	}
	.update-tel-container {
		input {
			border: none;
			text-indent: 1em;
		}
		.save {
			width: 90%;
			margin-top: 1.24rem;
			left: 50%;
			transform: translateX(-50%);
			border-radius: 0.2rem;
			background-color: #0023d3;
		}
	}
	.code {
		span {
			width: 2.48rem;
		}
		button {
			background-color: transparent;
			color: #0023d3;
			border: 1px solid #0023d3;
			border-radius: 0.52rem;
		}
	}
	.van-cell {
		align-items: center;
	}
	.van-cell::after {
		position: absolute;
		box-sizing: border-box;
		content: ' ';
		pointer-events: none;
		right: 0;
		bottom: 0;
		left: 16px;
		border-bottom: 1px solid #ebedf0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	.van-cell__title {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 0.6rem;
	}
	.van-nav-bar {
		background-color: transparent;
	}
	.van-nav-bar__text:active {
		background-color: transparent;
	}
	.van-nav-bar .van-icon {
		color: #eee;
		font-size: 17px;
	}
	.van-nav-bar__title {
		color: #fff;
		font-size: 0.68rem;
	}
</style>
