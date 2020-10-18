<template>
    <div b-container fluid="sm">
        <div class="row">
            <div class="col-12">
        <h4>最新文章</h4>
        <hr>
        <ul>
            <li v-for=" art in articles" :key="art.id" @click="routerToArticle(art.id)">
                {{art.title}}
            </li>
        </ul>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        articles:Array
    },
    methods:{
        routerToArticle:function(id){
            this.$router.push({name:"Article",params:{id: id}});
        }
    }
};
</script>
<style lang="scss" scoped>
    div{
        width: 18vw;
        position: fixed;
        right: 1rem;
        background-color: #cccccc;
        border-radius: 1rem;
        height: 100%;
        padding: 1rem;
        h4{
            width: 100%;
            display: inline-block;
            line-height: 1.5rem;
            text-align: left;
            text-indent: 1rem;
        }
        hr{
            margin: 5px;
            margin-bottom: 1rem;
        }
        ul{
            li{
                text-align: left;
                margin: 5px 0;
                transition: 0.3s;
                cursor:pointer;

                &:hover{
                    text-decoration-color: underline;
                }
            }
        }
    }
    @media screen and (max-width: 600px){
        div{
            display: none;
        }
    }
</style>