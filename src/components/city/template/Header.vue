<template>
    <div class="header">
        国内城市
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
    overflow hidden
    height 0.86rem
    line-height 0.86rem
    text-align center
    color #ffffff
    background $bgColor
    fon-size 0.3rem
    position relative
    .header-back
        position absolute
        top 0
        left 0
        width 0.64rem
        text-align center
        font-size 0.4rem
        color #fff
</style>
