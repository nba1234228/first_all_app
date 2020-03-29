<template>
  <div id="app">
		<router-view />
		<bottom-page class="bottom-page"></bottom-page>
  </div>
</template>
<script>
import BottomPage from './components/common/Bottom';
export default {
    data() {
        return {
        };
    },
    components: {
        BottomPage
    }
};
</script>
<style lang="scss" scoped>
	#app{
		background-color: #fff;
		height: 100vh;
		position: relative;
        font-family: "PingFang SC";
		.bottom-page{
			position: fixed;
			bottom: 0;
			left: 0;
		}
	}
</style>
