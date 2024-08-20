import React, { useState } from 'react';
import styles from "./Login.module.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { setUserData } from '../../redux/userSlice';

const POSTUSER_URL = "http://localhost:3000/users/login";

export default function Login (){

  const navigate = useNavigate();
  const dispatch = useDispatch();

    const initialState ={
        username: "",
        password: "",
    };

    const [user, setUser] = useState(initialState);
    const [errors, setErrors] = useState(initialState);

    const validateUser = ({
        username, 
        password, 
      }) =>{
        const errors = {};
        if(!username) errors.username = "Ingresar username";
        if(!password) errors.password = "Ingresar passworf";
        return errors;
      };

    const handleChange = (event) =>{
        const{name, value} = event.target;
        setUser({...user, [name]: value });
        setErrors(validateUser({...user, [name]: value}));
      }
    

    const handleSubmit = (event) => {
        event.preventDefault();
          const userData ={
            username: user.username, 
            password: user.password,
          };
          axios.post(POSTUSER_URL, userData)
          .then(({ data }) =>{
            dispatch(setUserData(data))
            alert("Usuario Logueado");
            setUser(initialState);
            navigate("/home");
          })
          .catch((error) => alert(error.message));
        };

        const fromData = [
            { label: "Username", name: "username", type: "text" },
            { label: "Password", name: "password", type: "password" }
          ];
        

    return(

        <div className={styles.contenLogin}>
            <h2 className={styles.title}>Sign in</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                {fromData.map(({ label, name, type }) => (
                    <label className={styles.label} key={name}>
                        <input
                            id={name}
                            name={name}
                            type={type}
                            className={styles.input}
                            value={user[name]}
                            placeholder=""
                            onChange={handleChange}
                        />
                        <span className={styles.label_name}>{label}</span>
                        {errors[name] && (
                        <span style={{ color: "red" }}>{errors[name]}</span>
                        )}
                    </label>
                ))}
                <button className={styles.button}
                 type="submit"
                 disabled = {Object.keys(user).some(e => !user[e])}>Login</button>
                     
            </form>
            
          
        </div>
    )
}