import {
  ADD_ENTIDADES_CASA_DOMICILIO,
  ADD_ENTIDADES_CASA_VALOR,
  ADD_ENTIDADES_CASA_CP,
} from '../types/creditoCasa.types'

export const updateEntidadDomicilio = (data) => async (dispatch) => {
  dispatch({
    type: ADD_ENTIDADES_CASA_DOMICILIO,
    payload: data
  })
}

export const updateEntidadValor = (data) => async (dispatch) => {
  dispatch({
    type: ADD_ENTIDADES_CASA_VALOR,
    payload: data
  })
}

export const updateEntidadCP = (data) => async (dispatch) => {
  dispatch({
    type: ADD_ENTIDADES_CASA_CP,
    payload: data
  })
}