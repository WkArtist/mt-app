<template>
    <div class="content">
        <el-row>
            <crumbs />
        卡片</el-row>
        <el-row>
            <el-col :span="19">
                <el-row>商家团购及优惠</el-row>
                <el-row>推荐菜</el-row>
                <el-row>评论</el-row>
                <el-row>附近商家</el-row>
            </el-col>
            <el-col :span="5">
                <recommend />
            </el-col>
        </el-row>
    </div>
</template>

<script>
import api from '@/api/index.js';
import recommend from "@/components/products/recommend.vue";
import crumbs from "@/components/products/crumbs.vue";
export default {
    components: {
        crumbs,
        recommend
    },
    created () {
        api.getProductDeatil().then(res => {
            console.log(res.data.data);
        })
    }
}
</script>

<style>

</style>
