<template>
  <DialogComponent title="区域搜索结果" @close="close">
    <FilterComponent :filter-items="items" :filter-model="model"/>
    <TableComponent style="height: 500px;" :data="data" :columns="columns" :config="config"/>
    <el-pagination
      v-model:current-page="pagination.current"
      v-model:page-size="pagination.size"
      :total="pagination.total"
      :page-sizes="[ 10, 15, 20, 50 ]"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      style="margin-top: 10px; justify-content: center;"
    />
  </DialogComponent>
</template>
<script setup>
import { useRouter } from 'vue-router'
import FilterComponent from '@/components/Filter/index.vue'
import TableComponent from '@/components/Table/index.vue'
import DialogComponent from '@/components/Dialog/index.vue'

const router = useRouter()

const items = [
  {
    label: '船名号',
    prop: 'boatName',
    type: 'input'
  },
  {
    label: '终端号码',
    prop: 'terminalCode',
    type: 'input'
  },
  {
    name: '查询',
    prop: 'query',
    theme: 'primary',
    type: 'button'
  }
]

let model = {
  boatName: '',
  terminalCode: ''
}

const data = [
  {
    boatName: '粤茂滨渔54108',
    terminalCode: '412537779',
    address: '广东省茂名市',
    boatType: '捕捞船',
    ownerName: '刘华强'
  },
  {
    boatName: '粤茂滨渔54108',
    terminalCode: '412537779',
    address: '广东省茂名市',
    boatType: '捕捞船',
    ownerName: '刘华强'
  },
  {
    boatName: '粤茂滨渔54108',
    terminalCode: '412537779',
    address: '广东省茂名市',
    boatType: '捕捞船',
    ownerName: '刘华强'
  },
  {
    boatName: '粤茂滨渔54108',
    terminalCode: '412537779',
    address: '广东省茂名市',
    boatType: '捕捞船',
    ownerName: '刘华强'
  }
]

const columns = [
  {
    label: '渔船名称',
    prop: 'boatName'
  },
  {
    label: '终端号码',
    prop: 'terminalCode'
  },
  {
    label: '渔船所有人',
    prop: 'ownerName'
  },
  {
    label: '渔船类型',
    prop: 'boatType'
  },
  {
    label: '所属地',
    prop: 'address'
  }
]

const config = {
  type: 'index',
  width: 120
}

const pagination = {
  current: 1,
  size: 15,
  total: 0
}

/**
 * 分页大小变化
 * @param val 分页大小
 */
const handleSizeChange = (val) => {
  console.log(val)
}

/**
 * 页码变化
 * @param val 当前页码
 */
const handleCurrentChange = (val) => {
  console.log(val)
}

/**
 * 点击关闭按钮
 */
const close = () => {
  router.push('/business')
}

</script>

<style lang="scss" scoped>

</style>
