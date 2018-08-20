<template>
    <div>
        <div class="item" v-for="(item, index) in list" :key="index">
            <div class="item-title">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            list: Array
        }
    }
</script>

<style lang="stylus" scoped>

</style>
