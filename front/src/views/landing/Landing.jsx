import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Landing.module.css"

export default function Landing() {
    

    return (
        <>
            <div className={styles.contenedor}>
                <h1 className={styles.title}>Bienvenido a Pedia</h1>
                <div className={styles.tarjeta}>
                    <h2>¿Es tu primera vez en nuesta App?</h2>
                        <Link to ="/register">
                            <button className={styles.button}>Register</button>
                        </Link>
                

                    <h2>¿Ya tienes una cuenta?</h2>
                        <Link to = "/login">
                            <button className={styles.button}>Login</button>
                    </Link>
                </div>
            </div>  
        </>
    )
}
