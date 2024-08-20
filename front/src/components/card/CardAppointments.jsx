import styles from "./CardAppointments.module.css"


export default function CardAppointment ({
    id, date, time, userId, status, description, handleAppointmentCancel
}){
    //formato de la fecha
    date = new Date(date);
    const formatDate = `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}` 

    const handleClick = () =>{
        if(
            window.confirm(`Desea cancelar el turno del dia ${formatDate} a las ${time} ?`)
        ){
            handleAppointmentCancel(id); 
        }
        
    };
    return(
        <div className={styles.cardConteiner}>
            <span>{formatDate}</span>
            <span>{time}</span>
            <span>{description}</span>
            <span>
                {
                    status === "active"
                     ? ( <span className={styles.active} onClick ={handleClick}>Activo</span>
                     ): ( <span className={styles.cancelled}>Cancelado</span>)
                }

            </span>
        </div>
    )
}