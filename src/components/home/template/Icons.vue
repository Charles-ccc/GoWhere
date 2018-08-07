<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl">
                        <p class="icon-desc">{{item.desc}}</p>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    data() {
        return {
            iconList:[{
                id: '0001',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                desc: '景点门票'
            },{
                id: '0002',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
                desc: '水上乐园'
            },{
                id: '0003',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                desc: '游乐场'
            },{
                id: '0004',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
                desc: '海洋馆'
            },{
                id: '0005',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                desc: '动植物园'
            },{
                id: '0006',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
                desc: '玩转长隆'
            },{
                id: '0007',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
                desc: '城市观光'
            },{
                id: '0008',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png',
                desc: '海滨沙滩'
            },{
                id: '0009',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png',
                desc: '汽车票'
            },{
                id: '0010',
                imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
                desc: '全部玩乐'
            }]
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
.icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
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
