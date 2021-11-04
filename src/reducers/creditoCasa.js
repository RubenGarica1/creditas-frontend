import {
  ADD_ENTIDADES_CASA_DOMICILIO,
  ADD_ENTIDADES_CASA_VALOR,
  ADD_ENTIDADES_CASA_CP
} from '../types/creditoCasa.types';

const INITIAL_STATE = {
  domicilioGarantia: "",
  valorDomicilio: "",
  codigoPostal:""
};

export const creditoCasa = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_ENTIDADES_CASA_DOMICILIO:
			return { 
        ...state,
        domicilioGarantia: action.payload,
      };
    case ADD_ENTIDADES_CASA_VALOR:
      return { 
        ...state,
        valorDomicilio: action.payload,
      };
    case ADD_ENTIDADES_CASA_CP:
      return { 
        ...state,
        codigoPostal: action.payload
      };
		default: return state;
	};
};