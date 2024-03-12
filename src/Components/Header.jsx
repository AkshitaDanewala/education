import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='h-[11vh] w-full  fixed z-10 bg-red-200'>
    
<ul>
  <Link to="/dashboard">Dashboard</Link>
  <Link to="/courses">Courses</Link>

</ul>
    
    
    </div>
  )
}

export default Header