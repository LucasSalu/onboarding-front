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
          class="menu"
          v-on:change="mudancaFiltro"
          v-model="filtroCompetencia"
          :options="competencias"
          optionLabel="nome"
          placeholder="Selecione Competência"
        />
      </span>
      <Button label="+ Adicionar" @click="abrirForm"> </Button>
    </div>
    <div class="container-cards">
      <CardTime
        @formEditar="formEditar"
        v-for="item in times"
        :key="item"
        :time="item"
      />
    </div>
    <Dialog
      header="Cadastrar Time"
      :visible="displayBasic"
      id="header"
      :style="{ width: '550px' }"
    >
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
            <Button label="+"></Button>
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
          @click="formSubmit()"
        />
      </template>
    </Dialog>
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown";
import CardTime from "./cards/CardTime.vue";
import Time from "../services/times";

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
      time: null,
      colaboradores: null,
      flagEditar: Boolean,

      //formulario
      formNome: null,
      formCodigo: null,
      selectedcolaborador: null,
      formValidatorMatricula: null,
      colaboradoresTime: null,

      times: [],
    };
  },

  methods: {
    async getTimes() {
      this.times = (await Time.listar()).data;
    },
    async mudancaFiltro() {
      this.times  = (await Time.listarPorNome(this.filtroProjeto)).data;
    },
    formEditar(time) {
      this.flagEditar = true;
      this.formNome = time.nome;
      this.formCodigo = time.idtime;
      this.colaboradoresTime = time.colaboradores;
      this.displayBasic = true;
    },

    abrirForm() {
      this.resetarForm();
      this.displayBasic = true;
      this.flagEditar = false;
    },
    fecharForm() {
      this.resetarForm();
      this.displayBasic = false;
    },
    resetarForm() {
      this.formNome = null;
      this.formCodigo = null;
      this.selectedcolaborador = null;
      this.colaboradoresTime = null;
      this.formValidatorMatricula = false;
    },
    excluirColaborador(habilidade) {
      var index = this.formCompetencias.indexOf(habilidade);
      if (index > -1) {
        this.formCompetencias.splice(index, 1);
      }
      console.log(index);
    },
    adicionarCompetencia(competencia, nivel) {
      if (competencia && nivel) {
        var aux = { nome: competencia.nome, nivel: nivel.nivel };
        console.log(nivel);
        this.formCompetencias.push(aux);
      }
    },
    formSubmit() {
      var time = {};
      if (this.flagEditar) {
        time = {
          idtime: this.formCodigo,
          nome: this.formNome,
        };
        Time.editar(time);
      } else {
        time = {
          idtime: null,
          nome: this.formNome,
        };
        Time.salvar(time);
      }
    },
  },
  mounted() {
    this.getTimes();
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


	