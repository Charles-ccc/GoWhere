<template>
    <div ref="wrapper">
        <div>
            <div class="item" v-for="(item, index) in list" :key="index">
                <div class="item-title border-bottom">
                    <span class="item-title-icon"></span>
                    {{item.title}}
                </div>
                <div v-if="item.children" class="item-children">
                    <detail-list :list="item.children"></detail-list>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
    export default {
        name: "DetailList",
        props: {
            list: Array
        },
        mounted() {
            this.scroll = new BScroll(this.$refs.wrapper)
        },
    }
</script>

<style lang="stylus" scoped>
.item-title
    line-height 0.8rem
    font-size 0.32rem
    padding 0 0.2rem
    .item-title-icon
        position relative
        left 0.06rem
        top 0.07rem
        display inline-block
        width 0.36rem
        height 0.36rem
        background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right .1rem
        background-size .4rem 3rem
.item-children
    padding 0 0.2rem
    font-size 0.28rem
</style>
