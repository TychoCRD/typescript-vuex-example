import { Module, GetterTree, MutationTree, ActionTree, ActionContext } from 'vuex'
import RootState from '@/store/RootState'
import * as types from '@/store/mutation-types'

// TYPE DEFINITIONS
type ExampleContext = ActionContext<ExampleStateT, RootState>
// local state needs an interface
// local state items need interfaces
export interface ExampleStateT {
  exampleText: string
}

// STATE MANAGEMENT
const state = {
  exampleText: 'Example Text'
}

const getters: GetterTree<ExampleStateT, RootState> = {
  exampleText (state: ExampleStateT) {
    return state.exampleText
  }
}

// mutations need Mutation
const mutations: MutationTree<ExampleStateT> = {
  [types.HELLO_WORLD] (state: ExampleStateT) {
    state.exampleText = 'Hello World!'
  }
}

// actions need ActionContext<localState, RootState>
const actions: ActionTree<ExampleStateT, RootState> = {
  helloWorld (context: ExampleContext) {
    context.commit(types.HELLO_WORLD)
  }
}

export const example: Module<ExampleStateT, RootState> = {
  state,
  getters,
  mutations,
  actions
}
