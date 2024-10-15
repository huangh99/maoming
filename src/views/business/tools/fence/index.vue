<template>
  <DialogComponent v-if="!detail.visible" title="电子围栏划定" @close="close">
    <FilterComponent :filter-items="items" :filter-model="model" @handle="handle" />
    <TableComponent style="height: 500px;" :data="data" :columns="columns" :config="config" :operate="operate"
      @handle="handle" />
    <el-pagination v-model:current-page="pagination.current" v-model:page-size="pagination.size"
      :total="pagination.total" :page-sizes="[10, 15, 20, 50]" layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange" @current-change="handleCurrentChange"
      style="margin-top: 10px; justify-content: center;" />
  </DialogComponent>
  <DialogComponent v-if="detail.visible" :title="detail.title[detail.type]" width="800"
    @close="closeDetail">
    <DetailComponent :data="detail.data" :type="detail.type" @close="closeDetail" />
  </DialogComponent>
</template>
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import FilterComponent from '@/components/Filter/index.vue'
import TableComponent from '@/components/Table/index.vue'
import DialogComponent from '@/components/Dialog/index.vue'
import DetailComponent from './detail.vue'

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

const detail = reactive({
  visible: false,
  title: {
    add: '电子围栏新增',
    check: '电子围栏查看',
    edit: '电子围栏编辑'
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
 * 点击关闭按钮
 */
const close = () => {
  router.push('/business')
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
