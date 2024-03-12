import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Courses = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

  }



  return (
   <>
   
<div className='w-full h-screen bg-slate-100  flex flex-col '>

<div className="headingname h-[18vh] w-full bg-yellow-200 flex flex-col items-center justify-center  mt-14">
<h1 className='font-poppins font-semibold text-[1.7vmax]'>BROWSE OUR </h1>
<h2 className='font-poppins text-[2vmax]'> Diploma/Advanced Diploma/Bachelor Courses </h2>

</div>

<div className="coursesdiv h-[90vh] w-full bg-green-200 flex items-center justify-center px-7 py-3">




<div className="boxesdiv  h-[69vh] w-[80vw] border-2  border-black py-4 px-4">

<Slider {...settings} >
  
<div className="box-container1 mr-[20px]">
  <div  className="firstbox  h-[61vh] w-[24vw] bg-white overflow-hidden rounded-lg ">

<div className="imgbox h-[33vh] w-full   overflow-hidden ">
  <img src="https://themewagon.github.io/elearning/img/course-2.jpg" alt="" className='h-[100%] w-[100%] object-cover transition-all ease-linear duration-150 hover:scale-110 hover:transition-all hover:ease-linear hover:duration-150 cursor-pointer'/>
</div>

<div className="infodiv h-[27vh] w-full  px-5 py-3">

<h1 className='text-center text-[1.8vmax] font-poppins'>GDA Nursing Assistant</h1>

<div className='flex justify-between mt-2'>
<h1 className='text-[1.3vmax]'>Duration: <span className='text-[1.3vmax] ml-1'>2 Years</span> </h1>
  <h1 className='text-[1.3vmax]'>Fees:  <span className='text-[1.3vmax] ml-1'>5000</span></h1>
</div>

<h1 className='text-[1.3vmax] mt-1' >Seats:  <span className='text-[1.3vmax] ml-10 mt-1 '>30 seats</span> </h1>

  <h1 className='text-[1.3vmax] mt-1'>Ratings: <span  className='text-[1.2vmax] ml-5 mt-1'>⭐⭐⭐⭐</span></h1>




</div>

</div>
</div>


<div className="box-container2 mr-[20px]">
<div className="secondbox h-[61vh] w-[24vw] bg-white  overflow-hidden rounded-lg ">

<div className="imgbox h-[33vh] w-full   overflow-hidden ">
  <img src="https://themewagon.github.io/elearning/img/course-2.jpg" alt="" className='h-[100%] w-[100%] object-cover transition-all ease-linear duration-150 hover:scale-110 hover:transition-all hover:ease-linear hover:duration-150 cursor-pointer'/>
</div>

<div className="infodiv h-[27vh] w-full  px-5 py-3">

<h1 className='text-center text-[1.8vmax] font-poppins'>GDA Nursing Assistant</h1>

<div className='flex justify-between mt-2'>
<h1 className='text-[1.3vmax]'>Duration: <span className='text-[1.3vmax]'>2 Years</span> </h1>
  <h1 className='text-[1.3vmax]'>Fees:  <span className='text-[1.3vmax]'>5000</span></h1>
</div>  
  
<h1 className='text-[1.3vmax] mt-1' >Seats:  <span className='text-[1.3vmax] ml-10 mt-1 '>30 seats available</span> </h1>

  
  <h1 className='text-[1.3vmax] mt-1'>Ratings: <span  className='text-[1.2vmax] ml-5 mt-1'>⭐⭐⭐⭐</span></h1>




</div>

</div>
</div>


<div className="box-container3 mr-[20px]">
<div className="thirdbox h-[61vh] w-[24vw] bg-white  overflow-hidden rounded-lg ">

<div className="imgbox h-[33vh] w-full   overflow-hidden ">
  <img src="https://themewagon.github.io/elearning/img/course-2.jpg" alt="" className='h-[100%] w-[100%] object-cover transition-all ease-linear duration-150 hover:scale-110 hover:transition-all hover:ease-linear hover:duration-150 cursor-pointer'/>
</div>

<div className="infodiv h-[27vh] w-full  px-5 py-3">

<h1 className='text-center text-[1.8vmax] font-poppins'>GDA Nursing Assistant</h1>

<div className='flex justify-between mt-2'>
<h1 className='text-[1.3vmax]'>Duration: <span className='text-[1.3vmax]'>2 Years</span> </h1>
  <h1 className='text-[1.3vmax]'>Fees:  <span className='text-[1.3vmax]'>5000</span></h1>
</div>
  
<h1 className='text-[1.3vmax] mt-1' >Seats:  <span className='text-[1.3vmax] ml-10 mt-1 '>30 seats available</span> </h1>

 
  <h1 className='text-[1.3vmax] mt-1'>Ratings: <span  className='text-[1.2vmax] ml-5 mt-1'>⭐⭐⭐⭐</span></h1>




</div>

</div>
</div>


<div className="box-container4 mr-[20px]">
<div className="fourthbox h-[63vh] w-[24vw] bg-white  overflow-hidden rounded-lg  ">

<div className="imgbox h-[33vh] w-full   overflow-hidden ">
  <img src="https://themewagon.github.io/elearning/img/course-2.jpg" alt="" className='h-[100%] w-[100%] object-cover transition-all ease-linear duration-150 hover:scale-110 hover:transition-all hover:ease-linear hover:duration-150 cursor-pointer'/>
</div>

<div className="infodiv h-[29vh] w-full  px-5 py-3">

<h1 className='text-center text-[1.8vmax] font-poppins'>GDA Nursing Assistant</h1>

  <h1 className='text-[1.4vmax]'>Duration: <span className='text-[1.4vmax] ml-5'>2 Years</span> </h1>
<h1 className='text-[1.4vmax]' >Seats:  <span className='text-[1.4vmax] ml-10 '>30 seats available</span> </h1>

  <h1 className='text-[1.4vmax]'>Fees:  <span className='text-[1.4vmax] ml-12'>5000</span></h1>
  <h1 className='text-[1.4vmax]'>Ratings: <span  className='text-[1.2vmax] ml-5'>⭐⭐⭐⭐</span></h1>




</div>

</div>
</div>



<div className="box-container5 mr-[20px]">
<div className="fifthbox h-[63vh] w-[24vw] bg-white  overflow-hidden rounded-lg ">

<div className="imgbox h-[33vh] w-full   overflow-hidden ">
  <img src="https://themewagon.github.io/elearning/img/course-2.jpg" alt="" className='h-[100%] w-[100%] object-cover transition-all ease-linear duration-150 hover:scale-110 hover:transition-all hover:ease-linear hover:duration-150 cursor-pointer'/>
</div>

<div className="infodiv h-[29vh] w-full  px-5 py-3">

<h1 className='text-center text-[1.8vmax] font-poppins'>GDA Nursing Assistant</h1>

  <h1 className='text-[1.4vmax]'>Duration: <span className='text-[1.4vmax] ml-5'>2 Years</span> </h1>
<h1 className='text-[1.4vmax]' >Seats:  <span className='text-[1.4vmax] ml-10 '>30 seats available</span> </h1>

  <h1 className='text-[1.4vmax]'>Fees:  <span className='text-[1.4vmax] ml-12'>5000</span></h1>
  <h1 className='text-[1.4vmax]'>Ratings: <span  className='text-[1.2vmax] ml-5'>⭐⭐⭐⭐</span></h1>




</div>

</div>
</div>



<div className="box-container6 mr-[20px]">
<div className="sixthbox h-[63vh] w-[24vw] bg-white  overflow-hidden rounded-lg ">

<div className="imgbox h-[33vh] w-full   overflow-hidden ">
  <img src="https://themewagon.github.io/elearning/img/course-2.jpg" alt="" className='h-[100%] w-[100%] object-cover transition-all ease-linear duration-150 hover:scale-110 hover:transition-all hover:ease-linear hover:duration-150 cursor-pointer'/>
</div>

<div className="infodiv h-[29vh] w-full  px-5 py-3">

<h1 className='text-center text-[1.8vmax] font-poppins'>GDA Nursing Assistant</h1>

  <h1 className='text-[1.4vmax]'>Duration: <span className='text-[1.4vmax] ml-5'>2 Years</span> </h1>
<h1 className='text-[1.4vmax]' >Seats:  <span className='text-[1.4vmax] ml-10 '>30 seats available</span> </h1>

  <h1 className='text-[1.4vmax]'>Fees:  <span className='text-[1.4vmax] ml-12'>5000</span></h1>
  <h1 className='text-[1.4vmax]'>Ratings: <span  className='text-[1.2vmax] ml-5'>⭐⭐⭐⭐</span></h1>




</div>

</div>
</div>


<div className="box-container7 mr-[20px]">
<div className="seventhbox h-[63vh] w-[24vw] bg-white  overflow-hidden rounded-lg">

<div className="imgbox h-[33vh] w-full   overflow-hidden ">
  <img src="https://themewagon.github.io/elearning/img/course-2.jpg" alt="" className='h-[100%] w-[100%] object-cover transition-all ease-linear duration-150 hover:scale-110 hover:transition-all hover:ease-linear hover:duration-150 cursor-pointer'/>
</div>

<div className="infodiv h-[29vh] w-full  px-5 py-3">

<h1 className='text-center text-[1.8vmax] font-poppins'>GDA Nursing Assistant</h1>

  <h1 className='text-[1.4vmax]'>Duration: <span className='text-[1.4vmax] ml-5'>2 Years</span> </h1>
<h1 className='text-[1.4vmax]' >Seats:  <span className='text-[1.4vmax] ml-10 '>30 seats available</span> </h1>

  <h1 className='text-[1.4vmax]'>Fees:  <span className='text-[1.4vmax] ml-12'>5000</span></h1>
  <h1 className='text-[1.4vmax]'>Ratings: <span  className='text-[1.2vmax] ml-5'>⭐⭐⭐⭐</span></h1>




</div>

</div>
</div>


<div className="box-container8 mr-[20px]">
<div className="eightbox h-[63vh] w-[24vw] bg-white  overflow-hidden rounded-lg">

<div className="imgbox h-[33vh] w-full   overflow-hidden ">
  <img src="https://themewagon.github.io/elearning/img/course-2.jpg" alt="" className='h-[100%] w-[100%] object-cover transition-all ease-linear duration-150 hover:scale-110 hover:transition-all hover:ease-linear hover:duration-150 cursor-pointer'/>
</div>

<div className="infodiv h-[29vh] w-full  px-5 py-3">

<h1 className='text-center text-[1.8vmax] font-poppins'>GDA Nursing Assistant</h1>

  <h1 className='text-[1.4vmax]'>Duration: <span className='text-[1.4vmax] ml-5'>2 Years</span> </h1>
<h1 className='text-[1.4vmax]' >Seats:  <span className='text-[1.4vmax] ml-10 '>30 seats available</span> </h1>

  <h1 className='text-[1.4vmax]'>Fees:  <span className='text-[1.4vmax] ml-12'>5000</span></h1>
  <h1 className='text-[1.4vmax]'>Ratings: <span  className='text-[1.2vmax] ml-5'>⭐⭐⭐⭐</span></h1>




</div>

</div>
</div>


</Slider>



</div>





</div>




</div>


   </>
  )
}

export default Courses

