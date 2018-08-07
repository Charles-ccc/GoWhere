<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="(item,index) in recommendList" :key="index">
                <img class="item-img" :src="item.imgUrl">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">立即预约</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
   data() {
       return {
            swiperOption: {
                loop: false
            },
            recommendList: [{
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1807/99/992c99c98928c509a3.water.jpg_200x200_fc4df6ea.jpg',
                title: '深圳欢乐谷',
                desc: '狂欢无罪，够胆你就来'
            },{
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
                title: '深圳小梅沙海洋世界',
                desc: '这里特别受欢迎哟(๑‾ ꇴ ‾๑)'
            },{
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/6f/6f885ea8b30c67bca3.water.jpg_200x200_21b03a9c.jpg',
                title: '世界之窗',
                desc: '全球微缩景点，精彩演绎、娱乐项目应有尽有'
            },{
                imgUrl: 'http://img1.qunarzz.com/sight/p0/201405/23/20f7be15157e2341055c05d40a5b57b9.jpg_200x200_08c98b9d.jpg',
                title: '东部华侨城大侠谷',
                desc: '深圳唯美、动感的生态主题乐园'
            },{
                imgUrl: 'http://img1.qunarzz.com/sight/p0/1805/6f/6f885ea8b30c67bca3.water.jpg_200x200_21b03a9c.jpg',
                title: '深圳野生动物园',
                desc: '放养式动物园让你和动物们“零距离”'
            }]
       }
   } 
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
.recommend-title
    line-height .8rem
    background-color #eeeeee
    text-indent .2rem
.item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
        width 1.7rem
        height 1.7rem
        padding .1rem
        display block
    .item-info
        flex 1
        padding .1rem
        min-width 0
        .item-title
            line-height .58rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #f55
            ellipsis()
        .item-button
            background-color #ff9300
            margin-top .2rem
            padding 0 .2rem
            border-radius .06rem
            color #fff
</style>
