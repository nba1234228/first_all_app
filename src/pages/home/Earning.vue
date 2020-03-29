<template>
	<div class="earning">
		<div class="earning-header">
			<van-nav-bar title="收益" :border="false"/>
			<div class="overview">
				<div class="overview-item">
					<p class="num">36984.26</p>
					<span class="text">可获收益**</span>
				</div>
				<div class="overview-item">
					<p class="num">36984.26</p>
					<span class="text">可获收益**</span>
				</div>
				<div class="overview-item">
					<p class="num">36984.26</p>
					<span class="text">可获收益**</span>
				</div>
			</div>
		</div>
		<div class="earning-container">
			<van-nav-bar title="金额(￥)" left-text="日期" right-text="类型" />
			<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
				<div class="item" v-for="(item, index) in list" :key="index">
					<p class="no">{{item.date}}</p>
					<p class="num">{{item.money}}</p>
					<p class="date">{{item.type}}</p>
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
                    money: 123,
                    type: '静态收益',
                    date: '2019/12/12'
                },
                {
                    id: 2,
                    money: 3453,
                    type: '直推收益',
                    date: '2037/07/13'
                },
                {
                    id: 3,
                    money: 52523,
                    type: '管理收益',
                    date: '2017/07/26'
                },
                {
                    id: 4,
                    money: 4234,
                    type: '静态收益',
                    date: '2018/03/13'
                },
                {
                    id: 5,
                    money: 12312,
                    type: '社区收益',
                    date: '2019/07/14'
                }
            ]
        };
    },
    mounted() {
    },
    methods: {
        onLoad() {
            this.loading = false;
        }
    }
};
</script>

<style scoped lang="scss">
	.earning {

	}
	.earning-header {
		width: 100%;
		height: 4.56rem;
		padding-top: $navPaddingTop;
		background-color: #0023d3;
		.overview {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.overview-item {
				width: 33.33%;
				color: #fff;
				text-align: center;
				position: relative;
				&:not(last-child)::after {
					content: '';
					width: 1px;
					height: 0.8rem;
					background-color: #fff;
					position: absolute;
					right: 0;
					top: 0.56rem;
				}
				&:last-child::after {
					width: 0;
				}
				.num {
					font-size: 0.64rem;
				}
				.text {
					font-size: 0.4rem;
					color: #e5e5e5;
				}
			}
		}
	}
	.earning-container {
		.van-list {
			padding: 0 0.64rem;
			.item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 2.4rem;
				border-bottom: 1px solid #eee;
				.no {
					width: 33.33%;
					text-align: left;
				}
				.num {
					width: 33.33%;
					text-align: center;
				}
				.date {
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
	.earning-container .van-nav-bar__title, .van-nav-bar__text {
		color: #333;
		font-size: 0.68rem;
		font-weight: bold;
	}
	.van-hairline--bottom::after {
		border-bottom-width: 0;
	}
	.earning-container .van-nav-bar {
		font-weight: bold;
		background: #fafafa;
	}
</style>
