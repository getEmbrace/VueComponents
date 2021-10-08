<template>
  <TabBar v-if="getBool">
    <TabBarItem path="/money" :activeColor="active_color">
      <img slot="item-img" src="~assets/img/tabbar/money.png" alt="" />
      <img slot="item-img-active" src="~assets/img/tabbar/money_active.png" alt="" />
      <div slot="item-text">导航1</div>
    </TabBarItem>
    <TabBarItem path="/tag" :activeColor="active_color">
      <img slot="item-img" src="~assets/img/tabbar/tag.png" alt="" />
      <img slot="item-img-active" src="~assets/img/tabbar/tag_active.png" alt="" />
      <div slot="item-text">导航2</div>
    </TabBarItem>
    <TabBarItem path="/statistics" :activeColor="active_color">
      <img slot="item-img" src="~assets/img/tabbar/tongji.png" alt="" />
      <img slot="item-img-active" src="~assets/img/tabbar/tongji_active.png" alt="" />
      <div slot="item-text">导航3</div>
    </TabBarItem> 
  </TabBar>
</template>

<script>
import TabBar from "./TabBar.vue";
import TabBarItem from "./TabBarItem.vue";
export default {
  name: "MainTabBar",
  data(){
    return {
      active_color: "black"
    }
  },
  components: {
    TabBar,
    TabBarItem,
  },
  computed: {
    // 控制导航栏是否出现
    getBool(){
      let result = 1;
      const noShow = ['none'];
      for (let i=0; i< noShow.length; i++) {
        result = this.$route.path.indexOf(noShow[i]);
      }
      return result == -1;
    }
  }
};
</script>

<style>
</style>