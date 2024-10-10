<template>
  <ul class="map-number">
    <li class="number-item" v-for="(item,index) in list" :key="index">
      <span class="label">{{ item.label }}:</span>
      <span class="value">{{ model[item.prop] }}</span>
    </li>
  </ul>

</template>
<script setup>
import { onMounted } from 'vue'

const list = [
  {
    label:'渔船总数',
    prop:'total'
  },
  {
    label:'在线数量',
    prop:'online'
  },
  {
    label:'离线数量',
    prop:'offline'
  },
  {
    label:'在外作业船数',
    prop:'work'
  }
]

const model = {
  total:300,
  online:280,
  offline:20,
  work:200,
}

</script>

<style lang="scss" scoped>
.map-number{
  position: absolute;
  left: 5px;
  bottom: 5px;
  height: 32px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);
  background-color: #fff;
  font-size: 14px;
  gap: 10px;

  .value{
    color: #409eff;
    margin-left: 10px;
    cursor: pointer;
  }

}
</style>
