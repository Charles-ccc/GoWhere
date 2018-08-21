<template>
    <div>
        <detail-banner 
            :sightName="sightName" 
            :bannerImg="bannerImg"
            :bannerImgs = "gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './template/Banner'
import DetailHeader from './template/Header'
import DetailList from './template/List'
export default {
    name: "Detail",
    data() {
        return {
            list: [],
            sightName: '',
            bannerImg: '',
            gallaryImgs: []
        }
    },
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    methods: {
        getDetailInfo () {
            axios.get('/api/detail.json', {
                params: {
                    id: this.$route.params.id
                }
            })
            .then((res) => {
                res = res.data
                if(res.ret && res.data) {
                    const data = res.data
                    // console.log(data)
                    this.sightName = data.sightName
                    this.bannerImg = data.bannerImg
                    this.gallaryImgs = data.gallaryImgs
                    this.list = data.categoryList
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
    mounted () {
        this.getDetailInfo()
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height 20rem;
</style>
