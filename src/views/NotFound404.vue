<template>
<div>
   <h1>404</h1>
    <h3>This Page is NotFound!</h3>
    <b-button @click="goBackHome">Go Back</b-button>
</div>
</template>

<script>
export default {
    methods:{
        goBackHome:function(){
            this.$router.push({name:'Home'})
        }
    }
}
</script>