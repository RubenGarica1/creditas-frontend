import React from 'react'
import styles from "./creditoNomina.module.css"
import {connect} from 'react-redux'
import {
  updateEntidadIngreso,
  updateEntidadNombreEmpresa,
} from "../../actions/creditoNomina.action"
const creditoNomina = (props) => {
  return (
    <div className={styles.formCont}>
    <div className={styles.border}>
      <h1 className={styles.title}>Cotizador de céditos Creditas</h1>
      <h3 className={styles.pregunta}>nombre de la empresa</h3>
      <input className={styles.input} type="text" onChange={e=>props.updateEntidadNombreEmpresa(e.target.value)} value={props.creditoNomina.nombreEmpresa}/>
      <h3 className={styles.pregunta}>Fecha de ingreso</h3>
      <input className={styles.input} type="text" onChange={e=>props.updateEntidadIngreso(e.target.value)} value={props.creditoNomina.tiempoLaborando}/>
      <div className={styles.centerButton}>
        <div className={styles.buttonLine} onClick={()=>props.retrocederPaso()}>Retroceder</div>
        <div className={styles.button} onClick={()=>props.crearSolicitud()}>Siguiente</div>
      </div>
    </div>
  </div>
  )
}
const mapStateToProps = ({creditoNomina}) => ({
  creditoNomina
})

const mapDispatchToProps = {
  updateEntidadIngreso,
  updateEntidadNombreEmpresa,
}

export default connect(mapStateToProps, mapDispatchToProps)(creditoNomina);
