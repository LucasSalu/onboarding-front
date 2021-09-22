import { http } from "./config"

export default {
    listar: (endpoint) => {
        return http.get(endpoint);
    },
    listarPorNome: (nome , endpoint) => {
        return http.get(endpoint + nome);
    },
    salvar: (colaborador , endpoint) => {
        return http.post(endpoint, colaborador)
    },
    editar: (colaborador , endpoint) => {
        return http.put(endpoint + colaborador.idcolaborador.toString(), colaborador)
    },
}