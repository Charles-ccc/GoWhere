<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" 
                         v-for="(item, index) in hotCities" 
                         :key="index"
                         @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(itemList, key) in cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" 
                         v-for="(innerItem, index) in itemList" 
                         :key="index"
                         @click="handleCityClick(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState, mapActions} from 'vuex'
export default {
    props: {
        cities: Object,
        hotCities: Array,
        letter: String
    },
    data() {
        return {
        }
    },
    methods: {
        handleCityClick(city) {
            // 触发actions下的changeAcCity,并把city传过去
            // this.$store.dispatch('changeAcCity', city) 
            // 用了...mapMutations就改下为
            this.changeAcCity(city)
            this.$router.push('/')
        },
        ...mapActions(['changeAcCity'])
    },
    computed: {
        // 使用mapState把vuex的数据映射到本组件的computed属性里
        // ...mapState(['city'])
        // 另一种写法，这样写的话，调用就不用 this.$store.state.city 了
        ...mapState({currentCity: 'city'})
        
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch: {
        // 监听letter的变化
        letter() {
            // console.log(this.letter)
            // 借用better-scroll接口
            if(this.letter) {
                const element = this.$refs[this.letter][0]
                // 不加[0]，会是一个数组，不符合better-scroll的要求
                // console.log(element)
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
* 
    touch-action: none
.border-topbottom
    &:before
        border-color #cccccc
    &:after
        border-color #cccccc
.border-bottom
    &:before
        border-color #cccccc
.list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
.title
    line-height 0.54rem
    background #eeeeee
    padding-left 0.2rem
    color #666666
    font-size 0.26rem
.button-list
    padding 0.1rem 0.6rem 0.1rem 0.1rem
    overflow hidden
    .button-wrapper
        float left
        width 33.33%
        .button
            margin 0.1rem
            padding 0.1rem 0
            text-align center
            border 0.02rem solid #00bcd4
            border-radius 0.06rem
.item-list
    .item
        line-height 0.76rem
        padding-left 0.2rem
</style>
