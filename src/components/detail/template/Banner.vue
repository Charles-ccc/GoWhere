<template>
    <div class="banner">
        <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_600x330_4ae7abf5.jpg">
        <div class="banner-info">
            <div class="banner-number">
                <span class="iconfont">&#xe632;</span>
                <span>16</span>
            </div>
            <div class="banner-title">深圳小梅沙海洋世界</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailBanner',
    data() {
        return {

        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        overflow hidden
        height 0
        padding-bottom 55%
        position relative
        .banner-img
            width 100%
        .banner-info
            position absolute
            left 0.2rem
            bottom 0.36rem
            right 0.2rem
            .banner-title
                font-size 0.36rem
                color #fff
                text-shadow 0 1px 2px rgba(0,0,0,0.70)
            .banner-number
                width 1.2rem
                height 0.4rem
                line-height 0.4rem
                margin-bottom 0.1rem
                background rgba(0,0,0,.5)
                border-radius 0.2rem
                font-size 0.24rem
                color #ffffff
                text-align center
</style>
