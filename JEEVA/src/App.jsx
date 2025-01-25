import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import Homaepage from './pages/Homaepage'
import User from './pages/User'
import Setting from './pages/Setting'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

function App() {


  return (
    <BrowserRouter>
  <Navbar/>
        <Routes>
            <Route path='/' element={<Homaepage/>}></Route>
            <Route path='/user' element={<User/>}></Route>
            <Route path='/setting' element={<Setting/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>

    </BrowserRouter>




  )
}
// function Hlo(){

//     return (<>
//       <h1>Hlo function working now</h1>
//       <Home></Home>
//     </>);
// }

export default App
