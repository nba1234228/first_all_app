<template>
	<div class="invest">
		<div class="invest-header">
			<van-nav-bar left-arrow title="投资入金" @click-left="retHome" :border="false"/>
		</div>
		<div class="invest-container">
            <div class="container-card">
<!--                <img src="../../../../public/imgs/home/invest_bg.png">-->
                <div class="container-card-left">
                    <h3>150</h3>
                    <p>VT</p>
                </div>
                <ul class="container-card-right">
                    <li><label>3倍杠杆收益： </label><span>4500VT等值DV</span></li>
                    <li><label>静态收益比例： </label><span>0.8%</span></li>
                    <li><label>每天静态收益： </label><span>1.20VT等值DV</span></li>
                    <li><label>直推加速奖励： </label><span>8%</span></li>
                </ul>
            </div>
            <div class="container-conversion">
                <ul>
                    <li><label>充值</label><span>150VT</span></li>
                    <li><label>得</label><span>150DV</span></li>
                </ul>
            </div>
            <div class="container-rule">
                <p>投资规则</p>
                <ul>
                    <li><span>1. 分红收益：100USDT 起投，投资无上限，系统自动放
大 2 倍 USDT杠杆并换算成等值NBTC加入总资产，每天
按4‰的静态速度等比释放为锁仓资产;</span></li>
                    <li><span>2. 释放锁仓：在 DV 交易所币币交易购买等额（分红收益
中释放出来的锁仓资产余额）的NBTC，可促使锁仓资产
释放为可用资产并可交易变现；</span></li>
                    <li><span>3. 邀请返佣：邀请好友入金，坐享超级返佣奖励；</span></li>
                </ul>
            </div>
		</div>
        <div class="container-btn" @click="retHome">
            <P>立即投资</P>
        </div>
	</div>
</template>

<script>
// import httpRequest from '#/js/httpRequest';
export default {
    data() {
        return {
            name: ''
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
	.invest {
		position: relative;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		background: #fff;
		z-index: 99;
        .invest-header {
            width: 100%;
            height: 1.84rem;
            padding-top: $navPaddingTop;
            background-color: #0023d3;
        }
        .invest-container {
            padding: 0 0.52rem;
            .container-card {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin: 0.6rem 0;
                width: 13.96rem;
                height: 5rem;
                background: url("../../../../public/imgs/home/invest_bg.png") no-repeat center center;
                background-size: 100% 100%;
                .container-card-left {
                    width: 4.76rem;
                    color: #18b2f7;
                    h3 {
                        text-align: center;
                        font-size: 1.04rem;
                        margin-top: 0.6rem;
                    }
                    p {
                        text-align: center;
                        font-size: 0.6rem;
                    }
                }
                .container-card-right {
                    font-size: 0.52rem;
                    li {
                        label {
                            color: #31b9f8;
                        }
                        span {
                            color: #ff294c;
                            font-weight: bold;
                        }
                    }
                }
            }
            .container-conversion {
                ul {
                    background-color: #fafafa;
                    border: 1px solid #ccc;
                    border-radius: 0.2rem;
                    height: 1.6rem;
                    padding: 0 0.4rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    li {
                        label {
                            color: #999;
                        }
                    }
                }
                padding-bottom: 15px;
                border-bottom: 1px solid #eee;
            }
            .container-rule {
                font-size: 0.6rem;
                p {
                    line-height: 1.72rem;
                    font-weight: bold;
                }
                ul {
                    li {
                        margin-bottom: 0.84rem;
                    }
                }
            }
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
