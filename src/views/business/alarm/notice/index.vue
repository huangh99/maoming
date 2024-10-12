<template>
  <DialogComponent title="报警通知设置" width="600" @close="close">
    <el-form :model="model" label-width="auto" label-suffix="：" style="max-width: 600px">
      <el-form-item label="声音状态">
        <el-switch v-model="model.status" />
      </el-form-item>
      <el-form-item label="报警音频" class="audio">
        <audio src="/audio/alarm.mp3" controls></audio>
        <el-upload
          v-model:file-list="model.file"
          :show-file-list="false"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :limit="1"
          accept=".mp3"
        >
          <el-button type="success">选择新音频文件</el-button>
        </el-upload>
      </el-form-item>
      <el-form-item label="操作人员">
        <el-input v-model="model.operator" />
      </el-form-item>
      <el-form-item label="操作时间">
        <el-input v-model="model.operatingTime" />
      </el-form-item>
      <el-form-item>
        <el-button class="button" type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </DialogComponent>
</template>
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import DialogComponent from '@/components/Dialog/index.vue'

const router = useRouter()

const model = reactive({
  status: false,
  audio: '',
  operator: 'admin',
  operatingTime: '2024-01-01 00:00:00',
  file: []
})

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
  &.audio .el-form-item__content{
    display: flex;
    justify-content: space-between;
  }

  audio{
    height: 32px;
  }

  .button{
    margin: 10px auto 0;
  }
}

</style>
