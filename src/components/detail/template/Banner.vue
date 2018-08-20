<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_600x330_4ae7abf5.jpg">
            <div class="banner-info">
                <div class="banner-number">
                    <span class="iconfont">&#xe632;</span>
                    <span>16</span>
                </div>
                <div class="banner-title">深圳小梅沙海洋世界</div>
            </div>
        </div>
        <common-gallary 
            :imgs="imgs" 
            v-show="showGallary" 
            @close="handleGarallyClose"
        >
        </common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
    name: 'DetailBanner',
    data() {
        return {
            showGallary: false,
            imgs: [
                "http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_r_800x800_25544683.jpg",
                "http://img1.qunarzz.com/sight/p0/1412/29/b332c6de775de6b9c2ca2cafca33a963.water.jpg_r_800x800_8deed802.jpg",
                "http://img1.qunarzz.com/sight/p0/201301/05/daf2f35b37f7c07693835fbb.png_r_800x800_caa083b3.png",
                "http://img1.qunarzz.com/sight/p0/201301/05/a998eae60618e52593835fbb.png_r_800x800_d1e2fee8.png",
                "http://img1.qunarzz.com/sight/p0/201301/05/4487433de3574f7f93835fbb.png_r_800x800_6ce7545e.png"
            ]
        }
    },
    components: {
        CommonGallary
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
