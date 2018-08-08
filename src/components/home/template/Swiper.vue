<template>
    <div class="wrapper">
        <!-- 
        v-if="showSwiper" 
        为了解决自动显示最后一张图
        原因是swiper初次渲染时，swiperList还是从外部传进来的空数组，当axios数据加载后，swiperList里才有数据
        解决是判断length长度，如果为空，就是false，不会创建swiper
         -->
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="(item, id) in swiperList" :key="id">
                <img :src="item.imgUrl" class="swiper-img" alt="去哪儿门票">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    props: {
        swiperList: Array
    },
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            }
        }
    },
    computed: {
        showSwiper () {
            return this.swiperList.length
        }
    },
    methods: {
        
    }
}
</script>

<style lang="stylus" scoped>
* 
    touch-action: none
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        overflow: hidden
        width: 100%
        // height: 2rem
        // 根据图片的宽高比然后将高度撑开，31.25%事根据宽度来计算的
        // 这样在网速比较差的时候，不会加载抖动
        height: 0
        padding-bottom: 27%
        background: #eee
        .swiper-img
            width: 100%
</style>
