<template>
  <el-row class="header">
    <el-col :span="2">
      <el-button
          style="border:none;background-color: #e3872d; color: #041844;"
          @click="toggleFold" >{{ isFold ? '<<' : '>>' }}</el-button>
    </el-col>
    <el-col :span="14">
      <el-row class="breadcrumb">
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item>promotion</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
    </el-col>
    <el-col class="header_right" :span="6">
      <el-button :icon="Search" circle />
      <el-button :icon="Message" circle />
    </el-col>
    <el-col span="2">
      <el-avatar :icon="UserFilled" />
    </el-col>
  </el-row>
  <el-row>
    显示打开模块
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
  padding: 5px 10px;
  height: 55px;
  align-items: center;
  background-color: #041844;
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