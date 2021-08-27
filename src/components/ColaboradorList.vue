<template>
  <div class="pagina">
    <h1>Colaboradores</h1>
    <Button>+ Adicionar </Button>
    <div class="container-cards" v-for="item in colaborador" :key="item">
      <CardColaborador :colaborador="item" />
    </div>
    <ColaboradorForm :displayBasic="displayBasic" />
  </div>
</template>
<script>
import CardColaborador from "./CardColaborador.vue";
//import ColaboradorForm from "./ColaboradorForm.vue";

export default {
  name: "ColaboradorList",
  components: {
    CardColaborador,
   // ColaboradorForm
  },
  data() {
    return {
      displayBasic: false,
      colaborador: [],
    };
  },
  methods:{
    async getColaboradores(){
      const req = await fetch("http://localhost:3000/colaborador");
      const data = await req.json();
      this.colaborador = data;
    }
  },
    mounted() {
    this.getColaboradores();
  },
};
</script>

<style scoped>
.pagina {
  text-align: left;
}

.container-cards {
  margin-top: 10px;
}
.pagina {
  padding-top: 20px;
  padding-left: 30px;
}
</style>