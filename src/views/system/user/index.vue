<template>
  <FilterComponent :filter-items="items" :filter-model="model"/>
  <TableComponent style="height: calc(100% - 92px);" :data="data" :columns="columns" :config="config" :operate="operate" size="large"/>
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
</template>
<script setup>
import FilterComponent from '@/components/Filter/index.vue'
import TableComponent from '@/components/Table/index.vue'

const items = [
  {
    label: '用户名称',
    prop: 'boatName',
    type: 'input'
  },
  {
    label: '用户账号',
    prop: 'terminalCode',
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
  boatName: '',
  terminalCode: ''
}

const data = [
  {
    boatName: 'admin',
    terminalCode: '刘华强',
    address: '1785232563',
    ownerName: '超级管理员'
  },
  {
    boatName: 'admin',
    terminalCode: '刘华强',
    address: '1785232563',
    ownerName: '超级管理员'
  },
  {
    boatName: 'admin',
    terminalCode: '刘华强',
    address: '1785232563',
    ownerName: '超级管理员'
  },
  {
    boatName: 'admin',
    terminalCode: '刘华强',
    address: '1785232563',
    ownerName: '超级管理员'
  },
  {
    boatName: 'admin',
    terminalCode: '刘华强',
    address: '1785232563',
    ownerName: '超级管理员'
  },
  {
    boatName: 'admin',
    terminalCode: '刘华强',
    address: '1785232563',
    ownerName: '超级管理员'
  }
]

const columns = [
  {
    label: '用户账号',
    prop: 'boatName'
  },
  {
    label: '用户名称',
    prop: 'terminalCode'
  },
  {
    label: '手机号码',
    prop: 'address'
  },
  {
    label: '用户角色',
    prop: 'ownerName'
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
</script>

<style lang="scss" scoped>

</style>
