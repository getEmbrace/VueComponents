<template>
  <div class="goods">
    <GoodsListItem
      v-for="(item, index) of [...goods, ...goods, ...goods]"
      :key="index"
      :goods-item="item"
    ></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "./dataListItem.vue";

export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [
          {
            img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fv1.qzone.cc%2Fpic%2F201612%2F02%2F09%2F16%2F5840cb690d7e7090.jpg%21600x600.jpg&refer=http%3A%2F%2Fv1.qzone.cc&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636196389&t=e5a5d74dfff96c376e0d7efeae885454",
            title: "item描述文字",
          },
          {
            img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fv1.qzone.cc%2Fpic%2F201612%2F02%2F09%2F16%2F5840cb690d7e7090.jpg%21600x600.jpg&refer=http%3A%2F%2Fv1.qzone.cc&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636196389&t=e5a5d74dfff96c376e0d7efeae885454",
            title: "item描述文字",
          }]
      },
    },
  },
  // mounted() {
  //   const bscroll = new BScroll(".goods-scroll", {
  //     //是否滚动监听 否（0,1） 是（2（不监听惯性滚动），3（监听惯性滚动））
  //     probeType: 3,
  //     //监听点击事件
  //     click: true,
  //     //上拉加载
  //     pullUpLoad: true,
  //   });
  //   bscroll.on("scroll", (position) => {
  //     // console.log(position);
  //   });
  //   bscroll.on("pullingUp", () => {
  //     console.log("加载");
  //     //请求新数据

  //     //展示数据

  //     //开启下拉加载
  //     setTimeout(() => {
  //       bscroll.finishPullUp();
  //     }, 2000);
  //   });
  // },
  components: {
    GoodsListItem,
  },
};
</script>

// css作用域
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px 10px;
}
</style>