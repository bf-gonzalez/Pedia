import React from 'react'
import helomas from "../../assets/helomas.jpg"
import hiperqueratosis from "../../assets/hiperqueratosis.jpg"
import onicogrifosis from "../../assets/onicogrifosis.jpg"
import onicomicosis from "../../assets/onicomicosis 1.png"
import uña_incarnada from "../../assets/uña incarnada.jpg"
import verrugas_plantares from "../../assets/verrugas plantares.jpg"
import iconoPie from "../../assets/icono de pie.png"
import styles from "./Services.module.css"

export default function Services() {
    

    return (
        <>
            <div className={styles.contenedor}>
                <h1 className={styles.title}>Servicios</h1>
                <div className={styles.contenedorTarjetas}>
                    <div className={styles.tarjetas}>
                        <div className={styles.tar}>
                            <h2>Helomas</h2>
                            <img className={styles.imgTarjetas} src={helomas}/>
                            <div className={styles.efecto}>
                                <img src={iconoPie} />
                                <h3>Heloma/Callo</h3>
                                <p>Los helomas, también conocidos como callos o clavos, 
                                    son áreas gruesas y endurecidas de la piel que se desarrollan en respuesta a la presión o fricción repetida. 
                                    Generalmente se forman en los pies, especialmente en los dedos o en las plantas, debido al uso de calzado inadecuado o a actividades que generan fricción constante.</p>
                            </div>
                        </div>

                        <div className={styles.tar}>
                            <h2>Hiperqueratosis</h2>
                            <img className={styles.imgTarjetas} src={hiperqueratosis}/>
                            <div className={styles.efecto}>
                                <img src={iconoPie} />
                                <h3>Hiperqueratosis/Dureza</h3>
                                <p>La hiperqueratosis es una condición caracterizada por el engrosamiento de la capa más externa de la piel, 
                                    conocida como la capa córnea. Esto ocurre debido a un aumento en la producción de queratina, 
                                    una proteína que es un componente principal de la piel, el cabello y las uñas.</p>
                            </div>
                        </div>

                        <div className={styles.tar}>
                            <h2>Onicogrifosis</h2>
                            <img className={styles.imgTarjetas} src={onicogrifosis}/>
                            <div className={styles.efecto}>
                                <img src={iconoPie} />
                                <h3>Onicogrifosis/Uña engrosada</h3>
                                <p>La onicogrifosis es una condición médica que se caracteriza por el crecimiento excesivo y anormal de las uñas, 
                                    generalmente en las uñas de los dedos de los pies. Esto provoca que las uñas se vuelvan gruesas, 
                                    curvadas y a menudo difíciles de manejar. Esta condición puede estar asociada con diversas causas, como infecciones fúngicas crónicas, 
                                    trauma repetido en las uñas o condiciones médicas subyacentes como la psoriasis.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.tarjetas}>

                        <div className={styles.tar}>
                            <h2>Onicomicosis</h2>
                            <img className={styles.imgTarjetas} src={onicomicosis}/>
                            <div className={styles.efecto}>
                                <img src={iconoPie} />
                                <h3>Onicomicosis/Hongos</h3>
                                <p>La onicomicosis es una infección fúngica común que afecta a las uñas, 
                                    tanto de manos como de pies, provocando cambios visibles como decoloración, 
                                    engrosamiento y fragilidad. Esta condición suele ser causada por hongos que prosperan en ambientes cálidos y húmedos, 
                                    como los zapatos cerrados y la humedad residual en las uñas.</p>
                            </div>
                        </div>

                        <div className={styles.tar}>
                            <h2>Onicocriptosis</h2>
                            <img className={styles.imgTarjetas} src={uña_incarnada}/>
                            <div className={styles.efecto}>
                                <img src={iconoPie} />
                                <h3>Onicocriptosis/Uña incarnada</h3>
                                <p>La uña incarnada es una condición dolorosa en la cual el borde de la uña del pie se clava en la piel circundante, 
                                    causando enrojecimiento, inflamación e incluso infección. Esto ocurre típicamente en los bordes laterales o en las esquinas de la uña, 
                                    debido a factores como el corte inadecuado de las uñas, el uso de calzado ajustado o la forma natural de crecimiento de la uña.</p>
                            </div>
                        </div>

                        <div className={styles.tar}>
                            <h2>Papiloma plantar</h2>
                            <img className={styles.imgTarjetas} src={verrugas_plantares}/>
                            <div className={styles.efecto}>
                                <img src={iconoPie} />
                                <h3>Papiloma plantar/Verruga plantar</h3>
                                <p>Las verrugas plantares son crecimientos cutáneos no cancerosos que aparecen en la planta del pie, 
                                    generalmente en áreas de presión como el talón o la parte delantera del pie. 
                                    Estas verrugas son causadas por el virus del papiloma humano (VPH) y pueden presentarse como pequeñas protuberancias con puntos negros en su superficie. 
                                    A menudo son dolorosas al caminar o al aplicar presión sobre ellas. </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
