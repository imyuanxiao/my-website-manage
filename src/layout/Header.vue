<template>
  <el-row class="header">
    <el-col :span="2">

      <el-button @click="toggleFold" >{{ isFold ? '<<' : '>>' }}</el-button>

    </el-col>
    <el-col :span="2">
      <a>首页</a>
    </el-col>
    <el-col class="header_right" :span="18">
      <el-button :icon="Search" circle />
      <el-button :icon="Message" circle />
    </el-col>
    <el-col span="2">
      <el-avatar :icon="UserFilled" />
    </el-col>
  </el-row>

  <el-row class="breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </el-row>

</template>

<script lang="ts">

import {mapMutations, mapState} from "vuex";
import { UserFilled } from '@element-plus/icons-vue'

export default {
  name: "Header",
  computed: {
    ...mapState(['isFold']),
  },
  methods: {
    ...mapMutations(['toggleFold']),
  },
}
</script>

<script setup lang="ts">
import { ElNotification as notify } from 'element-plus'
import { ArrowRight } from '@element-plus/icons-vue'
import {
  Message,
  Search,
} from '@element-plus/icons-vue'
const onBack = () => {
  notify('Back')
}
</script>

<style scoped>
.header{
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
  height: 50px;
  align-items: center;
}
.header_right{
  text-align: right;
  padding-right: 20px;
}
.breadcrumb{
  border: solid 1px #777777;
  height: 30px;
  align-items: center;
  padding-left: 10px;
}
</style>