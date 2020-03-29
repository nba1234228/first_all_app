<template>
	<div class="person-msg">
		<div class="person-msg-header">
			<van-nav-bar left-arrow title="个人信息" @click-left="retMine" :border="false"/>
		</div>
		<div class="person-msg-container">
			<van-cell title="头像：" class="avatar">
				<van-image slot="right-icon" :src="head" />
			</van-cell>
			<van-cell class="name">
				<template slot="title">
					<span>昵称：</span>
					<span>{{name}}</span>
				</template>
				<van-image slot="right-icon" :src="pen" />
			</van-cell>
			<van-cell class="phone">
				<template slot="title">
					<span>手机号：</span>
					<span>{{telephone}}</span>
				</template>
				<button @click="toUpdateTel">更换</button>
			</van-cell>
		</div>
	</div>
</template>

<script>
import httpRequest from '#/js/httpRequest';
export default {
    data() {
        return {
            name: '',
            telephone: '',
            head: require('../../../../public/imgs/head.png'),
            pen: require('../../../../public/imgs/mine/pen.png')
        };
    },
    mounted() {
        this.telephone = localStorage.getItem('userPhone');
        httpRequest.getUser(this.telephone).then((res) => {
            console.log(res);
            if(res.success === 'true') {
                this.name = res.result.name;
            } else {
                this.$notify({type: 'warning', message: '获取个人信息失败！'});
            }
        }).catch((error) => {
            console.log('error', error);
            this.$notify({type: 'warning', message: '获取个人信息失败！'});
        });
    },
    methods: {
        retMine() {
            this.$router.push({name: '/home/Mine'});
        },
        toUpdateTel() {
            this.$router.push({name: '/home/mine/UpdateTel'});
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
		height: 100%;
		background: #fff;
		z-index: 99;
	}
	.person-msg-header {
		width: 100%;
		height: 1.84rem;
		padding-top: $navPaddingTop;
		background-color: #0023d3;
	}
	.avatar {
		/deep/.van-image__img {
			width: 2.36rem;
			height: 2.36rem;
			border-radius: 50%;
		}
	}
	.name {
		/deep/.van-image__img {
			width: 0.72rem;
			height: 0.72rem;
			margin-right: 0.72rem;
		}
	}
	.phone {
		button {
			background-color: transparent;
			color: #0023d3;
			border: 1px solid #0023d3;
			border-radius: 0.52rem;
		}
	}
	.van-cell {
		align-items: center;
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
