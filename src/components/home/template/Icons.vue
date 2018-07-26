<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="../../../assets/imgs/icons/1.png" alt="">
                <p></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
.icons
    height 0
    padding-bottom 50%
    overflow hidden
    background-color blue
    .icon
        float left
        width 25%
        padding-bottom 25%
        background-color #333
        overflow hidden
        position relative
        .icon-img
            position absolute
            left 0
            bottom 0.44rem
            background-color green
            .icon-img-content
                height 100%
</style>
