<template>
  <div id="app">
    <!-- 加上 keep-alive 进行缓存数据，减少ajax请求 -->
    <!-- 除了Detail不被缓存 -->
    <keep-alive exclude="Detail"> 
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
* 
    touch-action: none
</style>
