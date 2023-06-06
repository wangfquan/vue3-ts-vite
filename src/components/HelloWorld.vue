<!--
 * @Descripttion:
 * @version: 项目搭建及相关插件配置
 * @Author: wangfquan
 * @Date: 2023-06-05 10:31:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-06 12:02:44
-->
<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
const onclick = () => {
  if (count.value === 4) {
    count.value += 3;
  } else {
    count.value += 2;
  }
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="onclick">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
