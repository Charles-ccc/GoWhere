<template>
    <ul class="list">
        <li 
            class="item" 
            v-for="(item, key) in cities" 
            :key="key"
            @click="handleLetterClick"
        >
            {{key}}
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        cities: Object
    },
    methods: {
        handleLetterClick(e) {
            this.$emit('change', e.target.innerText)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0 
    bottom 0
    width 0.4rem
    .item
        line-height 0.4rem
        text-align text
        color $bgColor
</style>
