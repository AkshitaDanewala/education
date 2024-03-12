import React from 'react'
import Dashboard from "./Components/Dashboard"
import Header from "./Components/Header"
import Courses from "./Components/Courses"
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Header/>

    <Routes>
   
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/courses" element={<Courses/>}/>


    </Routes>
   
    </>
 
  )
}

export default App