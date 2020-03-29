<template>
	<div class="about-us">
		<div class="about-us-header">
			<van-nav-bar left-arrow title="关于我们" @click-left="retMine" :border="false"/>
		</div>
		<div class="about-us-container">
			<p class="title">法法国际有限公司</p>
			<p class="duan1">京东方科技集团股份有限公司（BOE）创立于1993年4月，是一家为信息交互和人类健康提供智慧端口产品和专业服务的物联网公司</p>
			<p class="duan2">[1] 京东方的核心事业包括端口器件、智慧物联、智慧医工</p>
			<p class="duan3">[2] 端口器件产品广泛应用于手机、平板电脑、笔记本电脑、显示器、电视、车载、可穿戴设备等领域；智慧物联为新零售、交通、金融、教育、艺术、医疗等领域，搭建物联网平台，提供“硬件产品+软件平台+场景应用”整体解决方案；在智慧医工领域，京东方通过移动健康管理平台和数字化医院为用户提供了全面的健康服务</p>
			<p class="duan4">[3] 2018年，京东方新增专利申请量9585件，其中发明专利超90%，累计可使用专利超7万件。</p>
			<p class="service">客服电话： 0755-2681256</p>
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
            this.$router.push({name: '/home/Mine'});
        }
    }
};
</script>

<style scoped lang="scss">
	.about-us {
		position: relative;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 99;
		.about-us-container {
			font-size: 0.56rem;
			padding: 0 0.52rem;
			letter-spacing: 0.1rem;
			.title {
				line-height: 1.8rem;
				text-align: center;
				font-size: 0.64rem;
				font-weight: bold;
			}
			.duan1 {
				text-indent: 2em;
			}
			.duan2, .duan4 {
				margin: 0.88rem 0;
			}
			.service {
				line-height: 1.8rem;
				text-align: center;
			}
		}
	}
	.about-us-header {
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
