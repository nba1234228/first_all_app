<template>
	<div class="exchange">
		<div class="exchange-header">
			<van-nav-bar left-arrow title="兑换" @click-left="retCard" :border="false"/>
			<p class="sum">可兑换USDT：<span>5968</span></p>
			<p class="proportion">1USDT=1VT</p>
		</div>
		<ul class="exchange-container">
			<li class="li-num">
				<span>兑换数量:</span>
				<input type="text" v-model="num" placeholder="请输入兑换数量" />
			</li>
			<li class="li-val">
				<span>兑换所得:</span>
				<input type="text" v-model="value" disabled />
			</li>
		</ul>
		<button class="submit" @click="submit">兑换</button>
	</div>
</template>

<script>
// import { urls } from '#/js/http_urls';
export default {
    data() {
        return {
            num: '',
            value: 0
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
	.exchange {
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
	}
	.exchange-header {
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
	.exchange-container {
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
			&.li-val::after {
				content: 'VT';
			}
			input {
				width: 75%;
				height: 1.36rem;
				margin-left: 0.2rem;
				border: 1px solid #aaa;
				border-radius: 0.2rem;
				text-indent: 1em;
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
