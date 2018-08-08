<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl">
                        <p class="icon-desc">{{item.desc}}</p>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    props: {
        iconList: Array
    },
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                autoplay: false
            }
        }
    },
    computed: {
        pages () {
            const pages =[]
            // 遍历iconList，通过算法，每页展示8条
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index / 8)
                if(!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
* 
    touch-action: none
.icons >>> .swiper-pagination-bullet-active
    background: #00bcd4
.icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
    .swiper-pagination
        bottom 3px
.icons
    padding-top: .1rem
    text-align: center
    .icon
        overflow: hidden
        float: left
        width: 25%
        height: 0;
        padding-bottom 23%
        padding-top: .1rem
        .icon-img
            box-sizing: border-box
            .icon-img-content
                width 1.1rem;
                height 1.1rem;
                display: inline-block
                margin: 0 auto
                height: 100%
            .icon-desc
                margin-top 0.1rem
                text-align center
                font-size 0.28rem
                color #212121
                ellipsis()
</style>
