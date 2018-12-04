import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // vuex的配置
  state: {
    checkedTutor: 1
  }
})

export default store
