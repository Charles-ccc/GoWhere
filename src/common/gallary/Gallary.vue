<template>
    <div class="gallary" @click="handleGarallyClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item, index) in imgs" :key="index">
                    <img class="gallary-img" :src="item">
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CommonGallary',
        props: {
            imgs: {
                type: Array,
                defult () {
                    return []
                }
            }
        },
        data () {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    observer: true, // 监听到dom结构发生变化时，自我刷新
                    observeParents: true
                }
            }
        },
        methods: {
            handleGarallyClick () {
                this.$emit('close')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .gallary >>> .swiper-container
        overflow inherit    
    .gallary
        display: flex
        flex-direction column
        justify-content center
        z-index: 99
        position fixed
        left 0
        right 0
        top 0
        bottom 0
        background rgba(0,0,0,1)
        .wrapper
            width 100%
            height auto
            .gallary-img
                width 100%
            .swiper-pagination
                color #fff
                bottom -3.6rem              
</style>
