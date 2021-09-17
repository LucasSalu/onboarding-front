import { http } from "./config"

export default {

    listar: () => {
        return http.get('colaboradores');
    },
    listarPorNome: (nome) => {
        return http.get('colaboradores/'+nome);
    },
    
    salvar: (colaborador) => {
        return http.post('colaboradores', colaborador)
    },

    editar: (colaborador) => {
        return http.put('colaboradores/'+colaborador.idcolaborador.toString(), colaborador)
    },
}