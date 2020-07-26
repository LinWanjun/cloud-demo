<template>
  <div>
    <!-- <div :class="$style.header">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link
        v-if="$env.VUE_APP_ENV === 'dev' || $env.VUE_APP_ENV === 'stage'"
        to="/component-examples#SvgIcon"
        target="_blank"
        >开发文档</router-link
      >
    </div>-->

    <van-overlay :show="show && stepNum <= 3" @click="show = false " :z-index="100001">
      <div :class="$style.wrapper" @click.stop v-show="stepNum === 1">
        <!-- <div :class="$style.block"></div> -->
        <div :class="$style.welcome">欢迎使用和彩云网盘</div>
        <img :class="$style.dialog" src="@/assets/img/tips_dialog.png" alt />
        <van-button
          :class="$style['button-use']"
          :block="true"
          color="linear-gradient(to right, #4bb0ff, #6149f6)"
          @click="stepNum = 2"
        >进入使用教程</van-button>
        <span :class="$style['button-nonuse']" @click="show = false">我是老手，回家看看</span>
      </div>
      <div :class="$style.wrapper" @click.stop v-show="stepNum !== 1 && stepNum <=  3">
        <img v-show="stepNum === 2" :class="$style['tips-card-1']" src="@/assets/img/tips_card_1.png" alt />
        <img v-show="stepNum === 3" :class="$style['tips-card-2']" src="@/assets/img/tips_card_2.png" alt />
        <img
          :class="$style['tips-card-next']"
          src="@/assets/img/tips_next_btn.png"
          alt
          v-show="stepNum !== 1 && stepNum <= 3"
          @click="++stepNum"
        />
      </div>
    </van-overlay>

    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item>
        <span>首页</span>
        <template>
          <!-- <img slot="icon" slot-scope="props" :src="props.active ? require('@/assets/img/tabbar_1.png'): require('@/assets/img/tabbar_1.png')"/> -->
          <div slot="icon" class="iconfont icon-yun"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>个人云</span>
        <template>
          <div slot="icon" class="iconfont icon-wenjian"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span>家庭云</span>
        <template>
          <div slot="icon" class="iconfont icon-jiatingguanxi"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item badge="20">
        <span>发现</span>
        <template>
          <div slot="icon" class="iconfont icon-faxian"></div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item badge="20">
        <span>我的</span>
        <template>
          <div slot="icon" class="iconfont icon-wode"></div>
        </template>
      </van-tabbar-item>
      <!-- <van-tabbar-item class="iconfont icon-wenjian" dot>个人云</van-tabbar-item> -->
      <!-- <van-tabbar-item class="iconfont icon-jiatingguanxi">家庭云</van-tabbar-item> -->
      <!-- <van-tabbar-item class="iconfont" icon-prefix="icon" name="yun" badge="20">发现</van-tabbar-item> -->
      <!-- <van-tabbar-item class="iconfont icon-wode" dot>我的</van-tabbar-item> -->
    </van-tabbar>
  </div>
</template>

<script>
import '@/assets/iconfont/iconfont.css'
export default {
  name: 'App',
  data() {
    return {
      show: true,
      stepNum: 1,
      active: 0,
    }
  },
  created() {},
}
</script>

<style lang="less" module>
.header {
  margin: 1.5em;
  text-align: center;
  a {
    margin: 0 0.3em;
    font-weight: bold;
    color: inherit;
    &:global(.router-link-exact-active) {
      color: #42b983;
    }
  }
}
.wrapper {
  position: relative;
  // display: flex;
  // justify-content: center;
  // align-items: flex-start;
  // flex-wrap: wrap;
  // text-align: center;
  height: 100%;
}
.welcome {
  margin: 120px 0 10px;
  // height: 50px;
  font-size: 22px;
  color: #fffeee;
  text-align: center;
}
.dialog {
  margin: 0 auto;
  display: block;
  width: 260px;
  border-radius: 10px;
}
.tips-card-1 {
  position: absolute;
  right: 14%;
  top: 15px;
  width: 220px;
}
.tips-card-2 {
  position: absolute;
  right: 50%;
  bottom: 0;
  transform: translateX(50%);
  width: 320px;
}
.tips-card-next {
  position: absolute;
  right: 50%;
  top: 60%;
  transform: translateX(50%);
  width: 100px;
}
.button {
  &-use {
    margin: 30px auto 10px;
    width: 200px;
    height: 40px;
    border-radius: 10px;
  }
  &-nonuse {
    display: block;
    text-align: center;
    font-size: 14px;
    color: #eee;
    text-decoration-line: underline;
  }
}
</style>
