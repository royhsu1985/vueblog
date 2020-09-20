<template>
    <div>
        <h1>here is add page</h1>
        <p>{{account}}</p>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
      ...mapState(['account']),
  }  
}
</script>