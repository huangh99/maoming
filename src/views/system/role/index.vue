<template>
  <FilterComponent :filter-items="items" :filter-model="model" @handle="handle" />
  <TableComponent style="height: calc(100% - 92px);" :data="data" :columns="columns" :config="config" :operate="operate"
    size="large" @handle="handle" />
  <el-pagination v-model:current-page="pagination.current" v-model:page-size="pagination.size" :total="pagination.total"
    :page-sizes="[10, 15, 20, 50]" layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange"
    @current-change="handleCurrentChange" style="margin-top: 10px; justify-content: center;" />
  <DialogComponent v-if="detail.visible" :title="detail.title[detail.type]" :modal="true" width="500"
    @close="closeDetail">
    <DetailComponent :data="detail.data" :type="detail.type" @close="closeDetail" />
  </DialogComponent>
</template>
<script setup>
import { reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import FilterComponent from '@/components/Filter/index.vue'
import TableComponent from '@/components/Table/index.vue'
import DialogComponent from '@/components/Dialog/index.vue'
import DetailComponent from './detail.vue'

const items = [
  {
    label: '角色名称',
    prop: 'boatName',
    type: 'input'
  },
  {
    label: '角色编码',
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
    boatName: '超级管理员',
    terminalCode: 'ROLE_ADMIN',
    address: '',
    ownerName: '2024-01-01 00:00::00'
  },
  {
    boatName: '超级管理员',
    terminalCode: 'ROLE_ADMIN',
    address: '',
    ownerName: '2024-01-01 00:00::00'
  },
  {
    boatName: '超级管理员',
    terminalCode: 'ROLE_ADMIN',
    address: '',
    ownerName: '2024-01-01 00:00::00'
  },
  {
    boatName: '超级管理员',
    terminalCode: 'ROLE_ADMIN',
    address: '',
    ownerName: '2024-01-01 00:00::00'
  },
  {
    boatName: '超级管理员',
    terminalCode: 'ROLE_ADMIN',
    address: '',
    ownerName: '2024-01-01 00:00::00'
  },
  {
    boatName: '超级管理员',
    terminalCode: 'ROLE_ADMIN',
    address: '',
    ownerName: '2024-01-01 00:00::00'
  }
]

const columns = [
  {
    label: '角色名称',
    prop: 'boatName'
  },
  {
    label: '角色编码',
    prop: 'terminalCode'
  },
  {
    label: '备注',
    prop: 'address'
  },
  {
    label: '更新时间',
    prop: 'ownerName'
  }
]

const config = {
  type: 'index',
  width: 180
}

const operate = [
  {
    label: '编辑',
    prop: 'edit',
    theme: 'primary'
  },
  {
    label: '授权',
    prop: 'power',
    theme: 'warning'
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

const detail = reactive({
  visible: false,
  title: {
    add: '角色信息新增',
    check: '角色信息查看',
    edit: '角色信息编辑'
  },
  type: 'add',
  data: {}
})

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
* 按钮操作
* @param type 操作类型
* @param data 数据
*/
const handle = (type, data) => {

  switch (type) {
    case 'query':
      model = { ...data }
      pagination.current = 1
      // initData()
      break
    case 'add':
      detail.visible = true
      detail.type = 'add'
      detail.data = {}
      break
    case 'check':
    case 'edit':
      detail.type = type
      detail.data = { ...data }
      detail.visible = true
      break
    case 'delete': {
      ElMessageBox.confirm(
        '是否删除该条数据?',
        '提示',
        {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        ElMessage.success('删除成功！')
      }).catch(() => { })
      break
    }

    default:
      break
  }
}

/**
 * 关闭详情弹窗
 * @param refresh 是否刷新数据
 */
const closeDetail = (refresh) => {
  detail.visible = false
  if (refresh) {
    // initData()
  }
}
</script>

<style lang="scss" scoped></style>
