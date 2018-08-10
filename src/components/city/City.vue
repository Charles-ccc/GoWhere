<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './template/Header'
import CitySearch from './template/Search'
import CityList from './template/List'
import CityAlphabet from './template/Alphabet'
export default {
    data() {
        return {
            cities: {},
            hotCities: [],
            letter: ''
        }
    },
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    mounted() {
        this.getCityInfo()
    },
    methods: {
        getCityInfo() {
            axios.get('/api/city.json')
            .then((res) => {
                if(res.data.ret && res.data) {
                    const data = res.data.data
                    this.cities = data.cities
                    this.hotCities = data.hotCities
                }
            })
            .catch((error) => {

            })
        },
        handleLetterChange(letter) {
            // 接收到从Alphabet.vue传递过来的值
            this.letter = letter
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>
