<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
    </div>
</template>

<script>
import HomeHeader from './template/Header'
import HomeSwiper from './template/Swiper'
import HomeIcons from './template/Icons'
import HomeRecommend from './template/Recommend'
export default {
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommend
    }
}
</script>

<style scoped>

</style>
