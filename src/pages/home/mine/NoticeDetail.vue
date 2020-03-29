<template>
	<div class="notice-detail">
		<div class="notice-detail-header">
			<van-nav-bar left-arrow title="通知详情" @click-left="retMine" :border="false"/>
		</div>
		<div class="notice-detail-container">
			<p class="title">交易所模式调整</p>
			<p class="content">中秋节将至，根据国家规定，并结合我公司的情况决定，于9月15日—16日放假，共2天, 9月17日正式恢复上班。放假期间，暂停一切业务。包括400客服电话、素材号更新、售后服务等, 为您带来不便，还请谅解。在此,  梵大集团及所有员工祝各位代理商及消费者，合家团圆, 中秋快乐2017年中秋节放假通知!</p>
			<p class="company">深圳法法科技有限公司</p>
			<p class="service">2019/09/17</p>
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
        retMine() {
            this.$router.push({name: '/home/mine/Notice'});
        }
    }
};
</script>

<style scoped lang="scss">
	.notice-detail {
		position: relative;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 99;
		.notice-detail-container {
			font-size: 0.56rem;
			padding: 0 0.52rem;
			letter-spacing: 0.1rem;
			.title {
				line-height: 1.8rem;
				text-align: center;
				font-size: 0.64rem;
				font-weight: bold;
			}
			.content {
				text-indent: 2em;
				margin-bottom: 1rem;
			}
			.company, .service {
				text-align: right;
				line-height: 1.2rem;
			}
		}
	}
	.notice-detail-header {
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
</style>
