<template>
  <HeaderMenuComponent/>
  <MapComponent/>
  <div class="content-container">
    <router-view></router-view>
  </div>
</template>
<script setup>
import HeaderMenuComponent from '@/components/HeaderMenu/index.vue'
import MapComponent from '@/components/Map/index.vue'

</script>

<style lang="scss" scoped>
.content-container{
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  pointer-events: none;
}
</style>
