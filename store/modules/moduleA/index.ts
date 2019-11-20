// import { Module, MutationTree, ActionTree, ActionContext } from 'vuex'
import { Module, ActionContext } from 'vuex'
import RootState from '@/store/RootState'
// import * as types from '@/store/mutation-types'
import { example, ExampleStateT } from './example'

// TYPE DEFINITIONS
// type ModuleAContext = ActionContext<ModuleAStateT, RootState>

export interface ModuleAStateT {
  localModAProperty: boolean
  example: ExampleStateT
}

// STATE MANAGEMENT
const state: ModuleAStateT = {
  localModAProperty: true
} as ModuleAStateT

// const mutations: MutationTree<ModuleAStateT> = {
// }

// const actions: ActionTree<ModuleAStateT, RootState> = {
// }

export const moduleA: Module<ModuleAStateT, RootState> = {
  namespaced: true,
  modules: {
    example
    // can add other sub-modules here
  },
  state
  // getters,
  // mutations,
  // actions
}
