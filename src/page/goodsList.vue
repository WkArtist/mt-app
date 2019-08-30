<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row>
                    <categroy />
                </el-row>
                <el-row>
                    <list />
                </el-row>
            </el-col>
            <el-col :span="5">
                <el-row>
                    <m-map />
                </el-row>
                <el-row>
                    <recommend />
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import crumbs from "@/components/products/crumbs.vue";
import categroy from "@/components/products/categroy.vue";
import list from "@/components/products/list.vue";
import MMap from "@/components/products/map.vue";
import recommend from "@/components/products/recommend.vue";
export default {
    components: {
        crumbs,
        categroy,
        list,
        MMap,
        recommend
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/products/index.scss';
</style>
