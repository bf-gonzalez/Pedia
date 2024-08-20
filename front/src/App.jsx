import { useState } from 'react'


import Home from './views/home/Home'
import Appointments from './views/appointments/Appointments'
import AppointmentForm from './views/appointmentForm/AppointmentForm'
import Login from './views/login/Login'
import Register from './views/register/Register'
import { Route, Routes } from 'react-router-dom'
import Services from './views/services/Services'
import Landing from './views/landing/Landing'
import ErrorPage from './views/errorPage/ErrorPage'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Especialidades from './views/especialidades/Especialidades'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header/>
      <Navbar/>
      
     
      <Routes>
          <Route path='/' element={ <Landing/>}/>
          <Route path='/register' element={ <Register/>}/>
          <Route path='/appointments' element={ <Appointments/>}/>
          <Route path='/appointmentform' element={ <AppointmentForm/>}/>
          <Route path='/login' element={ <Login/>}/>
          <Route path='/home' element={ <Home/>}/>
          <Route path='/service' element={<Services/>}/>
          <Route path='/especialidades' element={<Especialidades/>}/>
          <Route path='/*' element={<ErrorPage/>}/>

      </Routes>
     
    </>
  )
}

export default App
