

<template>
  <AppContent>
    <RouterView/>
  </AppContent>
</template>
<script setup>
  import AppContent from './layout/index.vue'
</script>
<style>
#app{
    height: 100%;
}
body{
  padding: 0;
  margin: 0;
  height: 100vh;
}
.common-layout, .el-container{
  height: 100%;
}
.header{
  background: #000;
}
.aside, .el-menu{
  height: 100%;
}
</style>
