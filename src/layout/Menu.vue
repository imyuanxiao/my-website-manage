<template>

<div class="app_left_part">

  <el-menu
      default-active="/"
      class="el_menu_vertical"
      :collapse="isCollapse"
      :router="true"
      background-color="#041230"
      text-color="#ffffff"
      active-text-color="#e3872d"
      style="border: none"
  >
    <el-menu-item index="/">
      <el-icon><document/></el-icon>
      <template #title>
        <span>HomePage</span>
      </template>
    </el-menu-item>

    <el-sub-menu>
      <template #title class="title_holder">
        <el-icon><location /></el-icon>
        <span>Module</span>
      </template>
      <div  class="el-sub-menu">
        <el-menu-item index="/module/about">
          <el-icon ><document /></el-icon>
          <span>About</span>
        </el-menu-item>
        <el-menu-item index="/module/service">
          <el-icon><document /></el-icon>
          <span>Service</span>
        </el-menu-item>
        <el-menu-item index="/module/contact">
          <el-icon><document /></el-icon>
          <span>Contact</span>
        </el-menu-item>
      </div>
    </el-sub-menu>

    <el-menu-item index="/article">
      <el-icon><icon-menu /></el-icon>
      <template #title>
        <span>Article</span>
      </template>
    </el-menu-item>


  </el-menu>
</div>

</template>

<script lang="ts" >
import { mapState } from 'vuex';

export default {
  name: "Menu",
  computed: {
    ...mapState(['isFold']),
    isCollapse() {
      return !this.isFold;
    },
  },
}
</script>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
</script>

<style scoped>


.el-sub-menu{
  background-color: #041844;
}

.el_menu_vertical:not(.el-menu--collapse) {
  position: fixed;
  width: 200px;
  height: 100vh;
}
.el_menu_vertical.el-menu--collapse{
  position: fixed;
  width: 65px;
  height: 100vh;
}
</style>