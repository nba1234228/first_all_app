<template>
	<div class="notice">
		<div class="notice-header">
			<van-nav-bar left-arrow title="通知公告" @click-left="retMine" :border="false"/>
		</div>
		<div class="notice-container">
			<div class="notice-item" v-for="(item,index) in notices" :key="index">
				<p class="time">{{item.time}}</p>
				<van-swipe-cell :on-close="onClose" :name="index">
					<van-cell :border="false" class="notice-text">
						<template slot="title">
							<p class="title">{{item.title}}</p>
							<p class="notice-desc">{{item.text}}</p>
						</template>
						<van-cell class="look" title="查看详情" is-link @click="toDetail" />
					</van-cell>
					<template slot="right">
						<van-button square type="danger" text="删除" />
					</template>
				</van-swipe-cell>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            notices: [
                {
                    id: 1,
                    time: '2019/9/17 14:20',
                    title: '交易所模式调整',
                    text: '亲爱的用户，你们好！关于本次国庆期间，为了方便广大用户进行交易，我们会安排工作人员值'
                },
                {
                    id: 2,
                    time: '2019/9/20 08:35',
                    title: '端午节放假通知',
                    text: '亲爱的用户，你们好！关于本次国庆期间，为了方便广大用户进行交易，我们会安排工作人员值'
                },
                {
                    id: 3,
                    time: '2019/10/07 11:16',
                    title: '中秋节放假通知',
                    text: '亲爱的用户，你们好！关于本次国庆期间，为了方便广大用户进行交易，我们会安排工作人员值'
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
        onClose(clickPosition, instance, detail) {
            switch (clickPosition) {
                case 'left':
                case 'cell':
                case 'outside':
                    instance.close();
                    break;
                case 'right':
                    this.notices.splice(detail.name, 1);
                    instance.close();
                    break;
            }
        },
        toDetail() {
            this.$router.push({name: '/home/mine/NoticeDetail'});
        }
    }
};
</script>

<style scoped lang="scss">
	.notice {
		position: relative;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 99;
		.notice-container {
			font-size: 0.56rem;
			padding: 0 0.52rem;
			letter-spacing: 0.1rem;
			.time {
				text-align: center;
				line-height: 1.6rem;
			}
			.van-swipe-cell {
				border-radius: 0.2rem;
				box-shadow: 0 0 0.2rem #ccc;
			}
			.notice-text {
				display: flex;
				flex-direction: column;
				.title {
					font-weight: bold;
					font-size: 0.6rem;
					line-height: 1rem;
				}
				.van-cell__title {
					padding-bottom: 10px;
					border-bottom: 1px solid #eee;
				}
				.notice-desc {
					overflow: hidden;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					line-height: 0.64rem;
					color: #666;
				}
				.look {
					padding: 0.3rem 0;
					color: #aaa;
					.van-cell__title {
						padding-bottom: 0;
						border-bottom: 0;
					}
				}
			}
			.van-button {
				height: 100%;
			}
		}
	}
	.notice-header {
		width: 100%;
		height: 1.84rem;
		padding-top: $navPaddingTop;
		background-color: #0023d3;
	}
	.van-nav-bar {
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
	.van-cell__title {
		text-align: left;
	}
</style>
