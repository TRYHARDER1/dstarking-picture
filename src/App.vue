<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <BasicLayout />
    </div>
  </a-config-provider>
</template>

<script setup lang="ts">
import BasicLayout from '@/layouts/BasicLayout.vue'
import { useLoginUserStore } from '@/stores/useLoginUserStore.ts'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')
const locale = zhCN
const loginUserStore = useLoginUserStore()
loginUserStore.fetchLoginUser()
</script>
<style>
#app {
}
</style>
