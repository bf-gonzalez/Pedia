import styles from "./Navbar.module.css"
import logo from "../../assets/Logo sin fondo.png"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../redux/userSlice";

export default function Navbar(){

    const { pathname } = useLocation();

    const loggin = useSelector(state => state.actualUser.userData.loggin)

    const dispatch = useDispatch();
    const navigate = useNavigate
    const handleLogout = () =>{
        const confirm = window.confirm("¿Desea cerrar sesión?");
        if(confirm) {
            dispatch(setUserData({ loggin: false, user: {id: false,}, }));
            navigate("/")
        }
    }

    return (
       <div className={styles.navbarConteiner}>
            <div >
                <img className={styles.img} src={logo}  />

            </div>
            <div className={styles.nav}>
                <Link to="/home">
                    <div className={styles.nav1}>Inico</div>
                </Link>

                <Link to="/service">
                    <div className={styles.nav1}>Servicios</div>
                </Link>
                
                { loggin &&(<Link to="/appointments">
                    <div className={styles.nav1}>Turnos</div>
                </Link>
                )}
                
                <Link to = "/especialidades">
                    <div className={styles.nav1}>Especialidades</div>
                </Link>


               

              
                
            </div>
            {
                    loggin ? (
                        <Link >
                            <span onClick={handleLogout}>Logout</span>
                            
                        </Link>
                    ) : (
                        <Link to="/login">
                            <span>Login</span>
                            <span>/</span>
                            
                        </Link>

                    ) 
                }
                { !loggin && (

                <Link to="/register">
                    <span>Register</span>
                </Link>
                )
                }
       </div>
    )
}