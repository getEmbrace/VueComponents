<template>
  <Swiper :swiperRef="'home_swiper'">
    <SwiperItem v-for="(item, index) of banner" :key="index">
      <a href="#"><img :src="item.image" alt="" @load.once="imageLoad" /></a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import Swiper from "./Swiper.vue";
import SwiperItem from "./Swiperitem.vue";

export default {
  name: "Home_swiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [
          {
            image:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.nosdn.127.net%2F3xfCW1DIkjx9OUsuJMV%3D%3DRKSKSAZsfgn0zWTUFgYFHV3X1535160273505.jpg&refer=http%3A%2F%2Fdingyue.nosdn.127.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636199833&t=1f7ed3fa1955c43ef5107e81d440347a",
          },
          {
            image:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.nosdn.127.net%2F3xfCW1DIkjx9OUsuJMV%3D%3DRKSKSAZsfgn0zWTUFgYFHV3X1535160273505.jpg&refer=http%3A%2F%2Fdingyue.nosdn.127.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636199833&t=1f7ed3fa1955c43ef5107e81d440347a",
          },
          {
            image:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.nosdn.127.net%2F3xfCW1DIkjx9OUsuJMV%3D%3DRKSKSAZsfgn0zWTUFgYFHV3X1535160273505.jpg&refer=http%3A%2F%2Fdingyue.nosdn.127.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636199833&t=1f7ed3fa1955c43ef5107e81d440347a",
          },
        ];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoad() {
      //发送加载完成事件
      // this.$bus.$emit("swiperLoad");
    },
  },
};
</script>

<style>
</style>