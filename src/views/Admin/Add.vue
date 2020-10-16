<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="文章標題"
        label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="formData.title"
          type="text"
          required
          placeholder="Enter Tltle.."
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="文章內容" label-for="textarea">
        <b-form-textarea
            id="textarea"
            type="text"
            v-model="formData.content"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
    ></b-form-textarea>
      </b-form-group>
      <b-button  v-if="!submited" @click.prevent="submitFormData" type="submit" variant="primary">送出</b-button>
      <b-button v-if="!submited" @click.prevent="resetFormData" variant="danger">清除</b-button>
      <b-spinner v-else variant="primary" label="Spinning"></b-spinner>
    </b-form>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
    mounted(){
        if(this.$route.name === "Admin-Edit"){
            const id = this.$route.params.id
            this.mode ='edit'
            this.$store.dispatch('changeFocusId',id)
        }
        this.thisAccount = this.$store.state.account
    },
    data(){
        return{
            mode: "add",
            formData:{
                title:"",
                date:"",
                content:"",
            },
            submited:false,
            thisAccount:null,
        }
    },
    methods:{   
        ...mapActions(['addArticle', 'updateArticle']),

        resetFormData:function(){
            this.formData={
                title:"",
                date:"",
                content:"",
            }
        },
        submitFormData:function(){
            this.submited = true;
            this.formData.date = new Date().getTime()
            if(this.mode =='edit'){
                this.updateArticle({id:this.$route.params.id, newArticle:this.formData})
            }else{
                this.addArticle(this.formData)

            }
        }
    },
  computed:{
      ...mapState(['account', 'articleChanged']),
      ...mapGetters(['filterById']),
  },
  watch:{
      filterById:function(){
          this.formData.title = this.filterById.title
          this.formData.content = this.filterById.content
      },
      articleChanged: function(){
          this.$router.push({name:'Admin-Home'})
      },
  } 
}
</script>