import {
  ADD_ENTIDADES_AUTO_MARCA,
  ADD_ENTIDADES_AUTO_MODELO,
  ADD_ENTIDADES_AUTO_PRECIO,
} from '../types/creditoAuto.types'

export const updateEntidadMarca = (data) => async (dispatch) => {
  dispatch({
    type: ADD_ENTIDADES_AUTO_MARCA,
    payload: data
  })
}

export const updateEntidadModelo = (data) => async (dispatch) => {
  dispatch({
    type: ADD_ENTIDADES_AUTO_MODELO,
    payload: data
  })
}

export const updateEntidadPrecio = (data) => async (dispatch) => {
  dispatch({
    type: ADD_ENTIDADES_AUTO_PRECIO,
    payload: data
  })
}