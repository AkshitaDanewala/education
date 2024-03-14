import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='h-[11vh] w-full bg-red-200  fixed z-10 '>
    
<ul className='flex items-center justify-evenly'>
  <Link to="/dashboard">Dashboard</Link>
  {/* <Link to="/courses">Courses</Link> */}
  <Link to="/feesStructure">Fees Structure</Link>
  <Link to="/coursesCategory">CoursesCategory</Link>




</ul>
    
    
    </div>
  )
}

export default Header