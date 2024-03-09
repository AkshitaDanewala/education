import React from 'react'
import { LiaUsersSolid } from "react-icons/lia";
const Dashboard = () => {
  return (
<>

<div className='maindiv  h-screen w-full flex'>
   
<div className="leftdiv h-full w-[20vw] bg-green-200"></div>



<div className="rightdiv h-full w-[80vw]">

<nav className='h-[11vh] w-full bg-red-700'></nav>

<div className="dashboard h-[89vh] w-full bg-white">

<div className="boxesdiv h-[40vh] w-full bg-slate-300 flex items-center justify-between px-7 py-7">

<div className="totalStudents  flex h-[34vh] w-[17vw] bg-[rgb(106,115,250)] rounded-lg">

<div className="circlediv h-full w-[40%] bg-cyan-300 flex items-center justify-center ">

    <div className="circle h-[11vh] w-[5vw] rounded-full bg-white flex items-center justify-center">
    <LiaUsersSolid  className='text-[2.7vmax]'/>
    </div>
</div>

<div className="contentdiv h-full w-[60%] bg-red-800 ">

<h2>TOTAL STUDENTS</h2>
<h3>3180</h3>
<div className="barline h-[1vh] w-[5vw] bg-slate-600 rounded-full"></div>

</div>


</div>


<div className="newstudents h-[34vh] w-[17vw] bg-[rgb(255,170,22)] rounded-lg"></div>


<div className="totalcourse h-[34vh] w-[17vw] bg-[rgb(103,59,183)] rounded-lg"></div>


<div className="feescollection h-[34vh] w-[17vw] bg-[rgb(255,22,22)] rounded-lg"></div>





</div>




</div>

</div>


</div>



</>

  )
}

export default Dashboard