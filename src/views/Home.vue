<template>
  <div class="home">
    <article v-for="art in articles" :key="art.id">
      <h3 @click="routerToArticle(art.id)">{{art.title}}</h3>
      <i>{{art.date}}</i>
      <span>{{art.content|subContent}}</span>
    </article>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
    mounted(){
    const api = "https://us-central1-expressapi-8c039.cloudfunctions.net/app/article"
    axios.get(api)
    .then(result=>{
      this.articles = result.data.data
    })
  },
  data(){
    return{
      articles:null,
    }
  },
  methods:{
    routerToArticle:function(id){
      this.$router.push({name:"Article",params:{id:id}})
    }
  },
  filters:{
    subContent: (content) =>{
      return content.substring(0,200)
    }
  }
}
</script>
<style lang="scss" scoped>
  article{
    padding: 1rem;
    margin: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    width: 80vw;
    height: 300px;
    background-color: #f0f0e8;
    border-radius: 1rem;
    i{
      color:#cccccc
    }
  }
</style>
