<template>
  <div class="m-istyle">
    <dl @mouseover="over">
      <dt>{{navList.title}}</dt>
      <dd
        v-for="item in navList.list"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
        :key="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">
                  {{item.price}}
                  <span
                    class="current-price-type"
                    style="font-size: 12px"
                  >/人均</span>
                </span>
              </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js';
export default {
  data() {
    return {
      kind: "all",
      resultsData: {},
      list: [
        {
          image:
            "//p1.meituan.net/poi/0436106d5c1b04cd9b525f06231e86da140545.jpg@368w_208h_1e_1c",
          title: "保利国际影城（绿地缤纷城店）",
          sub_title: "免押金,可停车,有情侣座,儿童票,有WIFI,4D厅,RealD厅",
          price_info: {
            current_price: 19.9
          }
        },
        {
          image: "//p1.meituan.net/deal/201203/31/002.jpg@368w_208h_1e_1c",
          title: "广安门电影院",
          sub_title: "免押金,可停车,儿童票,可刷卡,有WIFI,休息区,杜比全景声厅",
          price_info: {
            current_price: 19.9
          }
        },
        {
          image:
            "//p1.meituan.net/deal/201301/14/105159_7079944.jpg@368w_208h_1e_1c",
          title: "嘉华国际影城（学清路店）",
          sub_title: "免押金,可停车,儿童票,可刷卡,有WIFI,休息区,4D厅",
          price_info: {
            current_price: 19.9
          }
        },
        {
          image:
            "//p1.meituan.net/deal/46d9aae57e2a58019d73a1e7624ce86983140.jpg@368w_208h_1e_1c",
          title: "首都电影院（中华店）",
          sub_title: "免押金,中国巨幕厅,杜比全景声厅,60帧厅",
          price_info: {
            current_price: 19.9
          }
        },
        {
          image:
            "//p0.meituan.net/deal/__31137021__2342842.jpg@368w_208h_1e_1c",
          title: "百老汇影城（国瑞购物中心店）",
          sub_title: "免押金,可停车,儿童票,双机3D厅,RealD厅,巨幕厅,60帧厅",
          price_info: {
            current_price: 34
          }
        },
        {
          image:
            "//p1.meituan.net/deal/__29661209__6853522.jpg@368w_208h_1e_1c",
          title: "中影国际影城（丰台千禧街店）",
          sub_title:
            "免押金,可停车,有情侣座,儿童票,可刷卡,休息区,中国巨幕厅,60帧厅",
          price_info: {
            current_price: 19.9
          }
        }
      ]
    };
  },
  props: ["navList"],
  created () {
    api.getResultProducts().then(res => {
      this.resultsData = res.data.data
    })
  },
  methods: {
    over(e) {
      this.kind = e.target.dataset.type;
      //动态获取数据，ajax请求
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>
