<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.img" alt="" @load="imageLoad(goodsItem.title)"/>
    <div class="goodInfo">
      <p class="title">{{ goodsItem.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      deault() {
        return {};
      },
    },
  },
  methods: {
      imageLoad(p){
          // this.$bus.$emit('imageItemLoad', p)
      },
      itemClick(){
        // this.$router.push('/detail/' + this.goodsItem.tradeItemId).catch(err => {})
      }
  }
};
</script>

<style>
.goods-item {
  margin-bottom: 15px;
  height: 50%;
  width: 49%;
  border-radius: 8px 8px 0 0;
  border: 1px solid rgb(212, 206, 206);
}
.goods-item img {
    width: 100%;
    height: 260px;
    border-radius: 8px;
}
.goodInfo {
  padding: 0 6px;
}
.title {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 5px;
}
.price {
  float: left;
  color: var(--color-high-text);
  font-size: 20px;
}
.cfav {
  float: right;
}
.cfav::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  /* background: url("~assets/img/common/collect.svg") 0 0/20px 20px; */
}
</style>