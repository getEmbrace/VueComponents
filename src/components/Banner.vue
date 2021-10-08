<template>
  <el-row class="tac">
    <el-col>
      <el-menu
        default-active="3-2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        @select="selectClick"
      >
        <el-menu-item-group index="2">
          <span slot="title">初始文件</span>
          <el-menu-item index="2-1">
            <template slot="title">
              <span>CSS</span>
            </template>
          </el-menu-item>
          <el-menu-item index="2-2">
            <template slot="title">
              <span>Axios</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group index="3">
          <span slot="title">组件</span>
          <el-menu-item index="3-1">
            <template slot="title">
              <span>导航栏</span>
            </template>
          </el-menu-item>
          <el-menu-item index="3-2">
            <template slot="title">
              <span>数据列表</span>
            </template>
          </el-menu-item>
          <el-menu-item index="3-3">
            <template slot="title">
              <span>走马灯</span>
            </template>
          </el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data(){
    return {
      indexList: ['2-1', '2-2', '3-1', '3-2', '3-3']
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    selectClick(index, indexPath){
      let indexOfList = this.indexList.indexOf(index)
      this.$router.push({path: '/info/'+index}).catch(()=> {})
      this.$bus.$emit('sceollByIndex', indexOfList)
    },
  },
};
</script>

<style>
</style>