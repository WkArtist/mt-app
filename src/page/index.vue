<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <m-menu />
      </el-col>
      <el-col :span="19">
        <life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :navList="iStyle" />
      </el-col>
      <el-col :span="24">
        <container :navList="iStyle" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MMenu from "@/components/index/menu.vue";
import life from "@/components/index/life.vue";
import container from "@/components/index/container.vue";
export default {
  data() {
    return {
      iStyle: {
        title: "有格调",
        list: [
          {
            text: "全部",
            tab: "all"
          },
          {
            text: "约会聚餐",
            tab: "food"
          },
          {
            text: "丽人SPA",
            tab: "spa"
          },
          {
            text: "电影演出",
            tab: "movie"
          },
          {
            text: "品质出游",
            tab: "travel"
          }
        ]
      }
    };
  },
  components: {
    MMenu,
    life,
    container
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>
