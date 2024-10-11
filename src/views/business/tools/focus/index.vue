<template>
  <DialogComponent title="重点监控" @close="close">
    <el-tabs v-model="active" @tab-change="toggleTab">
      <el-tab-pane label="重点关注渔船" name="focus"></el-tab-pane>
      <el-tab-pane label="选择渔船" name="all"></el-tab-pane>
    </el-tabs>
    <FilterComponent :filter-items="items[active]" :filter-model="model"/>
    <TableComponent style="height: 500px;" :data="data" :columns="columns" :config="config" :operate="operate[active]"/>
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import FilterComponent from '@/components/Filter/index.vue'
import TableComponent from '@/components/Table/index.vue'
import DialogComponent from '@/components/Dialog/index.vue'

const router = useRouter()
const active = ref('focus')

const items = {
  focus: [
    {
      label: '渔船名称',
      prop: 'boatName',
      type: 'input'
    },
    {
      name: '查询',
      prop: 'query',
      theme: 'primary',
      type: 'button'
    },
    {
      name: '批量取消关注',
      prop: 'cancel',
      theme: 'danger',
      type: 'button'
    }
  ],
  all: [
    {
      label: '渔船名称',
      prop: 'boatName',
      type: 'input'
    },
    {
      name: '查询',
      prop: 'query',
      theme: 'primary',
      type: 'button'
    },
    {
      name: '批量关注',
      prop: 'add',
      theme: 'warning',
      type: 'button'
    }
  ]
}

let model = {
  boatName: ''
}

const data = [
  {
    boatName: '粤茂滨渔54108',
    terminalCode: '412537779',
    address: '广东省茂名市',
    ownerName: '刘华强'
  },
  {
    boatName: '粤茂滨渔54108',
    terminalCode: '412537779',
    address: '广东省茂名市',
    ownerName: '刘华强'
  },
  {
    boatName: '粤茂滨渔54108',
    terminalCode: '412537779',
    address: '广东省茂名市',
    ownerName: '刘华强'
  },
  {
    boatName: '粤茂滨渔54108',
    terminalCode: '412537779',
    address: '广东省茂名市',
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
    label: '所属地',
    prop: 'address'
  },
  {
    label: '渔船所有人',
    prop: 'ownerName'
  }
]

const config = {
  type: 'selection',
  width: 120
}

const operate = {
  focus: [
    {
      label: '取消关注',
      prop: 'cancel',
      theme: 'danger'
    }
  ],
  all: [
    {
      label: '添加关注',
      prop: 'add',
      theme: 'warning'
    }
  ]
}

const pagination = {
  current: 1,
  size: 15,
  total: 0
}

/**
 * tab标签切换
 */
const toggleTab = () => {}

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
