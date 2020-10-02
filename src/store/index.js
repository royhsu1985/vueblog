import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'
import { db } from './firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles:[],
    searchKey:"",
    account:"RoyHsu",
    focusId:"",
    articleChanged:false,
  },
  mutations: {
    fetchArticles:(state,payload) => {
      state.articles = payload
    },
    changeSearchKey:(state, payload) =>{
      state.searchKey = payload
    },
    changeFocusId:(state,payload)=>{
      state.focusId = payload
    },
    addArticle:(state,payload)=>{
      state.articles = [payload, ...state.articles ]
      state.articleChanged = !state.articleChanged

    },
    updateArticle:(state,{id, newArticle}) =>{
      const index = state.articles.map(art => art.id).indexOf(id)
      state.articles[index] = newArticle
      state.articleChanged = !state.articleChanged
    },
    deleteArticle:(state,payload) => {
      const index = state.articles.map(art => art.id).indexOf(payload)
      state.articles.splice(index,1)
    },
  },
  actions: {
    fetchArticles: async ({commit}) =>{
    //     const api = "https://us-central1-expressapi-8c039.cloudfunctions.net/app/article"
    //  const result = await axios.get(api)
    //  console.log(result.data.data)
    //  const payload = result.data.data
    //   commit('fetchArticles',payload)
    //   console.log(db)
    const Ref = db.collection("Articles")
    const result = await Ref.get()
    var payload = []
    result.forEach(art =>{
      payload.push({id:art.id,...art.data()})
      commit('fetchArticles',payload)
    })
    },
    changeSearchKey:({commit},payload) =>{
      commit('changeSearchKey',payload)
    },
    changeFocusId:({commit},payload)=>{
      commit('changeFocusId',payload)
    },
    addArticle:({commit},payload)=>{
      // const ID = _.random(1000)
      // payload.id = "newArt1"+ ID
      // commit('addArticle',payload)
      const Ref = db.collection("Articles")
      const addRef = Ref.add(payload)
      commit('addArticle',{id:addRef.id, ...payload})
    },
    updateArticle: ({commit},payload)=>{
      commit('updateArticle',payload)
    },
    deleteArticle:({commit},payload)=>{
      commit('deleteArticle',payload)
    }
  },
  getters:{
    filterBySearchKey: state =>{
    
      if(state.searchKey === ""){
        return state.articles
      }else{
        //可以searchKey不用輸入全部 
        return state.articles.filter(art=> art.title.match(state.searchKey) || art.content.match(state.searchKey))
      }
    },
    filterById:state =>{
      if(state.articles.length){
        return state.articles.filter(art => art.id ==state.focusId)[0]
      }
    },
  }
})
