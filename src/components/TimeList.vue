<template>
  <div class="pagina">
    <div>
      <h1>Times</h1>
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText
          class="menu"
          v-on:input="mudancaFiltro"
          type="text"
          v-model="filtroProjeto"
          placeholder="Pesquisar Colaborador"
        />
        <Dropdown
           class="menu" v-on:change="mudancaFiltro" v-model="filtroCompetencia"
          :options="competencias"
           optionLabel="nome"
           placeholder="Selecione Competência"
        />
      </span>
      <Button label="+ Adicionar" @click="abrirForm"> </Button>
    </div>
    <div class="container-cards">
      <CardTime @formEditar="formEditar" v-for="item in times" :key="item" :time="item" />
    </div>
  <Dialog
    header="Cadastrar Time" :visible="displayBasic" id="header" :style="{ width: '550px' }" >
    <form>
      <div class="p-fluid p-formgrid p-grid">
        <div class="p-field p-col-12 p-md-12">
          <label for="firstname">Nome</label>
          <InputText id="firstname" type="text" v-model="formNome" />
        </div>
        <div class="p-field p-col-12 p-md-12">
          <label for="codigo">Codigo</label>
          <InputText id="codigo" type="number" v-model="formCodigo" />
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

        <span class="message" v-for="item in colaboradoresTime" :key="item">
          {{ item.nome }}: {{ item.nivel }}
          <a class="mouse-pointer" v-on:click="excluirColaborador(item)">x</a>
        </span>

      </div>
    </form>
    <template #footer>
      <Button
        label="Fechar"
        icon="pi pi-times"
        @click="fecharForm"
        class="p-button-text"
      />
      <Button
        label="Cadastrar"
        icon="pi pi-check"
        
        autofocus
      />
    </template>
  </Dialog>
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown" 
import CardTime from "./cards/CardTime.vue"

export default {
  name: "TimeList",
  components: {
    Dropdown,
    CardTime,
  },
  data() {
    return {
      filtroCompetencia: null,
      filtroProjeto: null,
      competencias: null,
      displayBasic: false,
      time:null,
      colaboradores:null,

      //formulario
      formNome:null,
      formCodigo:null,
      selectedcolaborador:null,
      formValidatorMatricula:null,
      colaboradoresTime:null,


      times: [
        {
          id: 1,
          nome: "Protheus",
          colaboradores: [
            {
              nome: "Lucas",
              matricula: "11231",
              competencias: [
                { nome: "Excel", nivel: "Intermediario" },
                { nome: "Ingles", nivel: "Basico" },
                { nome: "Vue", nivel: "Avançado" },
              ],
            },
          ],
          projetos: [
            {
              id: 1,
              nome: "Alfa",
              competencias: [{ nome: "Vue", nivelRequirido: "Avançado" }],
            },
            {
              id: 2,
              nome: "Omega",
              competencias: [{ nome: "Vue", nivelRequirido: "Avançado" }],
            },
            {
              id: 3,
              nome: "Beta",
              competencias: [{ nome: "Vue", nivelRequirido: "Avançado" }],
            },
          ],
        },
        {
          id: 1,
          nome: "Protheus",
          colaboradores: [
            {
              nome: "Lucas",
              matricula: "11231",
              competencias: [
                { nome: "Excel", nivel: "Intermediario" },
                { nome: "Ingles", nivel: "Basico" },
                { nome: "Vue", nivel: "Avançado" },
              ],
            },
          ],
          projetos: [
            {
              id: 1,
              nome: "Alfa",
              competencias: [{ nome: "Vue", nivelRequirido: "Avançado" }],
            },
            {
              id: 2,
              nome: "Omega",
              competencias: [{ nome: "Vue", nivelRequirido: "Avançado" }],
            },
            {
              id: 3,
              nome: "Beta",
              competencias: [{ nome: "Vue", nivelRequirido: "Avançado" }],
            },
          ],
        },
        {
          id: 1,
          nome: "Protheus",
          colaboradores: [
            {
              nome: "Lucas",
              matricula: "11231",
              competencias: [
                { nome: "Excel", nivel: "Intermediario" },
                { nome: "Ingles", nivel: "Basico" },
                { nome: "Vue", nivel: "Avançado" },
              ],
            },
          ],
          projetos: [
            {
              id: 1,
              nome: "Alfa",
              competencias: [{ nome: "Vue", nivelRequirido: "Avançado" }],
            },
            {
              id: 2,
              nome: "Omega",
              competencias: [{ nome: "Vue", nivelRequirido: "Avançado" }],
            },
            {
              id: 3,
              nome: "Beta",
              competencias: [{ nome: "Vue", nivelRequirido: "Avançado" }],
            },
          ],
        },
        {
          id: 1,
          nome: "Protheus",
          colaboradores: [
            {
              nome: "Lucas",
              matricula: "11231",
              competencias: [
                { nome: "Excel", nivel: "Intermediario" },
                { nome: "Ingles", nivel: "Basico" },
                { nome: "Vue", nivel: "Avançado" },
              ],
            },
          ],
          projetos: [
            {
              id: 1,
              nome: "Alfa",
              competencias: [{ nome: "Vue", nivelRequirido: "Avançado" }],
            },
            {
              id: 2,
              nome: "Omega",
              competencias: [{ nome: "Vue", nivelRequirido: "Avançado" }],
            },
            {
              id: 3,
              nome: "Beta",
              competencias: [{ nome: "Vue", nivelRequirido: "Avançado" }],
            },
          ],
        },
        {
          id: 1,
          nome: "Protheus",
          colaboradores: [
            {
              nome: "Lucas",
              matricula: "11231",
              competencias: [
                { nome: "Excel", nivel: "Intermediario" },
                { nome: "Ingles", nivel: "Basico" },
                { nome: "Vue", nivel: "Avançado" },
              ],
            },
          ],
          projetos: [
            {
              id: 1,
              nome: "Alfa",
              competencias: [{ nome: "Vue", nivelRequirido: "Avançado" }],
            },
            {
              id: 2,
              nome: "Omega",
              competencias: [{ nome: "Vue", nivelRequirido: "Avançado" }],
            },
            {
              id: 3,
              nome: "Beta",
              competencias: [{ nome: "Vue", nivelRequirido: "Avançado" }],
            },
          ],
        },
      ],
    };
  },

  methods: {
    async getColaboradores() {
      const req = await fetch("http://localhost:3000/colaborador");
      const data = await req.json();
      this.colaboradores = data;
      console.log(this.colaboradores)
    },
    mudancaFiltro(){
      console.log("mudancaFiltro");
    },
    formEditar(time){
      
      this.formNome = time.nome;
      this.formCodigo = time.id;
      this.colaboradoresTime = time.colaboradores;

      this.displayBasic = true;
    },
    abrirForm(){
      this.resetarForm();
      this.displayBasic = true;
    },
    fecharForm(){
      this.resetarForm();
      this.displayBasic = false;
    },
    resetarForm(){
      this.formNome=null;
      this.formCodigo=null;
      this.selectedcolaborador=null;
      this.colaboradoresTime=null;
      this.formValidatorMatricula = false;
    },
    excluirColaborador(habilidade) {
    var index = this.formCompetencias.indexOf(habilidade);
    if (index > -1) {
        this.formCompetencias.splice(index, 1);
      }
      console.log(index);
    }   
  },
  mounted(){
    this.getColaboradores();
  }
};
</script>

<style scoped>
.pagina {
  text-align: left;
}

.container-cards {
  margin-top: 10px;
  width: auto;
  display: block;
}
.pagina {
  padding-top: 20px;
  padding-left: 30px;
}
.menu {
  text-align: right;
}
.menu {
  margin-right: 10px;
}
.message {
  padding: 4px;
  border: 2px #9798e9 solid;
  background-color: #ffffff;
  color: #9798e9;
  margin: 3px;
  border-radius: 10px;
}
.mouse-pointer {
  cursor: pointer;
}
</style>