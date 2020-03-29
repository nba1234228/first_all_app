<template>
	<div class="setting">
		<div class="setting-header">
			<van-nav-bar left-arrow title="设置" @click-left="retMine" :border="false"/>
		</div>
		<div class="setting-container">
			<van-cell title="版本号：" value="lucky1.2"></van-cell>
			<van-cell title="退出登录" @click="logout"></van-cell>
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
        retMine() {
            this.$router.push({name: '/home/Mine'});
        },
        logout() {
            this.$store.commit('home/logout');
            this.$router.push({name: '/home/Home'});
        }
    }
};
</script>

<style scoped lang="scss">
	.setting {
		position: relative;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 99;
	}
	.setting-header {
		width: 100%;
		height: 1.84rem;
		padding-top: $navPaddingTop;
		background-color: #0023d3;
	}
	.setting-container {

	}
	.van-cell {
		align-items: center;
		padding: 0.8rem 0.64rem;
	}
	.van-cell::after {
		position: absolute;
		box-sizing: border-box;
		content: ' ';
		pointer-events: none;
		right: 0;
		bottom: 0;
		left: 16px;
		border-bottom: 1px solid #ebedf0;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}
	.van-cell__title {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 0.6rem;
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
