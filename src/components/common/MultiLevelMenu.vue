<template>
    <div class="multiLevelMenu">
        <template v-for="(menu, index) in menus">
            <el-submenu v-if="menu['children'] && menu['children'].length > 0" :key="`sub-menu-${index}`">
                <template slot="title">
                    <i :class="menu['icon']"></i>
                    <span>{{menu['label']}}</span>
                </template>
                <multi-level-menu :menus="menu['children']"></multi-level-menu>
            </el-submenu>
            <el-menu-item v-if="!menu['children'] && menu['children'].length === 0" :key="`sub-menu-item-${index}`">
                <template slot="title">
                    <i :class="menu['icon']"></i>
                    <span>{{menu['label']}}</span>
                </template>
            </el-menu-item>
        </template>
    </div>
</template>

<script>
export default {
    name: 'multiLevelMenu',
    props: ['menus']
};
</script>

<style scoped>

</style>
