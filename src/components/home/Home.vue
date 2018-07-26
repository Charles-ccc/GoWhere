<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>

<script>
import HomeHeader from './template/Header'
import HomeSwiper from './template/Swiper'
import HomeIcons from './template/Icons'
export default {
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons
    }
}
</script>

<style scoped>

</style>
