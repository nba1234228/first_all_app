<template>
	<div class="banner">
		<van-swipe :autoplay="3000" indicator-color="#0023d3" v-if="imgList.length > 0">
			<van-swipe-item v-for="(item,index) in imgList" :key="index">
				<img :src="item.imageUrl" />
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
import httpRequest from '#/js/httpRequest.js';
export default {
    data() {
        return {
            imgList: [
                {
                    imageUrl: require('../../../public/imgs/banner1.png')
                },
                {
                    imageUrl: require('../../../public/imgs/banner1.png')
                },
                {
                    imageUrl: require('../../../public/imgs/banner1.png')
                }
            ]
        };
    },
    mounted() {
        this.getBannerImageUrl();
    },
    methods: {
        getBannerImageUrl() {
            httpRequest.getBannerImage().then((res) => {
                console.log(res);
                // if(res.data.success === 'true'){
                // 	this.imgList = res.data.result.list;
                // } else {
                // 	this.imgList = [];
                // }
            })
                .catch((error) => {
                    console.log('error', error);
                });
        }
    }
};
</script>

<style scoped lang="scss">
	.banner {
		padding: 0.52rem 0;
		background-color: #fff;
		width: 100%;
		height: 8.2rem;
		img {
			width: 100%;
			height: 8.2rem;
		}
	}
	.banner /deep/ .van-swipe__indicator {
		width: 0.48rem;
		height: 0.48rem;
		background-color: #fff;
	}
</style>
