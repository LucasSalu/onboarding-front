import { http } from "./config"

export default {

    listar: async () => {
        return  ( await http.get('colaboradores')).data;
    },
    listarPorNome:async (nome) => {
        return ( await http.get('colaboradores/'+nome)).data;
    },
    
    salvar: (colaborador) => {
        return http.post('colaboradores', colaborador)
    },

    editar: (colaborador) => {
        return http.put('colaboradores/'+colaborador.idcolaborador.toString(), colaborador)
    },
}