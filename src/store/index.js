import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)



// 创建一个仓库
export default new Vuex.Store({
    state,
    actions,
    mutations,
    // getters: {
    //     doubleCity(state) {
    //         return state.city + ' ' + state.city
    //     }
    // }
})