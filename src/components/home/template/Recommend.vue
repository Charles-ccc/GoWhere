<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <router-link tag="li" 
                class="item border-bottom" 
                v-for="(item,index) in recommendList" 
                :key="index"
                :to="'/detail/' + item.id"
            >
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">立即预约</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        recommendList:Array
    },
    data() {
        return {
            swiperOption: {
                loop: false
            }
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
