<template>
  <div class="swiperitem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Swiperitem",
  computed: {
  },
};
</script>

<style scoped>
.swiperitem {
  float: left;
  width: 800px;
  height: 100%;
}
.swiperitem img {
  width: 100%;
  height: 100%;
}
</style>