<template>
	<div class="base">
		<p @click="baseFn">
            props: {{test}}
        </p>
        <slot name="slot1"></slot>
        <slot></slot>
	</div>
</template>

<script>
const conMixin = {
    mounted() {
        console.log('我是基础组件');
    }
};
export default {
    data() {
        return {
        };
    },
    props: {
        test: Number
    },
    mixins: [conMixin],
    methods: {
        baseFn() {
            this.$emit('baseClick', '我是基础组件方法');
        }
    }
};
</script>

<style scoped lang="scss">

</style>
