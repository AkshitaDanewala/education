import React from 'react'

const FeesStructure = () => {   
  return (
   <>
   
   <div className='h-[130vh] w-full bg-[#035FAC] flex items-center justify-between pt-10 px-4'>

<div className="admissionProcedure h-[105vh]  w-[50vw] bg-white px-4 py-4" style={{borderTopRightRadius: "2vmax", borderBottomLeftRadius: "2vmax"}}>

<h1 className='underline decoration-solid text-[#035FAC] font-poppins font-bold text-[1.8vmax] '>Admission Procedure:</h1>

<div className="content h-[50vh] w-full  mt-5 ">
    <li className='font-poppins text-[1.2vmax]'>Admission is Purely on Merit Basis. Only College Authority Reserves the Right of Admission.</li>

    <li className='mt-5 font-poppins text-[1.2vmax]'>Admission form is available in our institute and our official website : tips.tezpur@gmail.com</li>

<li className='mt-5 font-poppins text-[1.2vmax]'>Duly Filled admission form to be submitted in the office with xerox copies of all Certificates, marksheets and other essential testimonials self attested.
</li>
</div>


<div className="uniformdiv h-[52vh] w-full  -mt-20  py-3">

<h1 className='underline decoration-solid text-[#035FAC] font-poppins font-bold text-[1.8vmax]  '>Uniform:</h1>

<div className="peoplediv h-[40vh] px-2 py-2 w-full  flex justify-between">

<div className="boys h-full w-[14vw] shadow-sm rounded-lg bg-[#035FAC] shadow-slate-100 px-2 py-4 text-white">
<img src="https://themewagon.github.io/elearning/img/team-3.jpg" alt="" className='rounded-full h-[13vh] w-[6vw] object-cover '  />

<h1>Navy blue Shirt, Black Trousers, Black Formal Shoes
Maroon Tie, Lab Coat.</h1>

</div>


<div className="girls h-full w-[14vw] shadow-sm rounded-lg bg-[#035FAC] shadow-slate-100  px-2 py-4 text-white">

<img src="https://themewagon.github.io/elearning/img/team-4.jpg" alt="" className='rounded-full h-[13vh] w-[6vw] object-cover '  />

<h1>Navy blue Shirt, Black Trousers, Black Formal Shoes
Maroon Tie, Lab Coat.</h1>

</div>

<div className="winter h-full w-[14vw] shadow-sm rounded-lg bg-[#035FAC] shadow-slate-100 px-2 py-4 text-white">

<img src="https://media.istockphoto.com/id/1065457848/photo/happy-snowman-in-winter-secenery.webp?b=1&s=170667a&w=0&k=20&c=mj4iziawW_wtiNSrOifA6XwySSwqKX2vid_XkvNDKrk=" alt="" className='rounded-full h-[13vh] w-[6vw] object-cover object-center '  />

<h1>Black Blazer (For Both Boys & Girls).
</h1>

</div>
</div>



</div>




</div>


<div className="fees h-[105vh] w-[40vw]  rounded-lg px-2 py-4">
<h1 className='underline decoration-solid  font-poppins font-bold text-[1.8vmax] text-white'>Fees structure for each course :</h1>

<div className="feesdiv mt-5">

<div className='w-full flex items-center justify-evenly  py-3 '>
    <h1 className='text-[1.7vmax] font-semibold'>Admission - 20,000</h1>
    <h1 className='text-[1.7vmax] font-semibold'>Registration- 10,000</h1>
</div>


<div className="semesters h-[52vh]  mt-3 w-full flex flex-col justify-between shadow shadow-slate-100 px-3 py-5 ">
    <div className="1semester h-[8vh] w-full bg-white rounded-lg flex items-center justify-around">
<h1 className='text-[1.6vmax] font-semibold'>1st semester</h1>
<h1 className='text-[1.6vmax] font-semibold'>5000</h1>
    </div>

    <div className="2semester h-[8vh] w-full bg-white rounded-lg flex items-center justify-around">
    <h1 className='text-[1.6vmax] font-semibold' >2nd semester</h1>
<h1 className='text-[1.6vmax] font-semibold'>5000</h1>
    </div>

    <div className="3semester h-[8vh] w-full bg-white rounded-lg flex items-center justify-around">
    <h1 className='text-[1.6vmax] font-semibold'>3rd semester</h1>
<h1 className='text-[1.6vmax] font-semibold'>5000</h1>
    </div>

    <div className="4semester 3semester h-[8vh] w-full bg-white rounded-lg flex items-center justify-around">
    <h1 className='text-[1.6vmax] font-semibold'>4th semester</h1>
<h1 className='text-[1.6vmax] font-semibold'>5000</h1>
    </div>

</div>

<div className='h-[10vh] w-full text-white mt-3 flex flex-col items-end'>

    <h1 className='text-[1.2vmax] font-poppins'>Monthly fees for each semester - 2000.</h1>
    <h1 className='text-[1.2vmax] font-poppins'>Total fees for every included course - 98,000</h1>
</div>

<div className='h-[10vh] w-full bg-white rounded-lg  text-center mt-3 flex flex-col items-end'>

   <h1 className='font-bold font-poppins'>*(Students will be provided uniforms and books from the institution free of any charge. )</h1>
</div>



</div>



</div>











   </div>
   </>
  )
}

export default FeesStructure