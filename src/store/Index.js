import { createStore } from "vuex";
import moduloColaboradores from "./modules/colaboradores";

import moduloCompetencias from "./modules/competencias";


const store = createStore({
    modules: {
        moduloColaboradores,
        moduloCompetencias
    }
});

export default store;