<!-- 说明 和彩云demo首页-->
<!-- @author 作者 -->

<template>
  <div :class="[$style.box]">
    <!-- 在 template 中使用'@'别名 -->
    <img :class="$style.header" src="@/assets/img/home_header.png" />
    <van-row :class="$style['title-row']">
      <van-col span="8" :class="$style.comment">常用服务</van-col>
      <van-col span="4" offset="12" :class="$style.more">更多></van-col>
    </van-row>
    <div :class="$style['func-box']">
      <img
        :class="$style['func-item']"
        v-for="(item,index) in funcList"
        :key="index"
        :src="require('@/assets/img/'+item+'.png')"
      />
    </div>
    <van-swipe :autoplay="3000" :class="$style['swiper-box']">
      <van-swipe-item v-for="(image, index) in imagesList" :key="index">
        <img :class="$style['swiper-item']"
         v-lazy="require('@/assets/img/'+image+'.png')" 
        />
      </van-swipe-item>
    </van-swipe>

    <van-swipe :autoplay="3000" 
      :class="$style['swiper-newsbox']" 
      vertical 
      :show-indicators="false" 
      :touchable="false">
      <van-swipe-item v-for="(news, index) in newsList" :key="index">
        <img :class="$style['swiper-news']"
         v-lazy="require('@/assets/img/'+news+'.png')" 
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      newsDetails: null,
      funcList: ['func_1', 'func_2', 'func_3', 'func_4', 'func_5', 'func_6'],
      imagesList: ['swiper_1', 'swiper_2', 'swiper_1', 'swiper_2',],
      newsList: ['swiper_news_1','swiper_news_2'],
    }
  },
  created() {},
}
</script>

<style lang="less" module>
.box {
  margin: 10px;
  // padding: 1em;
  // border: 2px dashed #ccc;
}
.res {
  b {
    display: block;
    margin: 1em 0 0.25em;
    &:first-child {
      margin-top: 0;
    }
  }
}
.header {
  display: block;
  width: 100%;
  margin: 20px auto;
  // height: 2em;
}
.title-row {
  margin-bottom: 6px;
}
.comment {
  padding-left: 20px;
  font-size: 20px;
  font-weight: bold;
}
.more {
  // padding-left: 6px;
  line-height: 24px;
  font-size: 16px;
  color: #999;
}
.func-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}
.func-item {
  margin-bottom: 4px;
  width: 110px;
  // height: 110px;
  overflow: hidden;
  border-radius: 10px;
}
.swiper-item {
  margin-top: 20px;
  width: 100%;
  border-radius: 6px;
}
.swiper-box {
  margin-top: 10px;
  height: 104px;
}
.swiper-newsbox {
  margin-top: 10px;
  height: 40px;
}
.swiper-news {
  width: 100%;

  border-radius: 6px;
}
.helloWorld {
  background: url('~@/assets/logo.png') no-repeat right center; // 在 style 中使用'@'别名
  background-size: auto 2em;
}
.privateComponent {
  margin-top: 3em;
}
</style>
