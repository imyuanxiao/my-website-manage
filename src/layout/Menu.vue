<template>

<div class="app_left_part">


  <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
  >

<!--    <el-button @click="toggleCollapse" >{{ isCollapse ? '>>' : '<<' }}</el-button>-->

    <el-menu-item index="1">
      <el-icon><document /></el-icon>
      <template #title>Home Page</template>
    </el-menu-item>

    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Moudle</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
        <el-menu-item index="1-3">item three</el-menu-item>
        <el-menu-item index="1-4">item Four</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>

    <el-menu-item index="3">
      <el-icon><icon-menu /></el-icon>
      <template #title>Article</template>
    </el-menu-item>

    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Setting</template>
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

.el-menu-vertical-demo:not(.el-menu--collapse) {
  position: fixed;
  width: 200px;
  height: 100vh;
}
.el-menu-vertical-demo.el-menu--collapse{
  position: fixed;
  width: 60px;
  height: 100vh;
}
</style>