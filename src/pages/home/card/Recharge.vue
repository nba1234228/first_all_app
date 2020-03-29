<template>
	<div class="recharge">
		<div class="recharge-header">
			<van-nav-bar left-arrow title="充币" @click-left="retMine" :border="false"/>
		</div>
		<div class="recharge-container">
			<vue-qr :logoSrc="imageUrl" :text="codeValue" :margin="0" colorDark="#333" colorLight="#fff" :logoScale="0.3" :size="185"></vue-qr>
			<p class="code">0x254691906df3a950bb50b2ee4313afeb90f63475</p>
			<button class="sao">复制地址</button>
			<button class="sao save">保存到相册</button>
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
            this.$router.push({name: '/home/Card'});
        }
    }
};
</script>

<style scoped lang="scss">
	.recharge {
		position: relative;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 99;
		.recharge-container {
			position: relative;
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;
			margin-top: 2.64rem;
			img {
				padding: 0.32rem;
				background-color: #fff;
				box-shadow: 0 0 0.6rem #ccc;
			}
			.code {
				width: 70%;
				margin-top: 1.2rem;
				line-height: 0.8rem;
				color: #333;
				word-wrap: break-word;
				word-break: normal;
			}
			.sao {
				margin-top: 0.88rem;
				width: 70%;
				height: 1.72rem;
				background-color: #0023d3;
				color: #fff;
				border: 1px solid #0023d3;
				border-radius: 0.2rem;
			}
			.sao.save {
				background-color: #fff;
				color: #0023d3;
				border: 1px solid #0023d3;
			}
		}
	}
	.recharge-header {
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
