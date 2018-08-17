<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './template/Header'
import HomeSwiper from './template/Swiper'
import HomeIcons from './template/Icons'
import HomeRecommend from './template/Recommend'
import HomeWeekend from './template/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeekend
    },
    data() {
        return {
            // city: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: [],
            lastCity: ''
        }
    },
    computed: {
        ...mapState(['city'])
    },
    methods: {
        getHomeInfo() {
            // 为了实现根据城市改变首页内容，传递城市名
            axios.get('/api/index.json?city=' + this.city)
            .then((res) => {
                res = res.data
                if(res.ret && res.data) {
                    // this.city = res.data.city
                    this.swiperList = res.data.swiperList
                    this.iconList = res.data.iconList
                    this.recommendList = res.data.recommendList
                    this.weekendList = res.data.weekendList
                }
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },
    mounted () {
        this.lastCity = this.city
        this.getHomeInfo()
    },
    activated () {
        // 在使用keep-alive之后，就会有该生命周期函数
        // 重新加载页面就会重新执行 activted
        // 新建一个lastCity变量来存储上一次的城市，如果是相同的，则不会再次进行ajax请求
        if(this.lastCity !== this.city) {
            this.lastCity = this.city
            this.getHomeInfo()
        }
    }
}
</script>

<style scoped>

</style>
