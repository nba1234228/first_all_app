<template>
	<div class="card">
		<div class="card-header">
			<van-nav-bar title="钱包" :border="false"/>
			<div class="card-desc">
				<p class="sum">￥36984.26(总资产)</p>
				<div class="card-btn">
					<p @click="toNext('/home/card/Extract')">
						<i class="iconfont icontibi"></i>
						<span>提币</span>
					</p>
					<p @click="toNext('/home/card/Exchange')">
						<i class="iconfont iconduihuan"></i>
						<span>兑换</span>
					</p>
					<p @click="toNext('/home/card/Recharge')">
						<i class="iconfont iconchongzhi"></i>
						<span>充值</span>
					</p>
				</div>
			</div>
		</div>
		<div class="card-container">
			<van-nav-bar title="实时价(￥)" left-text="名称" right-text="余额" />
			<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
				<div class="item" v-for="(item, index) in list" :key="index">
					<p class="text">
						<span :style="`background-color: ${item.color}`">{{item.text}}</span>
					</p>
					<p class="num">{{item.money}}</p>
					<p class="sular">{{item.sum}}</p>
				</div>
			</van-list>
		</div>
	</div>
</template>

<script>
// import { urls } from '#/js/http_urls';
export default {
    data() {
        return {
            loading: false,
            finished: false,
            list: [
                {
                    id: 1,
                    money: 156.00,
                    text: 'AA',
                    color: '#0023d3',
                    sum: 4654.00
                },
                {
                    id: 2,
                    money: 468.00,
                    text: 'BB',
                    color: '#ffac1e',
                    sum: 864615.00
                },
                {
                    id: 3,
                    money: 5633.00,
                    text: 'CC',
                    color: '#6674f0',
                    sum: 6655.00
                }
            ]
        };
    },
    mounted() {
    },
    methods: {
        onLoad() {
            this.loading = false;
        },
        toNext(name) {
            this.$router.push({name: name});
        }
    }
};
</script>

<style scoped lang="scss">
	.card {

	}
	.card-header {
		width: 100%;
		height: auto;
		padding-top: $navPaddingTop;
		padding-bottom: 0.52rem;
		background-color: #0023d3;
		.card-desc {
			border-radius: 0.4rem;
			margin: 0 0.52rem;
			background: linear-gradient(to right, #0065ff, #2018fa);
			.sum {
				color: #fff;
				text-align: center;
				line-height: 2rem;
				border-bottom: 1px solid rgba(255, 255, 255, 0.4);
			}
			.card-btn {
				line-height: 2.28rem;
				display: flex;
				justify-content: space-between;
				align-items: center;
				color: #fff;
				padding: 0.44rem 0.8rem;
				p {
					width: 2.92rem;
					height: 1.32rem;
					line-height: 1.32rem;
					text-align: center;
					background-color: #3a7aff;
					border-radius: 2rem;
					span {
						vertical-align: 0;
					}
				}
			}
		}
	}
	.card-container {
		.van-list {
			padding: 0 0.64rem;
			.item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 2.4rem;
				border-bottom: 1px solid #eee;
				.text {
					width: 33.33%;
					text-align: left;
					span {
						display: inline-block;
						text-align: center;
						width: 1.36rem;
						height: 1.36rem;
						line-height: 1.36rem;
						color: #fff;
						border-radius: 0.4rem;
					}
				}
				.num {
					width: 33.33%;
					text-align: center;
				}
				.sular {
					width: 33.33%;
					text-align: right;
				}
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
	.card-container .van-nav-bar__title, .van-nav-bar__text {
		color: #333;
		font-size: 0.68rem;
		font-weight: bold;
	}
	.van-hairline--bottom::after {
		border-bottom-width: 0;
	}
	.card-container .van-nav-bar {
		font-weight: bold;
		background: #fafafa;
	}
</style>
