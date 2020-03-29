<template>
	<div class="hocBase">
		<base-hoc :test=100 @baseClick="baseClick" @hocFnEmit="hocFnEmit" ref="base-hoc">
            <h2 slot="slot1">我是具名插槽slot1</h2>
            <p>我是默认插槽1</p>
            <p>我是默认插槽2</p>
        </base-hoc>
        <button @click="clickHocFn">触发高阶组件的方法</button>
	</div>
</template>

<script>
import Base from './Base';
import hoc from './hoc';
const BaseHoc = hoc(Base);
export default {
    data() {
        return {
        };
    },
    components: {
        BaseHoc
    },
    methods: {
        baseClick(val) {
            console.log(val);
        },
        hocFnEmit(val) {
            console.log(val);
        },
        clickHocFn() {
            this.$refs['base-hoc'].hocFn();
        }
    }
};
</script>

<style scoped lang="scss">

</style>
