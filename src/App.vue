<!--
 * @Descripttion:
 * @version: 项目搭建及相关插件配置
 * @Author: wangfquan
 * @Date: 2023-06-05 10:31:09
 * @LastEditors:
 * @LastEditTime: 2023-06-05 17:23:43
-->
<script setup lang="ts">
import helloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <helloWorld msg="Vite + Vue" />
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
