import {ADD_ENTIDADES_EMPRESA, ADD_ENTIDADES_TIEMPO} from '../types/creditoNomina.types';

const INITIAL_STATE = {
  nombreEmpresa: "",
  tiempoLaborando: ""
};

export const creditoNomina = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_ENTIDADES_EMPRESA:
      return { ...state, 
        nombreEmpresa: action.payload, 
      };
    case ADD_ENTIDADES_TIEMPO:
      return { ...state, 
        tiempoLaborando: action.payload
      };
		default: return state;
	};
};