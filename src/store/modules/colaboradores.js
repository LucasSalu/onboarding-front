import Service from "../../services/colaboradores";

const moduloColaboradores = {
    state: {
        colaboradores: [],
        teste: 0
    },
    getters: {
        todosColaboradores : state=> state.colaboradores,
      },
    actions: {
        setColaboradoresAsync ({ commit }) {
            setTimeout(() => {
              commit('setColaboradores')
            }, 1000)
          }

    },
    mutations: {
        setColaboradores(state) {
            // mutate state
            Service.listar().then((auxColaborador) => state.colaboradores = auxColaborador); 
        },
        setColaboradoresbyName(state, nome){
            Service.listarPorNome(nome).then((auxColaborador) => state.colaboradores = auxColaborador);
        }
    },
};

export default moduloColaboradores;