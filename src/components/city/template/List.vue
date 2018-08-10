<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">深圳</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="(item, index) in hotCities" :key="index">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(itemList, key) in cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="(innerItem, index) in itemList" :key="index">
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props: {
        cities: Object,
        hotCities: Array,
        letter: String
    },
    data() {
        return {
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch: {
        letter() {
            // console.log(this.letter)
            // 借用better-scroll接口
            if(this.letter) {
                const element = this.$refs[this.letter][0]
                // 不加[0]，会是一个数组，不符合better-scroll的要求
                // console.log(element)
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
* 
    touch-action: none
.border-topbottom
    &:before
        border-color #cccccc
    &:after
        border-color #cccccc
.border-bottom
    &:before
        border-color #cccccc
.list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
.title
    line-height 0.54rem
    background #eeeeee
    padding-left 0.2rem
    color #666666
    font-size 0.26rem
.button-list
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    overflow hidden
    .button-wrapper
        float left
        width 33.33%
        .button
            margin 0.1rem
            padding 0.1rem 0
            text-align center
            border 0.02rem solid #00bcd4
            border-radius 0.06rem
.item-list
    .item
        line-height 0.76rem
        padding-left 0.2rem
</style>
