<template>
  <div id="info">
    <Info21></Info21>
    <Info22></Info22>
    <Info31></Info31>
    <Info32></Info32>
    <Info33></Info33>
  </div>
</template>

<script>
import Info21 from "./child/Info_2_1.vue";
import Info22 from "./child/Info_2_2.vue";
import Info31 from "./child/Info_3_1.vue";
import Info32 from "./child/Info_3_2.vue";
import Info33 from "./child/Info_3_3.vue";

export default {
  data() {
    return {
      inputText: "",
    };
  },
  components: {
    Info21,
    Info22,
    Info31,
    Info32,
    Info33,
  },
  methods: {
  },
};
</script>

<style>
</style>