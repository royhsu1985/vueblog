<template>
  <div class="home">
    <section class="home-articles">
    <article v-for="art in articles" :key="art.id">
      <h3 @click="routerToArticle(art.id)">{{art.title}}</h3>
      <i>{{art.date | toDate}}</i>
      <span>{{art.content|subContent}}</span>
    </article>
    </section>
    <section class="home-side-bar">
      <SideBar :articles="articles" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import SideBar from '@/components/SideBar'

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
    },
     toDate:timestamp=>{
    const date =new Date(timestamp);
    let Y = date.getFullYear();
    let M = date.getMonth();
    let D = date.getDate();
    let H = date.getHours();
    let min = (Array(2).join("0")+ date.getMinutes()).slice(-2);
    return `${Y}/${M+1}/${D} ${H}:${min}`;
   }
  },
  components:{
    SideBar
  }
}
</script>
<style lang="scss" scoped>
.home{
  display: flex;

  article{
    padding-left: 1rem;
    margin: 1rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    width: 75vw;
    height: 200px;
    background-color: #f0f0e8;
    border-radius: 1rem;
    h3{
      cursor: pointer;
      &hover{
        opacity: 0.6;
      }
    }
    i{
      color:#cccccc
    }
    span{
      text-align: left;
      padding-right: 1.5rem;
    }
  }
  .home-side-bar{
    width: 25vw;
    padding: 1rem;
    height: calc(100vh - 56px);
  }
}
</style>
