import React from 'react'
import { Link } from 'react-router-dom'

const CoursesCategory = () => {
  return (
    <>
    <div className='maindiv bg-[rgb(240,251,255)] w-full h-[127vh] pt-16'>


<div className="headingdiv py-3 w-full bg-white">

<h1 className='text-[2vmax] font-bold font-poppins flex items-center justify-center'>Courses Categories</h1>
</div>

<div className="coursesdiv w-full h-[100vh] mt-3  flex justify-evenly py-5 px-5">

<div className="coursesdivleft h-[90vh] w-[55%] ">
   <div className="topdiv h-[44vh] w-full  overflow-hidden relative">

<img src="https://themewagon.github.io/elearning/img/cat-1.jpg" alt="" className='object-cover  transition-all ease-linear duration-150 hover:scale-110 hover:transition-all hover:ease-linear hover:duration-200 cursor-pointer' />
<Link to="/diplomaAdvanced" className='absolute top-[75%] z-10 right-3 bg-white font-poppins text-[1.5vmax] px-3 py-2 underline'>Diploma/Advanced Courses</Link>

   </div>


   <div className="bottomdiv flex justify-between h-[42vh] w-full  mt-3 ">

<div className="bottomleft h-full w-[48%] bg-blue-100 overflow-hidden relative">
<img src="https://themewagon.github.io/elearning/img/cat-2.jpg" alt="" className=' h-full w-full object-cover  transition-all ease-linear duration-150 hover:scale-110 hover:transition-all hover:ease-linear hover:duration-200 cursor-pointer' />
<Link to="/skilledCourses" className='absolute top-[75%] z-10 right-3 bg-white font-poppins text-[1.5vmax] px-3 py-2 underline'>Skilled Courses</Link>

</div>


<div className="bottomright h-full w-[48%] bg-blue-500 overflow-hidden relative">

<img src="https://themewagon.github.io/elearning/img/cat-3.jpg" alt="" className=' h-full w-full object-cover  transition-all ease-linear duration-150 hover:scale-110 hover:transition-all hover:ease-linear hover:duration-200 cursor-pointer' />

<Link to="/diplomaBachlors" className='absolute top-[75%] z-10 right-3 bg-white font-poppins text-[1.5vmax] px-3 py-2 underline'>Diploma/Bachlors Courses</Link>
</div>



   </div>

</div>




<div className="coursesdivright h-full w-[38%] ">


<div className=" h-full w-full  overflow-hidden relative rounded-lg">

<img src="https://plus.unsplash.com/premium_photo-1682284548131-58cb47f6ab2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full object-cover  transition-all ease-linear duration-150 hover:scale-110 hover:transition-all hover:ease-linear hover:duration-200 cursor-pointer' />

<Link to="/allCourses" className='absolute top-[89%] z-10 right-3 bg-white font-poppins text-[1.5vmax] px-3 py-2 underline'>All Courses</Link>

   </div>


</div>


</div>




    </div>
    
    </>
  )
}

export default CoursesCategory