import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import RootState from './RootState'
import { moduleA } from './modules/moduleA/index'

Vue.use(Vuex)

let store: StoreOptions<RootState> = {
  modules: {
    moduleA
  }
}

export default new Vuex.Store<RootState>(store)
