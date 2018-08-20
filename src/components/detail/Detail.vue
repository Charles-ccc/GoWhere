<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from './template/Banner'
import DetailHeader from './template/Header'
import DetailList from './template/List'
export default {
    data() {
        return {
            list: [{
                title: '成人票'
            },{
                title: '儿童票'
            },{
                title: '学生票'
            },{
                title: '特惠票'
            }]
        }
    },
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height 20rem;
</style>
