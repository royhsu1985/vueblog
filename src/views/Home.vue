<template>
  <div class="home">
          <section class="home-articles">
    <article v-for="art in filterBySearchKey" :key="art.id">
      <h4 @click="routerToArticle(art.id)">{{art.title}}</h4>
      <i>{{art.date | toDate}}</i>
      <span class="ellipsis">{{art.content|subContent}}</span>
    </article>
    </section>
    <section class="home-side-bar">
      <SideBar :articles="articles" />
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters} from 'vuex'
import axios from 'axios'
import SideBar from '@/components/SideBar'

export default {
  name: 'Home',
  methods:{
    routerToArticle:function(id){
      this.$router.push({name:"Article",params:{id:id}})
    }
  },
  computed:{
    ...mapState(['articles']),
    ...mapGetters(['filterBySearchKey'])
  },
  filters:{
    subContent: (content) =>{
      return content.substring(0,100)
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
    padding: 1rem;
    margin: 3rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    width: 70vw;
    height: 250px;
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
    .ellipsis{
      overflow:hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal;
    }
  }
  .home-side-bar{
    width: 30vw;
    padding: 1rem;
    height: calc(100vh - 20px);
  }
}
</style>
