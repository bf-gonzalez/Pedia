import axios from "axios";
import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./AppointmentForm.module.css"

const POSTAPPOINTMENT_URL = "http://localhost:3000/appointments/schedule";

export default function AppointmentForm(){
    const navigate = useNavigate();
    const userId = useSelector((state) => state.actualUser?.userData.user.id);


    useEffect(() => {
        if(!userId){
            navigate("/");
        }
    }, [userId, navigate]);


    const initialState ={
        date: "",
        hours: "09",
        minutes: "00",
        description: "",
    };

    const [appointment, setAppointment] = useState(initialState);
    const [errors, setErrors] = useState({
        date: "Debe ingresar una fecha",
    });


    const validateAppointment = ({date, hours, minutes, description}) =>{
        const errors = {};
        if(!date) errors.date = "Ingresar fecha";
        else if(isWeekend(date))
            errors.date = "La fecha seleccionada es un fin de semana";
        if(!description) errors.description = "Ingresar description";
        else if(description.length < 5)
            errors.description = "Descripción de al menos 5 caracteres";
        else if(description.length > 25)
            errors.description = "Descripción de no más de 25 caracteres";
        return errors;
    };

    const isWeekend = (date) =>{
        const day = new Date(date).getDay();
        return day === 5 || day == 6;
    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        const updatedAppointment = {
            ...appointment,
            [name]: value,
        };
        setAppointment(updatedAppointment);
        setErrors(validateAppointment(updatedAppointment));
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        const newAppointment = {
            date: appointment.date,
            time: `${appointment.hours}:${appointment.minutes}`,
            description: appointment.description,
            userId,

        };
        axios.post(POSTAPPOINTMENT_URL, newAppointment)
            .then(({ data }) =>{
            alert(`Ha sido creado el turno: Fecha ${data.date}, hora ${data.time}` );

            setAppointment(initialState);
            navigate("/appointments");
        })
        .catch((error) => {
            alert(`Error: ${error.response.data.error}`);
        });
    };

    const validHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
    const validMinutes = ["00", "30"];

    function getTomorrow(){
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().split("T")[0];
    }

    function getFourteenDaysAhead(){
        const today = new Date();
        const fourteenDaysAhead = new Date(today);
        fourteenDaysAhead.setDate(fourteenDaysAhead.getDate() + 13);
        return fourteenDaysAhead.toISOString().split("T")[0];

    }

    return (
        <div className={styles.conteiner}>
            <h2 className={styles.title}>Nuevo Turno</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.campos}>
                    <label htmlFor="date">Fecha: </label>
                    <input 
                        type="date"
                        id="date"
                        name="date"
                        min={getTomorrow()}
                        max={getFourteenDaysAhead()}
                        value={appointment.date}
                        onChange={handleChange} 
                    />
                    {errors.date && <span style={{color: "red"}}>{errors.date}</span>}
                </div>

                <div className={styles.campos}>
                    <label htmlFor="time">Horario: </label>
                    <select 
                        id="hours"
                        name="hours"
                        value={appointment.hours}
                        onChange={handleChange} 
                        >
                        {validHours.map((hour) => (
                            <option key={hour} value={hour}>
                                {hour}
                            </option>
                        ))}   
                    </select>
                    <select 
                        id="minutes"
                        name="minutes"
                        value={appointment.minutes}
                        onChange={handleChange} 
                    >
                        {validMinutes.map((minute) => (
                            <option key={minute} value={minute}>
                                {minute}
                            </option>
                        ))}

                    </select>
                </div>

                <div className={styles.campos}>
                    <label htmlFor="description">Descripción</label>
                    <input 
                        type="text"
                        id= "description"
                        name="description"
                        value={appointment.description}
                        placeholder="Ingresar Descripción" 
                        onChange={handleChange}
                    />
                    {errors.description && (
                        <span style={{color: "red"}}>{errors.description}</span>
                    )}
                </div>

                <button className={styles.button} type="submit" disabled={Object.keys(errors).length > 0}>
                    Enviar
                </button>
            </form>
        </div>
    )
}