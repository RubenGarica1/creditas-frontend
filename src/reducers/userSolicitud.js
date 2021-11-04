import {CREATE_CREDITO} from '../types/user.types';

const INITIAL_STATE = {
  message: "",
  status: ""
};

export const userSolicitud = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CREATE_CREDITO:
      return { ...state, 
        message: action.payload.message, 
        status: action.payload.status, 
      };
		default: return state;
	};
};