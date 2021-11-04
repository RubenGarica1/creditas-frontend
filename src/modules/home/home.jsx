import React, { Component } from 'react'
import styles from './home.module.css'
import Image from "next/image"
import celebracion from "../../../public/img/celebracion.png"
import celebracion1 from "../../../public/img/celebracion1.png"
import test from "../../../public/img/test.png"
import mountains from "../../../public/img/la-familia-es-el-futuro-de-la-humanidad.jpeg"
import Dropdown from "../../components/dropdown"
import { connect } from 'react-redux'
import Toast from "../../components/Toast"
import CreditoCasa from "../../components/creditoCasa"
import CreditoAuto from "../../components/creditoAuto"
import CreditoNomina from "../../components/creditoNomina"
import {createCredito} from "../../actions/user.actions"
class Home extends Component {
  state={
    typeCredit:"selecciona un tipo de credito",
    steper: 1,
    nombre: "",
    celular: "",
    email: "",
    rfc: "",
    domicilio: "",
    messageToast: "",
    openToast: false,
  }
  siguientePaso= async () => {
    let {nombre, celular, email, rfc, domicilio, typeCredit} = this.state
    if(nombre!=""&&celular!=""&&email!=""&&rfc!=""&&domicilio!=""&&typeCredit!=""&&typeCredit!="selecciona un tipo de credito"){
      this.setState({steper: this.state.steper + 1})
    } else if(typeCredit!="selecciona un tipo de credito") {
      this.setState({openToast: true, messageToast: "Favor de seleccionar un tipo de credito"})
      setTimeout(() => {
        this.setState({openToast: false})
      }, 5000);
    }else {
      this.setState({openToast: true, messageToast:"Favor de llenar todos los campos correctamente"})
      setTimeout(() => {
        this.setState({openToast: false})
      }, 5000);
    }
  }
  selectList = (typeCredit, i ) => {
    this.setState({typeCredit})
  }
  retrocederPaso= () => {
    this.setState({steper: this.state.steper - 1})
  }
  setCreditCasa = (dataCreditoCasa) => {
    this.setState({dataCreditoCasa})
  }
  crearSolicitud = async () => {
    let {nombre, celular, email, rfc, domicilio, typeCredit, dataCredito} = this.state
    let {creditoNomina, creditoCasa, creditoAuto} = this.props
    if(nombre!=""&&celular!=""&&email!=""&&rfc!=""&&domicilio!=""&&typeCredit!=""){
      if(typeCredit=="Casa"&& creditoCasa.domicilioGarantia!=""&&creditoCasa.valorDomicilio!=""&&creditoCasa.codigoPostal!=""){
        await this.props.createCredito({
          nombre,
          celular,
          email,
          rfc,
          domicilio,
          typeCredito: typeCredit,
          dataCredito: creditoCasa
        })
        this.setState({steper: 3})
      } else if (typeCredit=="Auto"&&creditoAuto.marca!=""&&creditoAuto.modelo!=""&&creditoAuto.precio!="") {
        await this.props.createCredito({
          nombre,
          celular,
          email,
          rfc,
          domicilio,
          typeCredito: typeCredit,
          dataCredito: creditoAuto
        })
        this.setState({steper: 3})
      } else if (typeCredit=="Nomina"&&creditoNomina.nombreEmpresa!=""&&creditoNomina.tiempoLaborando!="") {
        await this.props.createCredito({
          nombre,
          celular,
          email,
          rfc,
          domicilio,
          typeCredito: typeCredit,
          dataCredito: creditoNomina
        })
        this.setState({steper: 3})
      }
    }

  }
  render() {
    return (
      <div className={styles.container}>
        <Toast message={this.state.messageToast} open={this.state.openToast}/>
        <div className={styles.fotoCont}>
          <div style={{ position: 'relative', width: '600px', height: '507px' }}>
          <Image
            alt="creditas icon"
            src={mountains}
            layout="intrinsic"
            className={styles.img}
            priority={true}
            objectFit="cover"
            width={550}
            height={555}
          />
          </div>
        </div>
        {this.state.steper==1?
          <div className={styles.formCont}>
            <div className={styles.border}>
              <h1 className={styles.title}>Cotizador de céditos Creditas</h1>
              <label>
                <h2 className={styles.pregunta}>favor de ingresa su nombre completo</h2>
                <input className={styles.input}  type="text" onChange={e=> this.setState({nombre: e.target.value})} value={this.state.nombre} id="nombre" name="nombre"/>
              </label>
              <label>
                <h2 className={styles.pregunta}>favor de ingresa su telefono</h2>
                <input className={styles.input} type="text" onChange={e=> this.setState({celular: e.target.value})} value={this.state.celular} id="celular" name="celular"/>
              </label>
              <label>
                <h2 className={styles.pregunta}>favor de ingresa su email</h2>
                <input className={styles.input} type="text" onChange={e=> this.setState({email: e.target.value})} value={this.state.email} id="email" name="email"/>
              </label>
              <label>
                <h2 className={styles.pregunta}>favor de ingresa su RFC</h2>
                <input className={styles.input} type="text" onChange={e=> this.setState({rfc: e.target.value})} value={this.state.rfc} id="rfc" name="rfc"/>
              </label>
              <label>
                <h2 className={styles.pregunta}>favor de ingresa su domicilio</h2>
                <input className={styles.input} type="text" onChange={e=> this.setState({domicilio: e.target.value})} value={this.state.domicilio} id="domicilio" name="domicilio"/>
              </label>
              <h2 className={styles.pregunta}>favor de seleccionar tu tipo de credito</h2>
              <Dropdown data={['Auto','Casa','Nomina']} select={this.selectList} message={this.state.typeCredit}/>
              <div className={styles.centerButton}>
                <div className={styles.button} onClick={()=>this.siguientePaso()}>Siguiente</div>
              </div>
            </div>
          </div>
        :null}
        {this.state.steper==2 &&this.state.typeCredit=="Auto"?
          <CreditoAuto retrocederPaso={()=>this.retrocederPaso()} crearSolicitud={()=>this.crearSolicitud()}/>
        :null}
        {this.state.steper==2 &&this.state.typeCredit=="Casa"?
          <CreditoCasa retrocederPaso={()=>this.retrocederPaso()} crearSolicitud={()=>this.crearSolicitud()}/>
        :null}
        {this.state.steper==2 &&this.state.typeCredit=="Nomina"?
          <CreditoNomina retrocederPaso={()=>this.retrocederPaso()} crearSolicitud={()=>this.crearSolicitud()}/>
        :null}
        {this.state.steper==3?
          <div className={styles.formCont}>
            <div className={styles.border}>
              {this.props.userSolicitud.message=="La solicitud fue procesada exitosamente"?
              <div className={styles.center}>
                <Image
                  alt="Mountains"
                  src={celebracion1}
                  layout="intrinsic"
                  priority={true}
                  objectFit="cover"
                  width={200}
                  height={200}
                  />
                <h1 className={styles.pregunta}>{this.props.userSolicitud.message}</h1>
                <Image
                alt="Mountains"
                src={celebracion}
                layout="intrinsic"
                priority={true}
                objectFit="cover"
                width={200}
                height={200}
                />
              </div>
              :
              <div className={styles.center}>
                <h2 className={styles.title}>Lo sentimos</h2>
                <Image
                  alt="Mountains"
                  src={test}
                  layout="intrinsic"
                  priority={true}
                  objectFit="cover"
                  width={200}
                  height={200}
                  />
                <h1 className={styles.pregunta}>{this.props.userSolicitud.message}</h1>
              </div>
              }
            </div>
          </div>
        :null}
      </div>
    )
  }
}

const mapStateToProps = ({creditoNomina, creditoCasa, creditoAuto, userSolicitud}) => ({
  creditoNomina,
  creditoCasa,
  creditoAuto,
  userSolicitud
})

const mapDispatchToProps = {
  createCredito
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
