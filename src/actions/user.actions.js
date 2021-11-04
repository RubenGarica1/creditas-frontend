import axios from "axios"
import {CREATE_CREDITO} from "../types/user.types"
export const createCredito = (item) => async (dispatch) => {
  try {
    let response = await axios.post(`${process.env.NEXT_PUBLIC_HOST_API}/user/create`, item, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let res = await response.data
    if(res.status=='ok') {
      dispatch({
        type: CREATE_CREDITO,
        payload: res
      })
    } else{
      return "correo ya registrado"
    }
  } catch (error) {
  console.log(`error ${error}`)
  return "correo ya registrado"
  }
}