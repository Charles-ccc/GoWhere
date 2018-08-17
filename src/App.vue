<template>
  <div id="app">
    <!-- 加上 keep-alive 进行缓存数据，减少ajax请求 -->
    <keep-alive>
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
