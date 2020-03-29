<template>
	<div class="warehouse">
		<div class="warehouse-header">
			<van-nav-bar left-arrow title="我的锁仓🔒" @click-left="retMine" :border="false"/>
		</div>
		<div class="warehouse-container">
			<van-nav-bar title="数量" left-text="序号" right-text="日期" />
			<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
				<div class="item" v-for="(item, index) in list" :key="index">
					<p class="no">{{item.no}}</p>
					<p class="num">{{item.num}}</p>
					<p class="date">{{item.date}}</p>
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
                    no: 1,
                    num: 23,
                    date: '2019/09/24'
                },
                {
                    id: 2,
                    no: 2,
                    num: 451,
                    date: '2019/11/24'
                },
                {
                    id: 3,
                    no: 3,
                    num: 34341,
                    date: '2013/09/01'
                },
                {
                    id: 4,
                    no: 4,
                    num: 1242,
                    date: '2017/08/12'
                },
                {
                    id: 5,
                    no: 5,
                    num: 786,
                    date: '2019/11/24'
                },
                {
                    id: 6,
                    no: 6,
                    num: 4533,
                    date: '2019/03/09'
                },
                {
                    id: 7,
                    no: 7,
                    num: 12312,
                    date: '2019/05/12'
                }
            ]
        };
    },
    mounted() {
    },
    methods: {
        retMine() {
            this.$router.push({name: '/home/Mine'});
        },
        onLoad() {
            this.loading = false;
        }
    }
};
</script>

<style scoped lang="scss">
	.warehouse {
		position: relative;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		min-height: 100%;
		background: #fff;
		z-index: 99;
	}
	.warehouse-header {
		width: 100%;
		height: 1.76rem;
		padding-top: $navPaddingTop;
		background-color: #0023d3;
	}
	.warehouse-container {
		.van-list {
			padding: 0 0.64rem;
			.item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 2.4rem;
				border-bottom: 1px solid #eee;
				.no {
					width: 30.33%;
					text-align: left;
				}
				.num {
					width: 30.33%;
					text-align: center;
				}
				.date {
					width: 39.33%;
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
	.warehouse-container .van-nav-bar__title, .van-nav-bar__text {
		color: #333;
		font-size: 0.68rem;
		font-weight: bold;
		padding-right: 34px;
	}
	.van-hairline--bottom::after {
		border-bottom-width: 0;
	}
	.van-nav-bar {
		font-weight: bold;
	}
</style>
