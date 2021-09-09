<template>
  <Dialog
    header="Cadastrar Time" :visible="displayBasic" id="header" :style="{ width: '550px' }" >
    <form>
      <div class="p-fluid p-formgrid p-grid">
        <div class="p-field p-col-12 p-md-12">
          <label for="firstname">Nome</label>
          <InputText id="firstname" type="text" v-model="nome" />
        </div>
        <div class="p-field p-col-12 p-md-12">
          <label for="codigo">Codigo</label>
          <InputText id="codigo" type="number" v-model="codigo" />
        </div>
        <div class="p-field p-col-10 p-md-10">
          <label for="state">Colaboradores</label>
          <Dropdown
            inputId="colaborador"
            v-model="selectedcolaborador"
            :options="colaboradores"
            optionLabel="nome"
            placeholder="colaboradores"
          />
        </div>

        <div class="p-field">
          <label for="state" style="color: white">...</label> 
          <Button label="+" ></Button>
        </div>

        <span class="message" v-for="item in colaboradores" :key="item">
          {{ item.nome }}: {{ item.nivel }}
          <a class="mouse-pointer" v-on:click="excluircompetencia(item)">x</a>
        </span>

      </div>
    </form>
    <template #footer>
      <Button
        label="Fechar"
        icon="pi pi-times"
        @click="this.$emit('fecharForm',time)"
        class="p-button-text"
      />
      <Button
        label="Cadastrar"
        icon="pi pi-check"
        
        autofocus
      />
    </template>
  </Dialog>
</template>

<script>

import Dropdown from "primevue/dropdown";

export default {
  name: "TimeForms",

  
  data () {
    return {
      nome: this.time.nome,
      codigo: null,
      selectedcolaborador: null,
      colaboradores: [],
    }

  },
  props:{
      displayBasic:Boolean,
      time:null,
  },components:{
      Dropdown
  },
  methods: {

    closeForm(){
      this.display = false;
    }
  }
};
</script>