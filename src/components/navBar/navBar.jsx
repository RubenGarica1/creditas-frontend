import React from 'react'
import styles from './navBar.module.css'
import icon from "../../../public/favicon.ico"
import Image from "next/image"

const navBar = () => {
  return (
    <>
    <nav className="">
      <ul className={styles.row}>
        <li className={styles.li}><a className={styles.NavLink} href="/">
        <Image
            alt="Mountains"
            src={icon}
            layout="intrinsic"
            priority={true}
            objectFit="cover"
            width={33}
            height={33}
          />
        </a></li>
        <li className={styles.li}><a className={styles.NavLink} href="/">Inicio</a></li>
        <li className={styles.li}><a className={styles.NavLink} href="https://www.creditas.mx/">Creditas</a></li>
        <li className={styles.li}><a className={styles.NavLink} href="https://rubengarcia.me/">Sobre mi</a></li>
        <li className={styles.li}><a className={styles.NavLink} href="https://api.whatsapp.com/send?phone=+526671918647&text=Hola">Contactame</a></li>
      </ul>
    </nav>
    </>
  )
}

export default navBar
