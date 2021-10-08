<template>
  <div class="tab-bar-item" @click="active_click">
    <div v-if="isActive"><slot name="item-img-active"></slot></div>
    <div v-else><slot name="item-img"></slot></div>

    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      return true;
    },
    activeStyle() {
      return this.isActive == true
        ? { color: this.activeColor, fontSize: "15px" }
        : {};
    },
  },
  methods: {
    active_click() {
      //修改路由指向
      // this.$router.push(this.path).catch((err) => {
      //   console.log("重复点击");
      // });
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img {
  margin-top: 3px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>