import { http } from "./config"

export default {

    listar: () => {
        return http.get('colaborador')
    },
    
    salvar: (colaborador) => {
        return http.post('colaborador', colaborador)
    },

    editar: (colaborador) => {
        return http.put('colaborador/'+colaborador.id, colaborador)
    },
}