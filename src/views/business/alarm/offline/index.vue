<template>
  <DialogComponent v-show="!dialogVisible" title="离线报警设置" width="600" @close="close">
    <el-form :model="model" label-width="auto" label-suffix="：" style="max-width: 600px">
      <el-form-item label="是否开启">
        <el-switch v-model="model.status" />
      </el-form-item>
      <el-form-item label="报警阈值">
        <el-input v-model="model.limit">
          <template #append>分钟</template>
        </el-input>
      </el-form-item>
      <el-form-item label="操作人员">
        <el-input v-model="model.operator" />
      </el-form-item>
      <el-form-item label="操作时间">
        <el-input v-model="model.operatingTime" />
      </el-form-item>
      <el-form-item class="button">
        <el-button type="warning" @click="dialogVisible=true">配置记录</el-button>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </DialogComponent>
  <DetailComponent v-if="dialogVisible" @close="dialogVisible=false"/>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import DialogComponent from '@/components/Dialog/index.vue'
import DetailComponent from './detail.vue'

const router = useRouter()

const model = reactive({
  status: true,
  limit: '30',
  operator: 'admin',
  operatingTime: '2024-01-01 00:00:00'
})

const dialogVisible = ref(false)

const onSubmit = () => {
  console.log('submit!')
}

/**
 * 点击关闭按钮
 */
const close = () => {
  router.push('/business')
}

</script>

<style lang="scss" scoped>
:deep(.el-form-item){
  &.button .el-form-item__content{
    display: flex;
    justify-content: center;
    gap: 20px;
  }
}

</style>
