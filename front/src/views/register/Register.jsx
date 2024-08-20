import React, { useState } from 'react';
import styles from "./Register.module.css"
import axios from "axios";

const emailRegExp = /\S+@\S+\.\S+/;
const POSTUSER_URL = "http://localhost:3000/users/register";  


export default function Register() {
  //Estado Inicial
  const initialState = {
    name: "",
    email: "",
    birthdate: "",
    nDni: "",
    username: "",
    password: "",
    confirmPassword: ""
  }
  //Estados
  const [user, setUser] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  //Validación
  const validateUser = ({
    name, 
    email, 
    birthdate, 
    nDni, 
    username, 
    password, 
    confirmPassword
  }) =>{
    const errors = {};

    if(!name) errors.name = "Ingresar un nombre";
    if(!email) errors.email = "Ingresar un email";
    else if(!emailRegExp.test(email))errors.email = "Ingresar un email";
    if(!birthdate) errors.birthdate = "Ingresar fecha de nacimiento";
    if(!nDni) errors.nDni = "Ingresar número de Dni";
    if(!username) errors.username = "Ingresar username";
    if(!password) errors.password = "Ingresar passworf";
    if(confirmPassword !== password) errors.confirmPassword = "Password y confirmación debe ser iguales";
    
    return errors;
  };

  //Handlers
  const handleChange = (event) =>{
    const{name, value} = event.target;
    setUser({...user, [name]: value });
    setErrors(validateUser({...user, [name]: value}));
  }

  const handleSubmit = (event) => {
  event.preventDefault();
    const userData ={
      name: user.name, 
      email: user.email, 
      birthdate: user.birthdate, 
      nDni: user.nDni, 
      username: user.username, 
      password: user.password,
    };
    axios.post(POSTUSER_URL, userData)
    .then(({ data }) =>{
      console.log(data);
      alert(data.message);
      setUser(initialState);
    })
    .catch((error) => alert(error.message));
  };

  const handleReset = (event) => {
    event.preventDefault();
    setUser(initialState);
  }

  const fromData =[
    {label: "Nombre ", name: "name", type: "text"},
    {label: "Username ", name: "username", type: "text"},
    {label: "Password ", name: "password", type: "password"},
    {label: "Confirmar Password ", name: "confirmPassword", type: "password"},
    {label: "Email ", name: "email", type: "text"},
    {label: "Fecha de Nacimiento ", name: "birthdate", type: "date"},
    {label: "Numero de DNI ", name: "nDni", type: "text"},
    
    ]


  return (
    
      <div className={styles.contenLogin}>
        <h2 className={styles.title}>Register</h2>
        <hr />
        <form className={styles.form}  onSubmit={handleSubmit}>
          {
            fromData.map(({label, name, type}) => (
             <label  className={styles.label} key = {name}>
                
                <input 
                  id = {name}
                  name={name}
                  type={type}
                  value={user[name]}
                  placeholder=""
                  onChange={handleChange}
                  className={styles.input}
                />
                <span className={styles.label_name}>{label}</span>
               {
                errors[name] && (
                  <span style={{color:"red"}}>{errors[name]}</span>
                )
               } 
             </label> 
            ))
          }
          <div>
            <button 
              type="submit"
              disabled = {Object.keys(user).some(e => !user[e])}
              className={styles.button}
            >Registrar</button>
            <button className={styles.button} onClick={handleReset}>Borrar Campos</button>
          </div>
        </form>
        
      </div>
    
  )
}

