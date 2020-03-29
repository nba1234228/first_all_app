<template>
	<div class="bottom">
		<ul>
			<router-link :to="item.path" tag="li" exact class="bottom-btn" v-for="(item,index) in menuList" :key="index">
				<i :class="item.icon"></i>
				<span>{{item.text}}</span>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
    data() {
        return {
            menuList: [
                {
                    icon: 'iconfont iconshouye1',
                    text: '首页',
                    path: '/'
                },
                {
                    icon: 'iconfont iconshouyi',
                    text: '收益',
                    path: '/home/Earning'
                },
                {
                    icon: 'iconfont iconqianbao',
                    text: '钱包',
                    path: '/home/Card'
                },
                {
                    icon: 'iconfont iconwodedangxuan',
                    text: '我的',
                    path: '/home/Mine'
                }
            ]
        };
    },
    methods: {
    }
};
</script>

<style scoped lang="scss">
	.bottom {
		width: 100%;
		height: 2.5rem;
		background-color: #fafafa;
		color: #666;
		ul{
			height: 100%;
			display: flex;
			justify-content: space-between;
			flex: 1 1 auto;
			li{
				height: 100%;
				width: 33.3333%;
				text-align: center;
				display: flex;
				flex-direction: column;
				align-items: center;
				i{
					font-size: 1.04rem;
					margin-top: 0.2rem;
				}
				span{
					padding-top: 0.16rem;
					font-size: 0.48rem;
				}
			}
		}
	}
	.router-link-active{
		color: #0023d3;
	}
</style>
