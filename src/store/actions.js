// 可以写一些异步的方法
export default {
    changeAcCity(ctx, city) {
        // ctx 是方法上下文方法和参数
        // commit 是调用mutations的方法
        ctx.commit('changeMuCity', city)
    }
}