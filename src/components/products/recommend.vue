<template>
  <div class="m-product-recommend">
    <el-row class="label">
      <span>猜你喜欢</span>
    </el-row>
    <el-row>
      <div class="recommend-card-wrapper" v-for="item in recommendList" :key="item.itemId">
        <div class="img-box">
          <img :src="item.imgUrl" class="image" />
        </div>
        <div class="info-box">
          <el-row class="title">{{item.title}}</el-row>
          <el-row class="score-line">
            <el-rate v-model="item.score" disabled></el-rate>
            <div class="comment-number">{{item.commentNum}}个评价</div>
          </el-row>
          <el-row class="desc">{{item.areaName}}</el-row>
          <el-row class="price-box">
            <span class="yuan">￥</span>
            <span class="price-number numfont">{{item.lowPrice}}</span>
            <span class="price-desc">起</span>
          </el-row>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
import api from '@/api/index.js';
export default {
  data() {
    return {
      recommendList: []
    };
  },
  created () {
    api.getRecommendList().then(res => {
      this.recommendList = res.data.data
    })
  }
};
</script>

<style>
</style>
