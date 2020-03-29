<template>
	<div class="person-msg">
		<div class="person-msg-header">
			<van-nav-bar left-arrow title="我的团队" @click-left="retMine" :border="false"/>
			<p class="sum">6561656.16<span>(总业绩)</span></p>
		</div>
		<div class="person-msg-container">
			<van-nav-bar title="等级" left-text="昵称" right-text="业绩" />
			<van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
				<div class="item" v-for="(item, index) in list" :key="index">
					<div class="user">
						<van-image slot="right-icon" :src="item.url" />
						<span class="name">{{item.name}}</span>
					</div>
					<p class="level">{{item.level}}</p>
					<p class="money">{{item.money}}</p>
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
                    url: require('../../../../public/imgs/head.png'),
                    name: '风口的猪',
                    level: '初级',
                    money: '2958.18U'
                },
                {
                    id: 2,
                    url: require('../../../../public/imgs/head.png'),
                    name: '牧场的猪',
                    level: '高级',
                    money: '5454.18U'
                },
                {
                    id: 3,
                    url: require('../../../../public/imgs/head.png'),
                    name: '风口的牛',
                    level: '初级',
                    money: '83453.18U'
                },
                {
                    id: 4,
                    url: require('../../../../public/imgs/head.png'),
                    name: '草原的猪',
                    level: '中级',
                    money: '2958.18U'
                },
                {
                    id: 5,
                    url: require('../../../../public/imgs/head.png'),
                    name: '草原的牛',
                    level: '高级',
                    money: '4534.18U'
                },
                {
                    id: 6,
                    url: require('../../../../public/imgs/head.png'),
                    name: '牧场的牛',
                    level: '初级',
                    money: '212.18U'
                },
                {
                    id: 7,
                    url: require('../../../../public/imgs/head.png'),
                    name: '风口的猪牛',
                    level: '初级',
                    money: '253548.18U'
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
	.person-msg {
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
	.person-msg-header {
		width: 100%;
		height: 3.52rem;
		padding-top: $navPaddingTop;
		background-color: #0023d3;
		.sum {
			text-align: center;
			color: #fff;
			font-size: 0.8rem;
			span {
				font-size: 0.6rem;
				vertical-align: 2px;
			}
		}
	}
	.person-msg-container {
		.van-list {
			padding: 0 0.64rem;
			.item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 2.4rem;
				border-bottom: 1px solid #eee;
				.user {
					display: flex;
					align-items: center;
					justify-content: flex-start;
					width: 33.33%;
					/deep/.van-image__img {
						width: 1.44rem;
						height: 1.44rem;
						border-radius: 50%;
					}
					.name {
						padding-left: 0.2rem;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
				.level {
					width: 33.33%;
					text-align: center;
				}
				.money {
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
	.person-msg-container .van-nav-bar__title, .van-nav-bar__text {
		color: #333;
		font-size: 0.68rem;
	}
</style>
