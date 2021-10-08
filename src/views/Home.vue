<template>
  <div class="home">
    <div class="banner">
      <Banner></Banner>
    </div>
    <div class="info">
      <Info></Info>
    </div>
  </div>
</template>

<script>
import Banner from 'components/Banner.vue'
import Info from './info/Info.vue'
export default {
  name: 'Home',
  components: {
    Banner,
    Info
  },
  methods: {
  },
  mounted(){
    let scrollEl = document.querySelectorAll('.typora-export-content')
    let info = document.querySelector('.info')
    this.$bus.$on('sceollByIndex' ,(index)=>{
      if(index<= scrollEl.length-1 && index>=0){
        info.scrollTo(0, scrollEl[index].offsetTop)
      }
    }),
    info.scrollTo(0, scrollEl[3].offsetTop)
  }
}
</script>

<style scoped>
.banner {
  position: fixed;
  left: 0;
  width: 15vw;
  padding-top: 50px;
  padding-left: 20px;
}
.info {
  position: fixed;
  left: 15vw;
  width: 85vw;
  height: 100vh;
  overflow-y: auto;
}
</style>
