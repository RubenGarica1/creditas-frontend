import {toasts, snackbarshow} from './toast.module.css'
import React from 'react'

const toast = ({message, open}) => {
  return (
    <>
      {open?<div className={toasts}>{message}</div>: null}
    </>
  )
}

export default toast