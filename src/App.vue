<script setup lang="ts">
import { RouterView } from 'vue-router'
import { setTheme } from 'mdui/functions/setTheme.js';
import { setColorScheme } from 'mdui/functions/setColorScheme.js';
import HeadView from '@/components/HeadView.vue';
import { useCounterStore } from '@/stores/counter'
import { onMounted } from 'vue';
import axios from 'axios';
const store = useCounterStore()


store.$onAction(({ after }) => {
  after(() => {
    setTheme(store.ModleType as 'dark' | 'light')
  })
})
setColorScheme('#9ecaff');

onMounted(() => {
  axios.get('http://127.0.0.1').then(res => {
    console.log(res)
  })
})




</script>
<style>
:root {
  margin: 0;
  padding: 0;
}
</style>
<template>
  <mdui-fab style="position: fixed;bottom: 50px;right: 50px;z-index: 1;" extended icon="edit">编辑</mdui-fab>

  <mdui-top-app-bar style="position: fixed;">
    <HeadView>
    </HeadView>
  </mdui-top-app-bar>
  <RouterView />
</template>
