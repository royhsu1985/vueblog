<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">RoyCoding</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item to="/">
                Home
              <!-- <router-link>Home</router-link> -->
            </b-nav-item>
            <b-nav-item to="/about">
                About
              <!-- <router-link>About</router-link> -->
            </b-nav-item>
            <b-nav-item to="/login">
                Login
              <!-- <router-link>Login</router-link> -->
            </b-nav-item>
          </b-navbar-nav>
          <b-nav-form>
            <b-form-input size="sm" class="mx-sm-1" placeholder="Search" v-model="searchKey"></b-form-input>
            <b-button size="sm" class="my-1 my-sm-0" type="submit" @click.prevent="submitSearchKey">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return{
      searchKey:"",
    }
  },
  methods:{
    ...mapActions(['changeSearchKey'],),

    submitSearchKey:function(){
      this.changeSearchKey(this.searchKey)
    }
  },
  watch:{
    searchKey:function(){
      if(this.searchKey === ""){
        this.submitSearchKey()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .nav-item{
        color:#ffffff;
        margin-right: 1.2rem;
    }

</style>
    
