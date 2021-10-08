<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
#tab-bar {
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  background-color: #f2f2f2;
  box-shadow: 0 -2px 2px rgba(100, 100, 100, 0.15);
  z-index: 999;
}

</style>