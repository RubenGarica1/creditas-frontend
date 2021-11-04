import {
  ADD_ENTIDADES_AUTO_MARCA,
  ADD_ENTIDADES_AUTO_MODELO,
  ADD_ENTIDADES_AUTO_PRECIO
} from '../types/creditoAuto.types';

const INITIAL_STATE = {
  marca: "",
  modelo: "",
  precio: ""
};

export const creditoAuto = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ADD_ENTIDADES_AUTO_MARCA:
			return {
        ...state,
        marca: action.payload,
      };
    case ADD_ENTIDADES_AUTO_MODELO:
      return {
        ...state,
        modelo: action.payload,
      };
    case ADD_ENTIDADES_AUTO_PRECIO:
      return {
        ...state,
        precio: action.payload
      };
		default: return state;
	};
};