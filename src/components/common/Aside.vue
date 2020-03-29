<template>
    <el-menu>
        <multi-level-menu :menus="menus"></multi-level-menu>
    </el-menu>
</template>

<script>
import MultiLevelMenu from './MultiLevelMenu';
export default {
    name: 'aside',
    data() {
        return {
            menus: []
        };
    },
    components: {
        MultiLevelMenu
    }
};
</script>

<style scoped>

</style>
