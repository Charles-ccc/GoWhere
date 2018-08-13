<template>
    <ul class="list">
        <li 
            class="item" 
            v-for="item in letters" 
            :key="item"
            :ref="item"
            @click="handleLetterClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
// 手指滑动到哪个字母的时候，右侧的列表也相应滑动，根据字母到顶部的距离和每个字母的高度来计算
export default {
    props: {
        cities: Object
    },
    data() {
        return {
            touchStatus:  false,
            startY: 0,
            time: null
        }
    },
    // 当数据传递进来之后再渲染该组件，然后再去执行updated()
    updated() {
        // 获取A距离顶部的高度
        this.startY = this.$refs['A'][0].offsetTop
    },
    computed: {
        // 根据下标找到对应的位置，需要一个数组存储字母列表
        letters() {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }  
    },
    methods: {
        handleLetterClick(e) {
            this.$emit('change', e.target.innerText)
            // 需要把e.target.innerText这个字母传递给List.vue，经过City.vue进行转发
        },
        handleTouchStart() {
            this.touchStatus = true
        },
        handleTouchMove(e) {
            if(this.touchStatus) {
                // 函数节流，因为手指滚动时，触发的频率太高。
                if(this.timer){
                    clearTimeout(this.timer)
                }
                // 延迟16ms执行，假设在16ms间有重复手指滚动，就把上次的清除掉，重新执行
                // 有效降低触发频率
                this.timer = setTimeout(() => {
                    // 滚动时手指距离header的差值
                    const touchY = e.touches[0].clientY - 79
                    const index = Math.floor((touchY - this.startY) / 20)
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change', this.letters[index])
                    }
                }, 16)
                
            }
        },
        handleTouchEnd() {
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
* 
    touch-action: none
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
