import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles:[],
    account:"RoyHsu",
  },
  mutations: {
    fetchArticles:(state,payload) => {
      state.articles = ['a','b','c']
    }
  },
  actions: {
    fetchArticles:({commit}) =>{
      commit('fetchArticles')
    }
  },
})
