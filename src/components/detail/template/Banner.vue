<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg">
            <div class="banner-info">
                <div class="banner-number">
                    <span class="iconfont">&#xe632;</span>
                    <span>{{this.bannerImgs.length}}</span>
                </div>
                <div class="banner-title">{{this.sightName}}</div>
            </div>
        </div>
        <fade-animation>
            <common-gallary 
                :imgs="bannerImgs" 
                v-show="showGallary" 
                @close="handleGarallyClose"
            >
            </common-gallary>
        </fade-animation>
        
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
    name: 'DetailBanner',
    props: {
        sightName: String,
        bannerImg: String,
        bannerImgs: Array
    },
    data() {
        return {
            showGallary: false,
            imgs: []
        }
    },
    components: {
        CommonGallary,
        FadeAnimation
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },
        handleGarallyClose () {
            this.showGallary = false
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
            backgorund-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
            .banner-title
                font-size 0.36rem
                color #fff
                text-shadow 0 1px 2px rgba(0,0,0,0.70)
            .banner-number
                display block
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
