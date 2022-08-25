<template>
<div class="common-layout">
    <el-container>
      <el-header class="header">
      </el-header>
      <el-container>
        <el-aside width="200px" class="aside">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
      >
        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="2" @click="this.$router.push('/appVue2')">
          <el-icon><document /></el-icon>
          <span>第一个子应用app vue2</span>
        </el-menu-item>
        <el-menu-item index="3"  @click="this.$router.push('/appVue3')">
          <el-icon><setting /></el-icon>
          <span>第二个子应用app vue3</span>
        </el-menu-item>
         <el-menu-item index="4" @click="this.$router.push('/a')">
          <el-icon><setting /></el-icon>
          <span>a页</span>
        </el-menu-item>
         <el-menu-item index="5" @click="this.$router.push('/b')">
          <el-icon><setting /></el-icon>
          <span>b页</span>
        </el-menu-item>
       </el-menu>
        </el-aside>
        <el-main>
            <slot></slot>
            <!-- 子应用容器 -->
            <div id="subContent"></div>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<script setup>
import {
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
</script>
