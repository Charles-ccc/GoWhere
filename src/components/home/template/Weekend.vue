<template>
    <div>
        <div class="weekend-title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="(item,index) in weekendList" :key="index">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        weekendList: Array
    },
    data() {
        return {
            swiperOption: {
                autoplay: false,
                loop: false
            }
        }
    } 
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
.weekend-title
    line-height .8rem
    background-color #eeeeee
    text-indent .2rem
ul
    background-color #efefef
.item 
    margin-bottom 0.1rem
    background-color #fff
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 37.09%
        .item-img
            width 100%
            display block
    .item-info
        padding .1rem
        .item-title
            line-height .58rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #f55
            ellipsis()
</style>
