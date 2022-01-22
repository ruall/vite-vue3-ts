<template>
  <a-config-provider :locale="zhCN">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts" setup>
import zhCN from 'ant-design-vue/es/locale/en_US'
import { useTitle } from '/@/hooks/useTitle'
import dayjs from 'dayjs'
import 'dayjs/locale/en'

dayjs.locale('en')

useTitle()

console.log('my config env: ', import.meta.env)
</script>
