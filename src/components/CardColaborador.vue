<template>
  <Card class="card">
    <template #header>
      <Button
        icon="pi pi-pencil"
        label="Editar"
        class="p-button-outlined p-button-warning"
      />
    </template>
    <template #title> {{ colaborador.nome }}</template>

    <template #content>
      <div class="competencias">
        <h2 >Competencias :</h2>
        <h4 v-for="item in colaborador.competencias" :key="item"  >{{item.nome}} - {{item.nivel}} </h4>
      </div>
      <div class="times"></div>
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
  props: ["colaborador"],
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
</style>

