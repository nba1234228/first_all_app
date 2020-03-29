<template>
	<div class="mine">
		<div class="mine-top">
			<div class="left">
				<img :src="headPng" />
				<div class="left-text">
					<p class="name">{{name}}</p>
					<p class="level">高级节点</p>
				</div>
			</div>
			<img :src="settingPng" @click="toSetting" />
		</div>
		<div class="mine-bottom">
			<van-cell is-link v-for="(item,index) in list" :key="index" @click="toPages(item.routerName)">
				<template slot="title">
					<img :src="item.url" />
					<span>{{item.text}}</span>
				</template>
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
            headPng: require('../../../public/imgs/head.png'),
            settingPng: require('../../../public/imgs/mine/setting.png'),
            list: [
                {
                    url: require('../../../public/imgs/mine/shuocang.png'),
                    routerName: '/home/mine/Warehouse',
                    text: '我的锁仓'
                }, {
                    url: require('../../../public/imgs/mine/notice.png'),
                    routerName: '/home/mine/Notice',
                    text: '通知公告'
                }, {
                    url: require('../../../public/imgs/mine/person_msg.png'),
                    routerName: '/home/mine/PersonMsg',
                    text: '个人信息'
                }, {
                    url: require('../../../public/imgs/mine/mine_team.png'),
                    routerName: '/home/mine/Team',
                    text: '我的团队'
                }, {
                    url: require('../../../public/imgs/mine/share.png'),
                    routerName: '/home/mine/Share',
                    text: '我要分享'
                }, {
                    url: require('../../../public/imgs/mine/update_login_pwd.png'),
                    routerName: '/home/mine/UpdateLoginPsd',
                    text: '修改登录密码'
                }, {
                    url: require('../../../public/imgs/mine/update_pay_pwd.png'),
                    routerName: '/home/mine/UpdatePayPsd',
                    text: '修改支付密码'
                }, {
                    url: require('../../../public/imgs/mine/about_us.png'),
                    routerName: '/home/mine/AboutUs',
                    text: '关于我们'
                }
            ]
        };
    },
    mounted() {
        if(sessionStorage.getItem('token')) {
            this.getUser();
        }
    },
    methods: {
        getUser() {
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
        toPages(name) {
            this.$router.push({name: name, params: {name: this.name, telephone: this.telephone}});
        },
        toSetting() {
            this.$router.push({name: '/home/mine/Setting'});
        }
    }
};
</script>

<style lang="scss" scoped>
	.mine {
		width: 100%;
		.mine-top {
			height: 4.8rem;
			background: linear-gradient(to right, #771dfb, #0023d3);
			text-align: center;
			padding: 0 0.56rem;
			padding-top: $navPaddingTop;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				img {
					width: 2rem;
					height: 2rem;
					border-radius: 50%;
				}
				.left-text {
					margin-left: 0.32rem;
					text-align: left;
					.name {
						font-size: 0.64rem;
						color: #fff;
					}
					.level {
						font-size: 0.52rem;
						color: #eee;
					}
				}
			}
			img {
				width: 0.72rem;
				height: 0.72rem;
			}
		}
		.mine-bottom {
			img {
				width: 0.86rem;
				height: 0.82rem;
			}
			span {
				margin-left: 0.32rem;
			}
		}
	}
	.van-cell {
		padding: 0.56rem 0.64rem;
	}
	.van-cell:not(:last-child)::after {
		border-bottom: none;
	}
</style>
