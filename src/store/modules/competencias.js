  import Req from '../../services/reqs.js'

 const moduloCompetencias = {
    state: {
        get: {}
    },
    mutations: {
        repoGet(state, data) {
            state.get = data
        }
    },
    actions: {
        async repoGet(context, { endpoint }) {
            var aux;
            await Req.listar(endpoint).then((data) => aux = data.data)
            context.commit("repoGet", aux)
        }
    }
}

export default moduloCompetencias;