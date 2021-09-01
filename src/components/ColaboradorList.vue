<template>
  <div class="pagina">
    <div>
      <h1>Colaboradores</h1>
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText
          class="menu"
          v-on:input="mudancaFiltro"
          type="text"
          v-model="filtroColaborador"
          placeholder="Pesquisar Colaborador"
        />
        <Dropdown
          class="menu"
          v-on:change="mudancaFiltro"
          v-model="filtroCompetencia"
          :options="competencias"
          optionLabel="nome"
          placeholder="Selecione Competência"
        />
      </span>
      <Button @click="openForm" label="+ Adicionar"> </Button>
    </div>

    <div class="container-cards">
      <CardColaborador
        @teste="formEditar"
        v-for="item in colaborador"
        :key="item"
        :colaborador="item"
      />
    </div>
    <Dialog
      header="Cadastrar Colaborador"
      :visible="displayBasic"
      id="header"
      :style="{ width: '550px' }"
      ><form>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col-12 p-md-12">
            <label for="firstname">Nome</label>
            <InputText id="firstname" type="text" v-model="nome" />
          </div>
          <div class="p-field p-col-12 p-md-12">
            <label for="matricula">Matricula</label>
            <InputText id="matricula" type="number" v-model="matricula" />
          </div>
          <div class="p-field p-col-5 p-md-5">
            <label for="state">Competência</label>
            <Dropdown
              inputId="competencia"
              v-model="selectedCompetencia"
              :options="competencias"
              optionLabel="nome"
              placeholder="competencias"
            />
          </div>
          <div class="p-field p-col-5 p-md-5">
            <label for="state">Nível</label>
            <Dropdown
              inputId="nivel"
              v-model="selectedNivel"
              :options="niveis"
              optionLabel="nivel"
              placeholder="Níveis"
            />
          </div>
          <div class="p-field">
            <label for="state" style="color: white">...</label>

            <Button  label="+" v-on:click="adicionarCompetencia(selectedCompetencia,selectedNivel)" ></Button>
          </div>
          <span class="message" v-for="item in formCompetencias" :key="item">
            {{ item.nome }}: {{ item.nivel }}
            <a class="mouse-pointer" v-on:click="excluircompetencia(item)">x</a>
          </span>
        </div>
      </form>
      <template #footer>
        <Button
          label="Fechar"
          icon="pi pi-times"
          @click="closeForm"
          class="p-button-text"
        />
        <Button
          label="Cadastrar"
          icon="pi pi-check"
          v-on:click="formSubmit"
          autofocus
        />
      </template>
    </Dialog>
  </div>
</template>
<script>
import CardColaborador from "./CardColaborador.vue";
//import ColaboradorForm from "./ColaboradorForm.vue";
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";

export default {
  name: "ColaboradorList",
  data() {
    return {
      colaborador: [],

      //filtro
      filtroCompetencia: "",
      filtroColaborador: "",
      competencias: [],

      //form
      displayBasic: false,
      nome: "",
      matricula: "",
      formCompetencias:[],
      selectedCompetencia: "",
      selectedNivel: "",

      niveis: [
        { nivel: "Nenhum" },
        { nivel: "Basico" },
        { nivel: "Intermediario" },
        { nivel: "Bom" },
        { nivel: "Avançado" },
      ],
    };
  },
  components: {
    CardColaborador,
    //ColaboradorForm,
    Dialog,
    Dropdown,
  },
  methods: {
    async getColaboradores() {
      const req = await fetch("http://localhost:3000/colaborador");
      const data = await req.json();
      this.colaborador = data;
    },

    async getCompetencias() {
      const req = await fetch("http://localhost:3000/competencias");
      const data = await req.json();
      this.competencias = data;
    },
    mudancaFiltro() {
      if (this.filtroColaborador) {
        console.log("asd");
      } else if (this.filtroCompetencia) {
        console.log("asd");
      }
    },
    resetaForm() {
      this.nome = null;
      this.selectedCompetencia = null;
      this.matricula = null;
      this.selectedNivel = null;
      this.formCompetencias = [];
    },

    openForm() {
      this.resetaForm();
      this.displayBasic = true;
    },

    closeForm() {
      this.resetaForm();
      this.displayBasic = false;
    },
    formSubmit() {
      console.log("submit");
    },

    //Form editar
    formEditar(colaborador) {
      this.nome = colaborador.nome;
      this.matricula = colaborador.matricula;
      this.formCompetencias = colaborador.competencias.slice();
      this.displayBasic = true;
      console.log(colaborador);
    },
    excluircompetencia(habilidade) {
      var index = this.formCompetencias.indexOf(habilidade);
      if (index > -1) {
        this.formCompetencias.splice(index, 1);
      }
      console.log(index);
    },
    adicionarCompetencia( competencia,  nivel){
    
    if(competencia && nivel){
    var aux = { nome : competencia.nome  , nivel: nivel.nivel} 
    console.log(nivel)
    this.formCompetencias.push(aux);
    }

  },
  },

  mounted() {
    this.getColaboradores();
    this.getCompetencias();
  },
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