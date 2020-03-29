<template>
	<div class="share">
		<img :src="shareBG" class="shareBG">
		<div class="share-header">
			<van-nav-bar left-arrow title="我要分享" @click-left="retMine" :border="false"/>
		</div>
		<div class="share-container">
			<vue-qr :logoSrc="imageUrl" :text="codeValue" :margin="0" colorDark="#333" colorLight="#fff" :logoScale="0.2" :size="160"></vue-qr>
			<p class="code">邀请码： D20V598</p>
			<button class="sao">扫码复制邀请码</button>
			<img :src="shareIcon" class="share-icon">
		</div>
	</div>
</template>

<script>
// import QRCode from 'qrcodejs2';
import vueQr from 'vue-qr';
export default {
    data() {
        return {
            shareBG: require('../../../../public/imgs/mine/share_bg.png'),
            imageUrl: require('../../../../public/imgs/logo.png'),
            shareIcon: require('../../../../public/imgs/mine/download.png'),
            codeValue: '法哥'
        };
    },
    mounted() {

    },
    components: {
        vueQr
    },
    methods: {
        retMine() {
            this.$router.push({name: '/home/Mine'});
        }
    }
};
</script>

<style scoped lang="scss">
	.share {
		position: relative;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 99;
		.shareBG {
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
		}
		.share-container {
			position: relative;
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;
			margin-top: 4.4rem;
			img {
				padding: 0.32rem;
				background-color: #fff;
			}
			.code {
				line-height: 1.72rem;
				color: #fff;
			}
			.sao {
				margin-top: 0.88rem;
				width: 8.2rem;
				height: 1.72rem;
				background-color: #0013a6;
				color: #fff;
				border: 1px solid #00d8ff;
				border-radius: 0.86rem;
				box-shadow: 0 0 0.6rem #00d8ff;
			}
			.share-icon {
				background-color: transparent;
				position: fixed;
				width: 1.88rem;
				height: 1.88rem;
				right: 1.2rem;
				bottom: 1.2rem;
				padding: 0;
			}
		}
	}
	.share-header {
		position: relative;
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
