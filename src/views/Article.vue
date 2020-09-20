<template>
   <article v-if="articles.length">
       <h2>{{filterById.title}}</h2>
        <i>{{filterById.date}}</i>
        <span v-html="filterById.content"></span>
   </article>
</template>
<script>
import axios from 'axios'
export default {
    mounted (){
        const id =this.$route.params.id
        this.artId = id
        const api = "https://us-central1-expressapi-8c039.cloudfunctions.net/app/article"
    axios.get(api)
    .then(result=>{
      this.articles = result.data.data
    })
    },
    data(){
        return {
            artId:null,
            articles:[],
        }
    },
    computed:{
        filterById:function(){
            return this.articles.filter(art => art.id == this.artId)[0]
        }
    }
}
</script>