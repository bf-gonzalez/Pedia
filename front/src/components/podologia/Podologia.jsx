import React from 'react'
import img1 from "../../assets/img1.png"
import styles from "./Podologia.module.css"

export function Podologia() {
    

    return (
        <>
            <div className={styles.contenedor}>
                <h1 className={styles.tituloSobre}>¿Qué es la podología ?</h1>
                <div className={styles.contenedorImg}>
                    <img src={img1} className={styles.img}/>
                    <div className={styles.contenidoText}>
                        <h3><span>*</span>La podología:</h3>
                        <p>
                            La podología es la ciencia sanitaria que tienepor objetivo
							el estudio de las enfermedades y alteraciones que afectan el pie.
							Abarca el diagnóstico y tratamiento de las afecciones y deformidades
							de los pies, mediante las técnicas terapéuticas propias de su disciplina.
                        </p>
                        <h3><span>*</span>El podólogo:</h3>
						<p>El podólogo es el profesional sanitario universitario con los conocimientos,
							habilidades y aptitudes para realixar las actividades dirigidas a la prevención,
							al diagnóstico y tratamiento de las afecciones y deformidades de los piews, medianteprocedimientos terapéuticos podológicos.
							Actúa de forma autónoma o dentro de un entorno pluri o multidisciplinar, con una identidad bien definida
						</p>
                    </div>
                </div>
            </div>
        </>
    )
}
