import React from 'react'
import styles from "./Especialidades.module.css"
import CarruselEspecialidades from '../../components/carruselEspecialidades/CarruselEspecialidades'

export default function Especialidades() {
    

    return (
        <>
            <div>
                <h1 className={styles.title}>Especialidades</h1>
                <CarruselEspecialidades/>
            </div>
        </>
    )
}
