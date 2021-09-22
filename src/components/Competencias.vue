<template>
    <h1 id="title_compe">Competências</h1>
    <div id="app">
        <button @click="repoGet">get</button>
        <p>{{ get }}</p>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'Competencias',
    computed: mapState({  
     get: state => state.get   
    }),
     methods: {
      repoGet(){
          this.$store.dispatch("repoGet" , { endpoint : 'colaboradores'})
      }    
    }
}
</script>

<style>
#title_compe {
    color: black;
    text-shadow: 2px 2px orange;
}
</style>
 