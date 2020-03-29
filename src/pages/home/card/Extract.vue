<template>
	<div class="extract">
		<div class="extract-header">
			<van-nav-bar left-arrow title="提币" @click-left="retCard" :border="false"/>
			<p class="sum">可兑换USDT：<span>5968</span></p>
			<p class="proportion">1USDT=1VT</p>
		</div>
		<ul class="extract-container">
			<li class="li-addr">
				<span>收币地址:</span>
				<input type="text" v-model="addr" placeholder="请输入收币地址" />
			</li>
			<li class="li-num">
				<span>提币数量:</span>
				<input type="text" v-model="num" placeholder="请输入提币数量" />
			</li>
			<li class="li-psd">
				<span>交易密码:</span>
				<input type="password" v-model="psd" placeholder="请输入密码" />
				<i class="van-icon van-icon-eye-o"></i>
			</li>
		</ul>
		<div class="tip">
			<span>可提数量：5968USDT</span>
			<span>手续费：10%</span>
		</div>
		<button class="submit" @click="submit">提币</button>
	</div>
</template>

<script>
// import { urls } from '#/js/http_urls';
export default {
    data() {
        return {
            addr: '',
            num: '',
            psd: ''
        };
    },
    mounted() {
    },
    methods: {
        retCard() {
            this.$router.push({name: '/home/Card'});
        },
        submit() {
            this.$router.push({name: '/home/Card'});
        },
        onLoad() {
            this.loading = false;
        }
    }
};
</script>

<style scoped lang="scss">
	.extract {
		position: relative;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		min-height: 100%;
		background: #fff;
		z-index: 99;
		.submit {
			margin-top: 0.88rem;
			width: 88%;
			height: 1.8rem;
			background-color: #0023d3;
			color: #fff;
			border: 1px solid #0023d3;
			border-radius: 0.2rem;
			margin-left: 50%;
			transform: translateX(-50%);
		}
		.tip {
			padding: 0 0.8rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #ccc;
		}
	}
	.extract-header {
		width: 100%;
		height: 4.56rem;
		padding-top: $navPaddingTop;
		background-color: #0023d3;
		.sum {
			margin-top: 0.4rem;
			span {
				font-size: 0.64rem;
				vertical-align: -1px;
				font-weight: bold;
			}
		}
		.sum, .proportion {
			text-align: center;
			color: #fff;
			font-size: 0.52rem;
			line-height: 22px;
		}
	}
	.extract-container {
		padding: 0.8rem;
		li {
			line-height: 2.2rem;
			position: relative;
			&::after {
				position: absolute;
				right: 11px;
				top: 0;
				color: #999;
			}
			&.li-num::after {
				content: 'USDT';
			}
			input {
				width: 75%;
				height: 1.36rem;
				margin-left: 0.2rem;
				border: none;
				border-bottom: 1px solid #aaa;
				text-indent: 1em;
			}
			i {
				position: absolute;
				right: 10px;
				top: 16px;
				font-size: 24px;
				color: #ccc;
			}
		}
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
