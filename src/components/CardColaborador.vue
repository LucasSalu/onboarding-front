<template>
  <Card class="card">
    <template #header> </template>
    <template #title>  {{ colaborador.nome }} <br/>{{colaborador.matricula}}</template>

    <template #content>
      <div class="competencias">
        <h5></h5>
        <h4 class="message" v-for="item in colaborador.competencias" :key="item">
          {{ item.nome }} - {{ item.nivel }}
        </h4>
      </div>
      <div class="times"></div>
    </template>
    <template #footer>
      <Button
        icon="pi pi-pencil"
        label="Editar"
        class="p-button-outlined p-button-warning"
        @click="this.$emit('teste', colaborador)"
      />
    </template>
  </Card>
</template>

<script>
import Card from "primevue/card";

export default {
  name: "CardColaborador",
  components: {
    Card,
  },
  emits: ["teste"],
  props: ["colaborador"],
  data() {
    return {};
  },
  methods: {
    teste() {
    },
    mounted(){
      this.Form = "salu";
    }
  },
};
</script>

<style scoped>
.card {
  padding: 10px;
  margin: 0 15px 15px 0;
  width: 330px;
  height: 300px;
  float: left;
  overflow: hidden;
  position: sticky;
  border: solid 6px #d3d3d3;
  border-radius: 10px;
}
.card:hover {
  overflow: auto;
}
.card::-webkit-scrollbar {
  width: 12px;
}

.card::-webkit-scrollbar-track {
  background: #dcdcdc; /* color of the tracking area */
}

.card::-webkit-scrollbar-thumb {
  background-color: #808080; /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 3px solid #808080; /* creates padding around scroll thumb */
}
.card {
  text-align: center;
}
.message {
  padding: 4px;
  border: 2px #9798e9 solid;
  background-color: #ffffff;
  color: #9798e9;
  margin: 3px;
  border-radius: 10px;
}
</style>

