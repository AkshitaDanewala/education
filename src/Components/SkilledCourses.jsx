import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';


const SkilledCourses = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 768, 
            settings:   {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
         
        ]
    
      }

  return (
   <>
   
   <div className='w-full h-screen bg-white  flex flex-col '>
    
    <div className="headingname h-[18vh] w-full  flex flex-col items-center justify-center py-2 mt-14">
    <h1 className='font-poppins font-semibold text-[1.7vmax] max-sm:text-[4vmax]'>BROWSE OUR </h1>
    <h2 className='font-poppins text-[2vmax] max-sm:text-[2.6vmax]'> Skilled Courses (Certificate)</h2>
    
    </div>
    
    <div className="coursesdiv h-[90vh] max-sm:h-[100vh] w-full bg-[rgb(3,95,172)] flex items-center justify-center px-7 py-5 relative">
    
    
    <div className="boxesdiv   h-[69vh]  max-sm:h-[60vh] w-[81vw]  px-4 max-sm:w-full">
    
    <Slider {...settings} >
      
    <div className="box-container1 mr-[20px] mt-5  ">
      <div  className="firstbox  h-[61vh] max-sm:h-[51vh] w-[24vw] max-sm:w-[75vw] bg-white overflow-hidden rounded-lg ml-3 max-sm:ml-0 ">
    
    <div className="imgbox h-[33vh] max-sm:ml-0  w-full   overflow-hidden rounded-lg ">
      <img src="https://themewagon.github.io/elearning/img/course-2.jpg" alt="" className='h-[100%] w-[100%] object-cover  transition-all ease-linear duration-150 hover:scale-110 hover:transition-all hover:ease-linear hover:duration-150 cursor-pointer'/>
    </div>
    
    <div className="infodiv h-[27vh] w-full max-sm:w-[75vw]  px-5 py-3">
    
    <h1 className='text-center text-[1.6vmax] max-sm:text-[2.5vmax] font-poppins'>Cardiac Care</h1>
    
    <div className='flex justify-between mt-2'>
    <h1 className='text-[1.3vmax] max-sm:text-[2vmax]'>Duration: <span className='text-[1.3vmax] max-sm:text-[2vmax] ml-1'>1 Year</span> </h1>
      <h1 className='text-[1.3vmax] max-sm:text-[2vmax]'>Fees:  <span className='text-[1.3vmax] max-sm:text-[2vmax] ml-1'>5000</span></h1>
    </div>
    
    <h1 className='text-[1.3vmax] max-sm:text-[2vmax] mt-1' >Seats:  <span className='text-[1.3vmax] max-sm:text-[2vmax] ml-7 mt-1 '>30 seats</span> </h1>
    
      <h1 className='text-[1.3vmax] max-sm:text-[2vmax] mt-1'>Ratings: <span  className='text-[1.2vmax] max-sm:text-[2vmax] ml-3 mt-1'>⭐⭐⭐⭐</span></h1>
    
    
    
    
    </div>
    
    </div>
    </div>
    
    
    <div className="box-container2 mr-[20px] mt-5">
    <div className="secondbox h-[61vh] max-sm:h-[51vh] w-[24vw] max-sm:w-[73vw] bg-white  overflow-hidden rounded-lg max-sm:ml-0.5   ">
    
    <div className="imgbox h-[33vh] w-full max-sm:ml-0  overflow-hidden ">
      <img src="https://themewagon.github.io/elearning/img/course-2.jpg" alt="" className='h-[100%] w-[100%] object-cover transition-all ease-linear duration-150 hover:scale-110 hover:transition-all hover:ease-linear hover:duration-150 cursor-pointer'/>
    </div>
    
    <div className="infodiv h-[27vh] max-sm:w-[75vw] w-full  px-5 py-3">
    
    <h1 className='text-center text-[1.6vmax] max-sm:text-[2.5vmax] font-poppins'>Dental Hygienist</h1>
    
    <div className='flex justify-between mt-2'>
    <h1 className='text-[1.3vmax] max-sm:text-[2vmax]'>Duration: <span className='text-[1.3vmax] ml-1 max-sm:text-[2vmax] '>1 Year</span> </h1>
      <h1 className='text-[1.3vmax] max-sm:text-[2vmax]'>Fees:  <span className='text-[1.3vmax] ml-1 max-sm:text-[2vmax] '>5000</span></h1>
    </div>  
      
    <h1 className='text-[1.3vmax] mt-1 max-sm:text-[2vmax]' >Seats:  <span className='text-[1.3vmax] ml-7 mt-1 max-sm:text-[2vmax] '>30 seats </span> </h1>
    
      
      <h1 className='text-[1.3vmax] mt-1 max-sm:text-[2vmax]'>Ratings: <span  className='text-[1.2vmax] ml-3 mt-1 max-sm:text-[2vmax]'>⭐⭐⭐⭐</span></h1>
    
    
    
    
    </div>
    
    </div>
    </div>
    
    
    <div className="box-container3 mr-[20px] mt-5">
    <div className="thirdbox h-[61vh]  w-[24vw] max-sm:h-[51vh] max-sm:w-[73vw] bg-white  overflow-hidden rounded-lg ml-2 max-sm:ml-0.5">
    
    <div className="imgbox h-[33vh] w-full max-sm:ml-0  overflow-hidden ">
      <img src="https://themewagon.github.io/elearning/img/course-2.jpg" alt="" className='h-[100%] w-[100%] object-cover transition-all ease-linear duration-150 hover:scale-110 hover:transition-all hover:ease-linear hover:duration-150 cursor-pointer'/>
    </div>
    
    <div className="infodiv h-[27vh] max-sm:w-[75vw] w-full  px-5 py-3">
    
    <h1 className='text-center text-[1.6vmax] max-sm:text-[2.5vmax]  font-poppins'>CSSD</h1>
    
    <div className='flex justify-between mt-2'>
    <h1 className='text-[1.3vmax] max-sm:text-[2vmax]'>Duration: <span className='text-[1.3vmax] ml-1 max-sm:text-[2vmax]'>1 Year</span> </h1>
      <h1 className='text-[1.3vmax] max-sm:text-[2vmax]'>Fees:  <span className='text-[1.3vmax] ml-1 max-sm:text-[2vmax]'>5000</span></h1>
    </div>
      
    <h1 className='text-[1.3vmax] mt-1 max-sm:text-[2vmax]' >Seats:  <span className='text-[1.3vmax] ml-7 mt-1 max-sm:text-[2vmax] '>30 seats </span> </h1>
    
     
      <h1 className='text-[1.3vmax] mt-1 max-sm:text-[2vmax]'>Ratings: <span  className='text-[1.2vmax] ml-3 mt-1 max-sm:text-[2vmax]'>⭐⭐⭐⭐</span></h1>
    
    
    </div>
    
    </div>
    </div>
    
    
    <div className="box-container4 mr-[20px] mt-5">
    <div className="fourthbox h-[61vh] w-[24vw] max-sm:h-[51vh] max-sm:w-[73vw] bg-white  overflow-hidden rounded-lg ml-3 max-sm:ml-0.5  ">
    
    <div className="imgbox h-[33vh] w-full max-sm:ml-0  overflow-hidden ">
      <img src="https://themewagon.github.io/elearning/img/course-2.jpg" alt="" className='h-[100%] w-[100%] object-cover transition-all ease-linear duration-150 hover:scale-110 hover:transition-all hover:ease-linear hover:duration-150 cursor-pointer'/>
    </div>
    
    <div className="infodiv h-[27vh] w-full max-sm:w-[75vw]   px-5 py-3">
    
    <h1 className='text-center text-[1.6vmax] max-sm:text-[2.5vmax] font-poppins'>Dresser</h1>
    
    <div className='flex justify-between mt-2'>
    <h1 className='text-[1.3vmax] max-sm:text-[2vmax]'>Duration: <span className='text-[1.3vmax] ml-1 max-sm:text-[2vmax]'>1 Year</span> </h1>
      <h1 className='text-[1.3vmax] max-sm:text-[2vmax]'>Fees:  <span className='text-[1.3vmax] ml-1 max-sm:text-[2vmax]'>5000</span></h1>
    </div>
    <h1 className='text-[1.3vmax] mt-1 max-sm:text-[2vmax]' >Seats:  <span className='text-[1.3vmax] ml-7 mt-1 max-sm:text-[2vmax] '>30 seats </span> </h1>
    
     
      <h1 className='text-[1.3vmax] mt-1 max-sm:text-[2vmax]'>Ratings: <span  className='text-[1.2vmax] ml-3 mt-1 max-sm:text-[2vmax]'>⭐⭐⭐⭐</span></h1>
    
    
    
    
    </div>
    
    </div>
    </div>
    
    
    
    <div className="box-container5 mr-[20px] mt-5">
    <div className="fifthbox h-[61vh] w-[24vw] max-sm:h-[51vh] max-sm:w-[73vw] bg-white  overflow-hidden rounded-lg ml-2 max-sm:ml-0.5 ">
    
    <div className="imgbox h-[33vh] w-full max-sm:ml-0  overflow-hidden ">
      <img src="https://themewagon.github.io/elearning/img/course-2.jpg" alt="" className='h-[100%] w-[100%] object-cover transition-all ease-linear duration-150 hover:scale-110 hover:transition-all hover:ease-linear hover:duration-150 cursor-pointer'/>
    </div>
    
    <div className="infodiv h-[27vh] max-sm:w-[75vw]  w-full  px-5 py-3">
    
    <h1 className='text-center text-[1.6vmax] max-sm:text-[2.5vmax] font-poppins'>Sanitory Inspector</h1>
    
    <div className='flex justify-between mt-2'>
    <h1 className='text-[1.3vmax] max-sm:text-[2vmax]'>Duration: <span className='text-[1.3vmax] ml-1 max-sm:text-[2vmax]'>1 Year</span> </h1>
      <h1 className='text-[1.3vmax] max-sm:text-[2vmax]'>Fees:  <span className='text-[1.3vmax] ml-1 max-sm:text-[2vmax]'>5000</span></h1>
    </div>
      
    <h1 className='text-[1.3vmax] mt-1 max-sm:text-[2vmax]' >Seats:  <span className='text-[1.3vmax] ml-7  mt-1 max-sm:text-[2vmax] '>30 seats </span> </h1>
    
      
      <h1 className='text-[1.3vmax]  mt-1 max-sm:text-[2vmax]'>Ratings: <span  className='text-[1.2vmax] ml-3  mt-1 max-sm:text-[2vmax]'>⭐⭐⭐⭐</span></h1>
    
    
    </div>
    
    </div>
    </div>
    
    
    
    <div className="box-container6 mr-[20px] mt-5">
    <div className="sixthbox h-[61vh] w-[24vw] max-sm:h-[51vh] max-sm:w-[73vw] bg-white  overflow-hidden rounded-lg ml-3 max-sm:ml-0.5">
    
    <div className="imgbox h-[33vh] w-full max-sm:ml-0  overflow-hidden ">
      <img src="https://themewagon.github.io/elearning/img/course-2.jpg" alt="" className='h-[100%] w-[100%] object-cover transition-all ease-linear duration-150 hover:scale-110 hover:transition-all hover:ease-linear hover:duration-150 cursor-pointer'/>
    </div>
    
    <div className="infodiv h-[27vh] max-sm:w-[75vw] w-full  px-5 py-3">
    
    <h1 className='text-center text-[1.6vmax] max-sm:text-[2.5vmax] font-poppins'>First Aid </h1>
    
    <div className='flex justify-between mt-2'>
    <h1 className='text-[1.3vmax] max-sm:text-[2vmax]'>Duration: <span className='text-[1.3vmax] ml-1 max-sm:text-[2vmax]'>2 Years</span> </h1>
      <h1 className='text-[1.3vmax] max-sm:text-[2vmax]'>Fees:  <span className='text-[1.3vmax] ml-1 max-sm:text-[2vmax]'>5000</span></h1>
    </div>
     
    <h1 className='text-[1.3vmax] mt-1 max-sm:text-[2vmax]' >Seats:  <span className='text-[1.3vmax] ml-7 mt-1 max-sm:text-[2vmax] '>30 seats </span> </h1>
    
     
      <h1 className='text-[1.3vmax] mt-1 max-sm:text-[2vmax]'>Ratings: <span  className='text-[1.2vmax] ml-3 mt-1 max-sm:text-[2vmax]'>⭐⭐⭐⭐</span></h1>
    
    
    
    
    </div>
    
    </div>
    </div>
    
    
    
    
    
    </Slider>
    
    
    
    </div>
    <Link to="/coursesCategory" className='absolute top-[6%] left-[3%] text-[2vmax] text-white'><FaRegArrowAltCircleLeft /></Link>
    
    
    
    
    </div>
    
    
    
    
    </div>
   
   
   </>
  )
}

export default SkilledCourses