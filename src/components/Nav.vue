<template>
  <div id="nav">
    <router-link to="/colaboradores"><a href=""><img src="../assets/logo.png" alt="" width="80"></a></router-link> 
    <router-link to="/colaboradores"><a>Colaboradores</a></router-link> 
    <router-link to="/habilidades"><a>Habilidades</a></router-link>
    <router-link to="/"><a>Projetos</a></router-link>
  </div>
</template>

<script>

export default {
  nome: "Nav",
};
</script>

<style scoped>

 #nav{
   background-color: 	#FFA500;
   border: 4px 0 4px solid  #111;
   padding: 15px ;
   display: flex;
   align-items: center;

 }
 #nav  #logo-url {
   margin: auto;
   margin-left: 0;
 }

#nav a{
  color: black;
  text-decoration: none;
  margin: 12px;
  transition: .5s;
}
#nav a:hover{
  color: #FFF;
}
</style>