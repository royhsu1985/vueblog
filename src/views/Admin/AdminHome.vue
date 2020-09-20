<template>
    <div>
        <h1>Admin-Home</h1>
        <p>Account:{{ account}}</p>
        <pre>{{articles}}</pre>
        <b-button @click="fetchArticles">Dipatch fetchArticles</b-button>
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
            test:"test",
        }
    },
    methods:{
        ...mapActions(['fetchArticles']),
    },
  computed:{
      ...mapState(['account','articles']),
  }  
}
</script>