import React from 'react'
import styles from "./creditoCasa.module.css"
import {connect} from 'react-redux'
import {
  updateEntidadDomicilio,
  updateEntidadValor,
  updateEntidadCP
} from "../../actions/creditoCasa.action"
const creditoCasa = (props) => {
  return (
    <div className={styles.formCont}>
      <div className={styles.border}>
        <h1 className={styles.title}>Cotizador de céditos Creditas</h1>
        <h3 className={styles.pregunta}>Domicilio a dejar en garantia</h3>
        <input className={styles.input} type="text" onChange={e=>props.updateEntidadDomicilio(e.target.value)} value={props.creditoCasa.domicilioGarantia}/>
        <h3 className={styles.pregunta}>valor del domicilio</h3>
        <input className={styles.input} type="text" onChange={e=>props.updateEntidadValor(e.target.value)} value={props.creditoCasa.valorDomicilio}/>
        <h3 className={styles.pregunta}>Codigo postal del domicio</h3>
        <input className={styles.input} type="text" onChange={e=>props.updateEntidadCP(e.target.value)} value={props.creditoCasa.codigoPostal}/>
        <div className={styles.centerButton}>
          <div className={styles.buttonLine} onClick={()=>props.retrocederPaso()}>Retroceder</div>
          <div className={styles.button} onClick={()=>props.crearSolicitud()}>Siguiente</div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = ({creditoCasa}) => ({
  creditoCasa
})

const mapDispatchToProps = {
  updateEntidadDomicilio,
  updateEntidadValor,
  updateEntidadCP
}

export default connect(mapStateToProps, mapDispatchToProps)(creditoCasa);
