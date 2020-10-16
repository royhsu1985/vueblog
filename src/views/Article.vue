<template>
   <article>
       <h2>{{filterById.title}}</h2>
        <i>{{filterById.date}}</i>
        <span v-html="filterById.content"></span>
   </article>
</template>
<script>
import {mapGetters} from 'vuex'
import axios from 'axios'
export default {
    mounted (){
        const id =this.$route.params.id
        this.artId = id
        this.$store.dispatch('changeFocusId',id)
    //     const api = "https://us-central1-expressapi-8c039.cloudfunctions.net/app/article"
    // axios.get(api)
    // .then(result=>{
    //   this.articles = result.data.data
    // })
    },
    data(){
        return {
            artId:null,
            articles:[],
        }
    },
    computed:{
        ...mapGetters(['filterById'])
        // filterById:function(){
        //     return this.articles.filter(art => art.id == this.artId)[0]
        // }
    },
    filters:{
        toDate:timestamp =>{
            const date = new Date(timestamp);
            let Y = date.getFullYear();
            let N = date.getMonth();
            let D = date.getDate();
            let H = date.getHours();
            let min = (Arroy(2).join("0")*date.getMinutes()).slice(-2);
            return `${Y}/${M + 1}/${D} ${H}:${min}`;
        }
    }
}
</script>