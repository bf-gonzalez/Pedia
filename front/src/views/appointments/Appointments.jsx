import { useEffect, useState } from "react"
import CardAppointment from "../../components/card/CardAppointments";
import axios from "axios";
import styles from "./Appointments.module.css"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserAppointments } from "../../redux/userSlice";
import { Link } from "react-router-dom";

const GETAPPOINTMENTSURL = "http://localhost:3000/appointments";
const GETUSERBYID_URL = "http://localhost:3000/users/";
const POSTCANCEL_URL = "http://localhost:3000/appointments/cancel/";

export default function Appointments (){

    const actualUserId = useSelector((state) => state.actualUser.userData.user.id);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(GETUSERBYID_URL + actualUserId)
        .then ((response) => response.data)
        .then((actualUser) => {
           dispatch(setUserAppointments(actualUser.appointments)) 
        })
        .catch((error) => console.log(error.message));
    }, [actualUserId, dispatch]);

    //const [appointments, setAppointments] = useState([]);
    /*useEffect(() => {
        axios.get(GETAPPOINTMENTSURL)
        .then((response) => response.data)
        .then((appointmentsFromDB) => setAppointments(appointmentsFromDB));
    }, []);*/
    const appointments = useSelector((state) => state.actualUser.userAppointments);

   
    const loggin = useSelector((state) => state.actualUser.userData.loggin)

    const navigate = useNavigate();

    useEffect(() => {
        !loggin && navigate("/home") 
    }, [loggin]);


    const handleAppointmentCancel = (appointmentId) => {
        axios.put(POSTCANCEL_URL + appointmentId)
        .then(response => response.data)
        .then((data) => {
            axios.get(GETUSERBYID_URL + actualUserId)
            .then((response) => response.data.appointments)
            .then((appointments )=> dispatch(setUserAppointments(appointments)))
            .catch((error) => console.log(error.message));
        })
    }

    return (
        <div className={styles.conteiner}>
            <h1 className={styles.title}>Mis Turnos</h1>
            <Link to="/appointmentForm">
                <button className={styles.button}>Nuevo Turno</button>
            </Link>
            {
                appointments.map(appointment => (
                    <CardAppointment
                    key={appointment.id}
                    id={appointment.id}
                    date ={appointment.date}
                    time = {appointment.time}
                    userId = {appointment.userId}
                    status = {appointment.status}
                    descrption={appointment.description}
                    handleAppointmentCancel={handleAppointmentCancel}
                    />
                ))
            }
        </div>
    )
}