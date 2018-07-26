<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item, id) in swiperList" :key="id">
                <img :src="item.imgUrl" class="swiper-img" alt="去哪儿门票">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList: [{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/3b/ef86879aa50e3002.jpg_750x200_2a108508.jpg'
            }, {
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/a1/41a802abfc4f0202.jpg_750x200_9f0cf69c.jpg'
            }, {
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/e8/ad9398da40eb6402.jpg_750x200_f9e744db.jpg'
            }]
        }
    },
    computed: {
        
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
        height: 0
        // 根据图片的宽高比然后将高度撑开，31.25%事根据宽度来计算的
        // 这样在网速比较差的时候，不会加载抖动
        padding-bottom: 31.25%
        background: #eee
        .swiper-img
            width: 100%
</style>
