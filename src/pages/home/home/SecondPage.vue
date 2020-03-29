<template>
	<div class="secondPage">
		<div class="secondPage-header">
			<van-nav-bar left-arrow title="二级页面" @click-left="retHome" :border="false"/>
		</div>
		<div class="secondPage-container">
            <p>页面正在开发中...</p>
		</div>
        <div class="container-btn" @click="retHome">
            <P>返回</P>
        </div>
	</div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    mounted() {
    },
    methods: {
        retHome() {
            this.$router.push({name: '/home/Home'});
        }
    }
};
</script>

<style scoped lang="scss">
	.secondPage {
		position: relative;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 99;
        .secondPage-header {
            width: 100%;
            height: 1.84rem;
            padding-top: $navPaddingTop;
            background-color: #0023d3;
        }
        .secondPage-container {
            margin-top: 50%;
            text-align: center;
            font-size: 0.84rem;
            color: #f40;
        }
	}
    .container-btn {
        position: absolute;
        left: 0;
        bottom: 0.6rem;
        height: 1.8rem;
        width: 100%;
        p {
            margin: 0 0.52rem;
            text-align: center;
            line-height: 1.8rem;
            border-radius: 0.2rem;
            color: #fff;
            background-color: #0023d3;
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
