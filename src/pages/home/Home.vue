<template>
	<div class="home">
		<div class="navigation">
			<van-nav-bar left-text="幸运岛" right-text="English" :border="false"/>
		</div>
		<banner-page></banner-page>
		<div class="home-bottom">
			<van-notice-bar text="公告 | 关于2019年的区块链技术分享研讨会的举行..." left-icon="newspaper-o" :scrollable="false"/>
			<van-grid :gutter="0" :column-num="2" :border="false">
				<van-grid-item v-for="item in grids" :key="item.id" solt="default" @click="toInvest">
					<van-image :src="item.url" />
					<span class="grid-num" :style="item.color">{{`${item.num}U`}}</span>
					<span class="grid-text">去入金</span>
				</van-grid-item>
			</van-grid>
			<van-grid :gutter="10" :column-num="4" :border="false" class="list">
				<van-grid-item v-for="item in list" :key="item.id" solt="default" @click="toSecondPage">
					<van-image :src="item.url" />
					<span class="list-name">{{item.name}}</span>
				</van-grid-item>
			</van-grid>
		</div>
<!--        <hoc-base></hoc-base>-->
	</div>
</template>

<script>
import BannerPage from '@/components/common/Banner';
// import HocBase from '@/components/HocComponents/HocBase';
export default {
    data() {
        return {
            grids: [
                {
                    id: 1,
                    num: 150,
                    color: 'color: #18b2f7',
                    url: require('../../../public/imgs/grid/medal.png')
                },
                {
                    id: 2,
                    num: 1500,
                    color: 'color: #3173e7',
                    url: require('../../../public/imgs/grid/diamond.png')
                },
                {
                    id: 3,
                    num: 15000,
                    color: 'color: #4c48ff',
                    url: require('../../../public/imgs/grid/crown.png')
                },
                {
                    id: 4,
                    num: 100000,
                    color: 'color: #7615ee',
                    url: require('../../../public/imgs/grid/wing.png')
                }
            ],
            list: [
                {
                    id: 1,
                    name: '生活',
                    url: require('../../../public/imgs/list/live.png')
                }, {
                    id: 2,
                    name: '社交',
                    url: require('../../../public/imgs/list/shejiao.png')
                }, {
                    id: 3,
                    name: '娱乐',
                    url: require('../../../public/imgs/list/play.png')
                }, {
                    id: 4,
                    name: '直播',
                    url: require('../../../public/imgs/list/zhibo.png')
                }, {
                    id: 5,
                    name: '购物',
                    url: require('../../../public/imgs/list/shop.png')
                }, {
                    id: 6,
                    name: '游戏',
                    url: require('../../../public/imgs/list/game.png')
                }, {
                    id: 7,
                    name: '贷款',
                    url: require('../../../public/imgs/list/daikuan.png')
                }, {
                    id: 8,
                    name: '支付',
                    url: require('../../../public/imgs/list/pay.png')
                }
            ]
        };
    },
    methods: {
        toInvest() {
            this.$router.push({name: '/home/home/Invest'});
        },
        toSecondPage() {
            this.$router.push({name: '/home/home/SecondPage'});
        }
    },
    components: {
        // HocBase,
        BannerPage
    }
};
</script>

<style scoped lang="scss">
	.home {
		margin-bottom: 2.5rem;
		.home-bottom {
		}
	}
	.van-notice-bar {
		box-shadow: 0 0 5px #eee;
		margin: 0 0.7rem;
		padding: 0 0.32rem;
		color: #333;
		background-color: #fff;
	}
	.van-grid {
		margin: 0.52rem 0.3rem;
		.grid-text {
			position: absolute;
			right: 2rem;
			bottom: 1.05rem;
			color: #fff;
			font-size: 0.24rem;
		}
		.grid-num {
			position: absolute;
			right: 0.58rem;
			top: 0.5rem;
			color: #fff;
			font-size: 0.64rem;
			display: inline-block;
			width: 3.6rem;
			text-align: center;
		}
	}
	.home /deep/ .van-grid-item__content {
		padding: 0.3rem 0.3rem;
		position: relative;
	}
	.list .van-grid-item {
		padding-bottom: 30px;
	}
	.van-image {
		/*border: 1px dashed #3699ff;*/
	}
	.list-name {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 3rem;
	}
	.list /deep/ .van-image__img {
		/*background-color: #dcf8ff;*/
	}
	.navigation {
		width: 100%;
		height: 1.84rem;
		padding-top: $navPaddingTop;
		background-color: #0023d3;
	}
	.van-nav-bar {
		background-color: transparent;
	}
	.van-nav-bar__text:active {
		background-color: transparent;
	}
	.van-nav-bar__text {
		color: #fff;
		font-size: 0.72rem;
	}
</style>
