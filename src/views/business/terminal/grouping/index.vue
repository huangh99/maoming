<template>
  <DialogComponent title="设备分组" @close="close">
    <FilterComponent :filter-items="items" :filter-model="model"/>
    <TableComponent style="height: 500px;" :data="data" :columns="columns" :config="config" :operate="operate"/>
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
    label: '分组名称',
    prop: 'groupName',
    type: 'input'
  },
  {
    name: '查询',
    prop: 'query',
    theme: 'primary',
    type: 'button'
  },
  {
    name: '新增',
    prop: 'add',
    theme: 'success',
    type: 'button'
  }
]

let model = {
  groupName: ''
}

const data = [
  {
    groupName: '分组A',
    count: '6',
    device: '查看',
    people: 'admin',
    time: '2024-01-01 00:00:00'
  },
  {
    groupName: '分组A',
    count: '6',
    device: '查看',
    people: 'admin',
    time: '2024-01-01 00:00:00'
  },
  {
    groupName: '分组A',
    count: '6',
    device: '查看',
    people: 'admin',
    time: '2024-01-01 00:00:00'
  },
  {
    groupName: '分组A',
    count: '6',
    device: '查看',
    people: 'admin',
    time: '2024-01-01 00:00:00'
  },
  {
    groupName: '分组A',
    count: '6',
    device: '查看',
    people: 'admin',
    time: '2024-01-01 00:00:00'
  },
  {
    groupName: '分组A',
    count: '6',
    device: '查看',
    people: 'admin',
    time: '2024-01-01 00:00:00'
  },
  {
    groupName: '分组A',
    count: '6',
    device: '查看',
    people: 'admin',
    time: '2024-01-01 00:00:00'
  },
  {
    groupName: '分组A',
    count: '6',
    device: '查看',
    people: 'admin',
    time: '2024-01-01 00:00:00'
  }
]

const columns = [
  {
    label: '分组名称',
    prop: 'groupName'
  },
  {
    label: '设备数量',
    prop: 'count'
  },
  {
    label: '管理设备',
    prop: 'device'
  },
  {
    label: '添加人员',
    prop: 'people'
  },
  {
    label: '添加时间',
    prop: 'time'
  }
]

const config = {
  type: 'index',
  width: 120
}

const operate = [
  {
    label: '编辑',
    prop: 'edit',
    theme: 'primary'
  },
  {
    label: '删除',
    prop: 'delete',
    theme: 'danger'
  }
]

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
