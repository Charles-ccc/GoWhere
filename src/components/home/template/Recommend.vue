<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom">
                <img class="item-img" src="http://img1.qunarzz.com/sight/p0/1807/99/992c99c98928c509a3.water.jpg_200x200_fc4df6ea.jpg" alt="">
                <div class="item-info">
                    <p class="item-title">深圳欢乐谷</p>
                    <p class="item-desc">狂欢无罪，够胆你就来</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
   data() {
       return {
            recommendList: [{
                
            }]
       }
   } 
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
.recommend-title
    line-height .8rem
    background-color #eeeeee
    text-indent .2rem
.item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
        width 1.7rem
        height 1.7rem
        padding .1rem
        display block
    .item-info
        flex 1
        padding .1rem
        min-width 0
        .item-title
            line-height .58rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #f55
            ellipsis()
        .item-button
            background-color #ff9300
            margin-top .2rem
            padding 0 .2rem
            border-radius .06rem
            color #fff
</style>
