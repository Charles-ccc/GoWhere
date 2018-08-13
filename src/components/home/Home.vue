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
            weekendList: []
        }
    },
    methods: {
        getHomeInfo() {
            axios.get('/api/index.json')
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
    mounted() {
        this.getHomeInfo()
    }
}
</script>

<style scoped>

</style>
