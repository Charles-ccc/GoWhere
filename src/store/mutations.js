export default {
    changeMuCity(state, city) {
        // 用传入的 city 给 state.city 赋值 
        state.city = city
        try {
            localStorage.city = city
        } catch (e) {

        }
    }
}