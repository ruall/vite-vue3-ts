<template>
  <div>
    <!-- search -->
    <a-card>
      <a-input-search size="large" class="search" placeholder="搜索一个小树苗~" @search="onSearch">
        <template #enterButton>
          <a-button style="width: 100px; height: 48px" class="search_btn" type="primary">
            <img :src="IconSerach" alt="" />
          </a-button>
        </template>
      </a-input-search>
    </a-card>
    <a-divider class="line" />
    <!-- chart -->
    <a-row :gutter="24">
      <a-col :span="12">
        <a-card :bordered="false">
          <DataOverview />
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card :bordered="false">
          <TradingHistory :loading="loading" />
        </a-card>
      </a-col>
    </a-row>
    <a-divider class="line" />
    <Table
      :bordered="bordered"
      :url="fetchApi.list"
      :columns="columns"
      :button="button"
      :items="items"
      :model="model"
      :actions="actions"
      :hidden-filter="false"
      :scroll="{ x: 1200 }"
    />
  </div>
</template>
<script setup lang="ts">
import IconSerach from '/@/assets/images/Icon _Search.png'
import DataOverview from './components/DataOverview.vue'
import TradingHistory from './components/TradingHistory.vue'
import { columns, actions, button, items, model } from './constant'
import fetchApi from '/@/api/home'
import { useHomeStore } from '/@/store/modules/home'

const store = useHomeStore()
const loading = ref(false)
const bordered = ref(true)

onMounted(async () => {
  loading.value = true
  await store.fetchInfo()
  loading.value = false
})

onUnmounted(() => {
  store.resetState()
})

const onSearch = () => {
  console.log('search')
}
</script>
<style lang="less" scoped>
.search {
  & :deep(.ant-input) {
    height: 48px;
  }
}
</style>
