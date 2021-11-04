import React, { Component } from 'react'
import Home from '../modules/home'
import NavBar from "../components/navBar"
import Head from 'next/head'

export class Index extends Component {
  render() {
    return (
      <>
        <html lang="es">
          <Head>
            <title>Creditas</title>
            <meta name="description" content="calculadora para cotizar creditos" />
            <meta name="keywords" content="examen de creditas, test, dev" />
          </Head>
          <main>
            <NavBar />
            <Home />
          </main>
        </html>
      </>
    )
  }
}
Index.getInitialProps = async (ctx) => {
  // Must validate JWT
  // If the JWT is invalid it must redirect
  // back to the main page. You can do that
  // with Router from 'next/router

  // Must return an object
  return { status: 'ok' }
}
export default Index
