import React from 'react'
import Dashboard from "./Components/Dashboard"
import Header from "./Components/Header"
import Courses from "./Components/Courses"
import FessStructure from "./Components/FeesStructure.jsx"
import CoursesCategory from "./Components/CoursesCategory.jsx"
import DiplomaAdvanced from './Components/DiplomaAdvanced.jsx'
import DiplomaBachlore from './Components/DiplomaBachlore.jsx'
import SkilledCourses from './Components/SkilledCourses.jsx'
import AllCourses from './Components/AllCourses.jsx'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Header/>

    <Routes>
   
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/courses" element={<Courses/>}/>
<Route path="/feesStructure" element={<FessStructure/>}/>
<Route path="/coursesCategory" element={<CoursesCategory/>}/>
<Route path="/diplomaAdvanced" element={<DiplomaAdvanced/>}/>
<Route path="/diplomaBachlors" element={<DiplomaBachlore/>}/>
<Route path="/skilledCourses" element={<SkilledCourses/>}/>
<Route path="/allCourses" element={<AllCourses/>}/>




    </Routes>
   
    </>
 
  )
}

export default App