<template>
  <DialogComponent title="电子围栏划定" @close="close">
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
    label: '电子围栏名称',
    prop: 'name',
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
  name: ''
}

const data = [
  {
    name: '石岛东南水域',
    createPeople: 'admin',
    createTime: '2024-01-01 00:00:00',
    type: '禁止停泊',
    show: '是',
    time: '是',
    startTime: '2024-01-01 00:00:00',
    endTime: '2024-06-01 00:00:00'
  },
  {
    name: '石岛东南水域',
    createPeople: 'admin',
    createTime: '2024-01-01 00:00:00',
    type: '禁止停泊',
    show: '是',
    time: '是',
    startTime: '2024-01-01 00:00:00',
    endTime: '2024-06-01 00:00:00'
  },
  {
    name: '石岛东南水域',
    createPeople: 'admin',
    createTime: '2024-01-01 00:00:00',
    type: '禁止停泊',
    show: '是',
    time: '是',
    startTime: '2024-01-01 00:00:00',
    endTime: '2024-06-01 00:00:00'
  },
  {
    name: '石岛东南水域',
    createPeople: 'admin',
    createTime: '2024-01-01 00:00:00',
    type: '禁止停泊',
    show: '是',
    time: '是',
    startTime: '2024-01-01 00:00:00',
    endTime: '2024-06-01 00:00:00'
  },
  {
    name: '石岛东南水域',
    createPeople: 'admin',
    createTime: '2024-01-01 00:00:00',
    type: '禁止停泊',
    show: '是',
    time: '是',
    startTime: '2024-01-01 00:00:00',
    endTime: '2024-06-01 00:00:00'
  },
  {
    name: '石岛东南水域',
    createPeople: 'admin',
    createTime: '2024-01-01 00:00:00',
    type: '禁止停泊',
    show: '是',
    time: '是',
    startTime: '2024-01-01 00:00:00',
    endTime: '2024-06-01 00:00:00'
  },
  {
    name: '石岛东南水域',
    createPeople: 'admin',
    createTime: '2024-01-01 00:00:00',
    type: '禁止停泊',
    show: '是',
    time: '是',
    startTime: '2024-01-01 00:00:00',
    endTime: '2024-06-01 00:00:00'
  }
]

const columns = [
  {
    label: '电子围栏名称',
    prop: 'name'
  },
  {
    label: '创建人',
    prop: 'createPeople'
  },
  {
    label: '创建时间',
    prop: 'createTime'
  },
  {
    label: '警戒类型',
    prop: 'type'
  },
  {
    label: '是否显示',
    prop: 'show'
  },
  {
    label: '特定时间生效',
    prop: 'time'
  },
  {
    label: '开始时间',
    prop: 'startTime'
  },
  {
    label: '结束时间',
    prop: 'endTime'
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
