<template>
  <div id="nav" class="background">
    <Nav />
    <div class="p-col-10 p-md-10 p-lg-11 main-container " >
      <router-view />
    </div>
    <Footer />
  </div>
  
</template>

<script>
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
export default {
  name: "App",
  components: {
    Nav,
    Footer
  },
};
</script>

<style>
* {
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.main-container {
  min-width: 740px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 100px;
  min-height: 800px;
  border-radius: 15px;
  overflow:auto;
  background-color: rgba(255 , 255, 255, 0.5);
  
}
.background{
  background-image: url("./assets/NOC.png");
  background-size: cover;
}

</style>
