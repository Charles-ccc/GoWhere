<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword">
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" 
                    v-for="(item, index) of list" 
                    :key="index"
                    @click="handleCityClick(item.name)"
                    >
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">没有找到对应的城市或地区</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState, mapActions} from 'vuex'
export default {
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
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
    mounted () {
        this.scroll = new BScroll(this.$refs.search)
    },
    watch: {
        keyword() {
            // 进行函数节流
            if(this.timer) {
                clearTimeout(this.timer)
            }
            // 如果输入框为空，就把列表清空
            if(!this.keyword) {
                this.list = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) {
                    // 把每个字母下的数组进行一次遍历
                    this.cities[i].forEach((value) => {
                        // spell name 是json数据里的，如果能搜索到关键词
                        if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    });
                }
                this.list = result
            }, 100)
        }
    },
    computed: {
        hasNoData() {
            return !this.list.length
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
    height 0.72rem
    padding 0 0.1rem
    background $bgColor
    .search-input
        box-sizing border-box
        width 100%
        height 0.62rem
        line-height 0.62rem
        padding 0 0.1rem
        text-align center
        border-radius 0.06rem
.search-content
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    z-index 1
    background #eeeeee
    .search-item
        line-height 0.62rem
        padding-left 0.2rem
        background #ffffff
        color #666
</style>

