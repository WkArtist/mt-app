<template>
  <dl class="s-item">
    <dt>
      <img :src="meta.image" alt="image" />
    </dt>
    <dd>
      <h3>
        <router-link :to="{name: 'productDeatil'}">{{meta.title}}</router-link>
      </h3>
      <p>
        <el-rate v-model="meta.score" disabled></el-rate>
        <span v-if="meta.score > 4.5">很好</span>
        <span v-else-if="meta.score > 4">好</span>
        <span v-else-if="meta.score > 3.5">不错</span>
        <span v-else-if="meta.score > 3">一般</span>
        <span v-else>很差</span>
        <span>{{meta.score}}分</span>
        <span class="s-item-comment-total">{{meta.commentNum}}人评论</span>
      </p>
      <p>
        <span class="s-item-tab">
          <span v-for="(v, i) in meta.tab" :key="v">{{v + (i < meta.tab.length - 1 ? '|' : '')}}</span>
        </span>
        <span class="s-item-addr">{{meta.address}}</span>
        <span>
          <a href="#">
            <i class="el-icon-location"></i>
            查看地图
          </a>
        </span>
      </p>
      <p>
        <span class="s-item-price">人均￥{{meta.avgPrice}}</span>
      </p>
      <ul class="deal-items">
        <li class="items" v-for="item in meta.dealItems.slice(0,2)" :key="item.title">
          <p class="deal-title">{{item.title}}</p>
          <p>
            <span class="deal-price">￥{{item.price}}</span>
            <span class="deal-old-price">门市价￥{{item.counter_price}}</span>
            <span class="deal-sales">已售{{item.saleNum}}</span>
          </p>
        </li>
      </ul>
    </dd>
  </dl>
</template>

<script>
export default {
  props: ["meta"]
};
</script>

<style>
</style>
