import { http } from "./config"

export default {

    listar: () => {
        return http.get('times');
    },
    listarPorNome: (nome) => {
        return http.get('times/'+nome);
    },
    
    salvar: (time) => {
        return http.post('times', time)
    },

    editar: (time) => {
        return http.put('times/'+time.idtime.toString(), time)
    },
}