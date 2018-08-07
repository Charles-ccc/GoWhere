<template>
    <div>
        <div class="weekend-title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="(item,index) in weekendList" :key="index">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
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
                autoplay: false,
                loop: false
            },
            weekendList: [{
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg',
                title: '深圳必游TOP10',
                desc: '来到深圳，你需要来这里签到'
            },{
                imgUrl: 'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
                title: '欢乐长隆',
                desc: '世界欢乐汇聚长隆'
            },{
                imgUrl: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
                title: '当地人游深圳',
                desc: '当地人带你发现不一样的深圳'
            },{
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/eb/e4b181a6957c36.jpg_r_640x214_4abbdbc0.jpg',
                title: '情侣好去处',
                desc: '手牵手，一起走到老'
            },{
                imgUrl: 'http://img1.qunarzz.com/sight/source/1505/69/e899202f7abddf.jpg_r_640x214_81b6b528.jpg',
                title: '周末亲子游',
                desc: '这个周末就开启美妙的亲子时光'
            }]
       }
   } 
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
.weekend-title
    line-height .8rem
    background-color #eeeeee
    text-indent .2rem
ul
    background-color #efefef
.item 
    margin-bottom 0.1rem
    background-color #fff
    .item-img-wrapper
        overflow hidden
        height 0
        padding-bottom 33.9%
        .item-img
            width 100%
            display block
    .item-info
        padding .1rem
        .item-title
            line-height .58rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #f55
            ellipsis()
</style>
