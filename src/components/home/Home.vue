<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
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
    methods: {
        getHomeInfo() {
            axios.get('/api/index.json')
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
        },
        // getHomeInfoSucc(res) {
        //     console.log(res)
        // }
    },
    mounted() {
        this.getHomeInfo()
    }
}
</script>

<style scoped>

</style>
