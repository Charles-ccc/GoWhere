<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right iconfont arrow-icon">
            城市
            <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeHeader'
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.header
    display flex
    height 0.86rem
    line-height 0.86rem
    background-color $bgColor
    color #fff
    .header-left
        float left
        width 0.64rem
        text-align center
        .back-icon
            text-align: center
            font-size: 0.4rem
    .header-input
        flex 1
        height 0.64rem
        line-height 0.64rem;
        margin-top 0.11rem
        margin-left 0.2rem
        padding-left: 0.2rem
        background-color #fff
        border-radius 0.1rem
        color #ccc
    .header-right
        float right
        width 1.24rem
        text-align center
        .arrow-icon
            margin-left: -0.04rem
            font-size: 0.24rem
</style>