<template>
  <DialogComponent title="渔船信息" @close="close">
    <FilterComponent :filter-items="items" :filter-model="model" @handle="handle"/>
    <TableComponent style="height: 500px;" :data="data" :columns="columns" :config="config" :operate="operate" @handle="handle"/>
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

  <DialogComponent v-if="detail.visible" :title="detail.title[detail.type]" :modal="true" width="800" @close="closeDetail">
    <DetailComponent :data="detail.data" :type="detail.type" @close="closeDetail"/>
  </DialogComponent>

  <!-- 用户导入对话框 -->
  <el-dialog :title="upload.title" v-model="upload.open" width="400px" append-to-body>
     <el-upload ref="uploadRef" :limit="1" accept=".xlsx, .xls"
        :action="upload.url + '?updateSupport=' + upload.updateSupport" :disabled="upload.isUploading"
        :on-progress="handleFileUploadProgress" :on-success="handleFileSuccess" :auto-upload="false" drag>
        <el-icon class="el-icon--upload"><UploadFilled /></el-icon>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <template #tip>
           <div class="el-upload__tip text-center">
              <!-- <div class="el-upload__tip">
                 <el-checkbox v-model="upload.updateSupport" />是否更新已经存在的用户数据
              </div> -->
              <span>仅允许导入xls、xlsx格式文件。</span>
              <el-link type="primary" :underline="false" style="font-size:12px;vertical-align: baseline;"
                 >下载模板</el-link>
           </div>
        </template>
     </el-upload>
     <template #footer>
        <div class="dialog-footer">
           <el-button type="primary" @click="upload.open = false">确 定</el-button>
           <el-button @click="upload.open = false">取 消</el-button>
        </div>
     </template>
  </el-dialog>

</template>
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'
import FilterComponent from '@/components/Filter/index.vue'
import TableComponent from '@/components/Table/index.vue'
import DialogComponent from '@/components/Dialog/index.vue'
import DetailComponent from './detail.vue'

const router = useRouter()
/*** 用户导入参数 */
const upload = reactive({
   // 是否显示弹出层（用户导入）
   open: false,
   // 弹出层标题（用户导入）
   title: '',
   // 是否禁用上传
   isUploading: false,
   // 是否更新已经存在的用户数据
   updateSupport: 0,
   // 设置上传的请求头部
   headers: { Authorization: 'Bearer ' },
   // 上传的地址
   url: import.meta.env.VITE_APP_BASE_API + '/system/user/importData'
})
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
  },
  {
    name: '新增',
    prop: 'add',
    theme: 'success',
    type: 'button'
  },
  {
    name: '导入',
    prop: 'import',
    theme: 'info',
    type: 'button'
  },
  {
    name: '导出',
    prop: 'export',
    theme: 'warning',
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
    ownerName: '刘强'
  },
  {
    boatName: '粤茂滨渔54108',
    terminalCode: '412537779',
    address: '广东省茂名市',
    ownerName: '刘强'
  },
  {
    boatName: '粤茂滨渔54108',
    terminalCode: '412537779',
    address: '广东省茂名市',
    ownerName: '刘强'
  },
  {
    boatName: '粤茂滨渔54108',
    terminalCode: '412537779',
    address: '广东省茂名市',
    ownerName: '刘强'
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
    add: '渔船信息新增',
    check: '渔船信息查看',
    edit: '渔船信息编辑'
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
      }).catch(() => {})
      break
    }
    case 'import':
      upload.open = true
      break

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

<style lang="scss" scoped>

</style>
