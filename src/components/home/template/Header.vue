<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right iconfont arrow-icon">
                {{this.city}}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    name: 'HomeHeader',
    props: {
        // city: String
    },
    computed: {
        // 使用mapState把vuex的数据映射到本组件的computed属性里
        ...mapState(['city']),
        // ...mapGetters(['doubleCity'])
    }
}
</script>

<style scoped lang="stylus">
@import '~styles/varibles.styl'
.header
    display flex
    height 0.86rem
    line-height 0.86rem
    background-color $bgColor
    color #fff
    .header-left
        float left
        width 0.64rem
        text-align center
        .back-icon
            text-align: center
            font-size: 0.4rem
    .header-input
        flex 1
        height 0.64rem
        line-height 0.64rem;
        margin-top 0.11rem
        margin-left 0.2rem
        padding-left: 0.2rem
        background-color #fff
        border-radius 0.1rem
        color #ccc
    .header-right
        float right
        min-width 1.04rem
        padding 0 0.1rem
        text-align center
        color #fff
        .arrow-icon
            margin-left: -0.04rem
            font-size: 0.24rem
</style>