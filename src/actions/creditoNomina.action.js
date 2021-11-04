import {
  ADD_ENTIDADES_EMPRESA,
  ADD_ENTIDADES_TIEMPO
} from '../types/creditoNomina.types'

export const updateEntidadNombreEmpresa = (data) => async (dispatch) => {
  dispatch({
    type: ADD_ENTIDADES_EMPRESA,
    payload: data
  })
}

export const updateEntidadIngreso = (data) => async (dispatch) => {
  dispatch({
    type: ADD_ENTIDADES_TIEMPO,
    payload: data
  })
}
