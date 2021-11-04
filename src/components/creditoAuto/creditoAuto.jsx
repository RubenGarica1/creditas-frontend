import React from 'react'
import styles from "./creditoAuto.module.css"
import {connect} from 'react-redux'
import {
  updateEntidadMarca,
  updateEntidadModelo,
  updateEntidadPrecio
} from "../../actions/creditoAuto.action"
const creditoAuto = (props) => {
  return (
    <div className={styles.formCont}>
      <div className={styles.border}>
        <h1 className={styles.title}>Cotizador de céditos Creditas</h1>
        <h3 className={styles.pregunta}>favor de ingresa marca de auto</h3>
        <input className={styles.input} onChange={e=>props.updateEntidadMarca(e.target.value)} value={props.creditoAuto.marca}/>
        <h3 className={styles.pregunta}>favor de ingresa modelo del auto</h3>
        <input className={styles.input} onChange={e=>props.updateEntidadModelo(e.target.value)} value={props.creditoAuto.modelo}/>
        <h3 className={styles.pregunta}>favor de ingresa precio del auto</h3>
        <input className={styles.input} onChange={e=>props.updateEntidadPrecio(e.target.value)} value={props.creditoAuto.precio}/>
        <div className={styles.centerButton}>
          <div className={styles.buttonLine} onClick={()=>props.retrocederPaso()}>Retroceder</div>
          <div className={styles.button} onClick={()=>props.crearSolicitud()}>solicitar</div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = ({creditoAuto}) => ({
  creditoAuto
})

const mapDispatchToProps = {
  updateEntidadMarca,
  updateEntidadModelo,
  updateEntidadPrecio,
}

export default connect(mapStateToProps, mapDispatchToProps)(creditoAuto);
