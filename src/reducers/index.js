import { combineReducers } from 'redux';
import {creditoNomina} from "./CreditoNomina"
import {creditoCasa} from "./creditoCasa"
import {creditoAuto} from "./CreditoAuto"
import {userSolicitud} from "./userSolicitud"
export default combineReducers({
	creditoNomina,
	creditoCasa,
	creditoAuto,
	userSolicitud
});