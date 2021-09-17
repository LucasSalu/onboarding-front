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
        @detalhes="formEditar"
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
            <InputText
              id="matricula"
              type="number"
              v-model="matricula"
              :disabled="flagEditar"
            />
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

            <Button
              label="+"
              v-on:click="
                adicionarCompetencia(selectedCompetencia, selectedNivel)
              "
            ></Button>
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
          @click="formSubmit"
          autofocus
        />
      </template>
    </Dialog>
  </div>
</template>
<script>
import CardColaborador from "./cards/CardColaborador.vue";
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";
import Colaborador from "../services/colaboradores";

export default {
  name: "ColaboradorList",
  data() {
    return {
      colaborador: [],

      //filtro
      filtroCompetencia: "",
      filtroColaborador: "",
      competencias: [],
      flagEditar: Boolean,

      //form
      displayBasic: false,
      id: null,
      nome: "",
      matricula: "",
      formCompetencias: [],
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
    async listarColaboradores() {
      /*       const req = await fetch("http://localhost:8081/hello");
      const data = await req.json(); */

     this.colaborador = (await Colaborador.listar()).data;

/*       try {
        const response = await fetch("http://localhost:8080/colaboradores");
        await response.json().then((data) => {
          console.log(data);
        });
      } catch (err) {
        console.log(err);
      } */
    },

    async listarCompetencias() {
      const req = await fetch("http://localhost:3000/competencias");
      const data = await req.json();
      this.competencias = data;
    },

    mudancaFiltro() { 
       Colaborador.listarPorNome(this.filtroColaborador).then(data =>
       this.colaborador = data.data)
    },
    resetaForm() {
      (this.id = null), (this.nome = null);
      this.selectedCompetencia = null;
      this.matricula = null;
      this.selectedNivel = null;
      this.formCompetencias = [];
    },

    openForm() {
      this.resetaForm();
      this.flagEditar = false;
      this.displayBasic = true;
    },

    closeForm() {
      this.resetaForm();
      this.displayBasic = false;
    },

    formSubmit() {
      const colaborador = {
        idcolaborador: this.id,
        nome: this.nome,
        matricula: this.matricula,
      };
      if (this.flagEditar) {
        Colaborador.editar(colaborador);
      } else {
        Colaborador.salvar(colaborador);
      }

      this.listarColaboradores();
    },

    //Form editar
    formEditar(colaborador) {
      this.flagEditar = true;
      this.id = colaborador.idcolaborador;
      this.nome = colaborador.nome;
      this.matricula = colaborador.matricula;
   // this.formCompetencias = colaborador.competencias.slice();
      this.displayBasic = true;
    },
    excluircompetencia(habilidade) {
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
  },

  mounted() {
    this.listarColaboradores();
    this.listarCompetencias();
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