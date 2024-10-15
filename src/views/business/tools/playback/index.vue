<template>
  <DialogComponent title="多船轨迹回放" width="520" @close="close" style="position: absolute;right: 5px;left: unset;transform: translate(0,-50%);">
    <div class="sub-title">查询条件</div>
    <FilterComponent :filter-items="items" :filter-model="model"/>
    <div class="sub-title">选中船舶</div>
    <TableComponent style="height: 370px;" :data="data" :columns="columns" :config="config"/>
    <div style="width: 100%;display: flex;justify-content: space-between;">
      <el-button type="primary" :icon="Search" style="width: 48%;">轨迹查询</el-button>
      <el-button type="warning" :icon="Search" style="width: 48%;">轨迹下载</el-button>
    </div>
  </DialogComponent>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
import FilterComponent from '@/components/Filter/index.vue'
import TableComponent from '@/components/Table/index.vue'
import DialogComponent from '@/components/Dialog/index.vue'

const router = useRouter()

const items = [
  {
    label: '时间范围',
    prop: 'time',
    type: 'datetimerange'
  },
  {
    label: '区域类型',
    prop: 'areaType',
    type: 'select',
    options: [
      {
        label: '圆形',
        value: '圆形'
      },
      {
        label: '矩形',
        value: '矩形'
      },
      {
        label: '多边形',
        value: '多边形'
      }
    ]
  },
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
  }
]

let model = {
  boatName: '',
  areaType: '',
  time: ''
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

/**
 * 点击关闭按钮
 */
const close = () => {
  router.push('/business')
}

</script>

<style lang="scss" scoped>
.sub-title{
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: 'SHSCM';
  color: #252B3A;

  &::before{
    content: '';
    display: block;
    width: 6px;
    height: 18px;
    background-color: #167FFF;
    border-radius: 3px;
    margin-right: 5px;
  }

  &::after{
    content: '';
    display: block;
    flex: 1;
    margin-left: 5px;
    height: 1px;
    background-color: #ebeef5;
  }
}
</style>
