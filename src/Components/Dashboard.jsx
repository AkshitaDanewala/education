import React from 'react'
import { LiaUsersSolid } from "react-icons/lia";
import { LuUser2 } from "react-icons/lu";
import { PiGraduationCapLight } from "react-icons/pi";
import { LiaDollarSignSolid } from "react-icons/lia";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, RadialBarChart, RadialBar}from 'recharts';
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import DashboardLeft from './DashboardLeft';
const Dashboard = () => {



  const data = [
    {
      name: 'S',
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'M',
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'T',
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'W',
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'T',
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'F',
      pv: 3800,
      amt: 2500,
    },
    {
      name: ' S',
      pv: 4300,
      amt: 2100,
    },
    {
      name: ' S',
      pv: 4300,
      amt: 2100,
    },
    {
      name: ' M',
      pv: 4300,
      amt: 2100,
    },
    {
      name: ' T',
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'W',
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'T',
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'F',
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'S',
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'M',
      pv: 4300,
      amt: 2100,
    },
  ];

  const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  
  const data02 = [
    {
      // "name": "18-24",
      "uv": 31.47,
      "pv": 2400,
      "fill": "#8884d8"
    },
    {
      // "name": "25-29",
      "uv": 26.69,
      "pv": 4567,
      "fill": "#83a6ed"
    },
    {
      // "name": "30-34",
      "uv": -15.69,
      "pv": 1398,
      "fill": "#8dd1e1"
    },
    {
      // "name": "35-39",
      "uv": 8.22,
      "pv": 9800,
      "fill": "#82ca9d"
    },
    {
      // "name": "40-49",
      "uv": -8.63,
      "pv": 3908,
      "fill": "#a4de6c"
    },
    {
      // "name": "50+",
      "uv": -2.63,
      "pv": 4800,
      "fill": "#d0ed57"
    },
    {
      // "name": "unknow",
      "uv": 6.67,
      "pv": 4800,
      "fill": "#ffc658"
    }
  ]

  return (
<>

<div className='maindiv  h-screen w-full flex'>
   
<DashboardLeft/>



<div className="rightdiv h-full w-[80vw]">


<div className="dashboard h-[89vh] w-full bg-slate-100 mt-14">

<div className="boxesdiv  w-full  grid grid-flow-col px-7 py-6  bg-[rgb(243,243,243)] max-sm:grid  max-sm:grid-rows-2 max-sm:gap-y-3 max-sm:gap-x-3 max-sm:px-3 max-sm:py-7">

<div className="totalStudents  flex h-[32vh] w-[17vw] bg-[rgb(106,115,250)] rounded-lg max-sm:h-[19vh] max-sm:w-[35vw] ">

<div className="circlediv h-full w-[40%] flex items-center justify-center ">

    <div className="circle h-[11vh] w-[5vw] rounded-full bg-white flex items-center justify-center max-sm:h-[4vh] max-sm:w-[6vw]">
    <LiaUsersSolid  className='text-[2.1vmax]'/>
    </div>
</div>

<div className="contentdiv h-full w-[60%] text-white py-7 px-2 max-sm:py-4">

<h2 className='text-[1.1vmax] font-semibold max-sm:font-bold'>TOTAL  STUDENTS</h2>
<h3 className='text-[1.7vmax] font-bold mt-1'>3180</h3>
<div className="barline h-[1.1vh] w-[8vw] max-sm:h-[0.7vh] max-sm:w-[9vw] bg-slate-400 rounded-full mt-2">
<div className="filldiv  h-full w-[6vw] bg-white rounded-full"></div>
<h6 className='text-[1vmax] mt-2 font-semibold max-sm:text-[1.2vmax]'> 80% increase in <br />20 Days</h6>

</div>
</div>


</div>


<div className="newstudents flex h-[32vh] w-[17vw] bg-[rgb(255,170,22)] rounded-lg max-sm:h-[19vh] max-sm:w-[35vw]">

<div className="circlediv h-full w-[40%] flex items-center justify-center ">

    <div className="circle h-[11vh] w-[5vw] rounded-full bg-white flex items-center justify-center max-sm:h-[4vh] max-sm:w-[6vw]">
    <LuUser2 className='text-[2.1vmax] ' />
    </div>
</div>

<div className="contentdiv h-full w-[60%] text-white py-7 px-2 max-sm:py-4">

<h2 className='text-[1.1vmax] font-semibold max-sm:font-bold'>NEW STUDENTS</h2>
<h3 className='text-[1.7vmax] font-bold mt-1'>360</h3>
<div className="barline h-[1.1vh] w-[8vw] bg-slate-400 rounded-full mt-2 max-sm:h-[0.7vh] max-sm:w-[9vw]">
<div className="filldiv  h-full w-[4vw] bg-white rounded-full"></div>
<h6 className='text-[1vmax] mt-2 font-semibold max-sm:text-[1.2vmax]'> 50% increase in <br />20 Days</h6>

</div>
</div>


</div>


<div className="totalcourse  flex h-[32vh] w-[17vw] bg-[rgb(103,59,183)] rounded-lg max-sm:h-[19vh] max-sm:w-[35vw]">

<div className="circlediv h-full w-[40%] flex items-center justify-center ">

    <div className="circle h-[11vh] w-[5vw] rounded-full bg-white flex items-center justify-center  max-sm:h-[4vh] max-sm:w-[6vw]">
    <PiGraduationCapLight className='text-[2.1vmax] ' />
    </div>
</div>


<div className="contentdiv h-full w-[60%] text-white py-7 px-2 max-sm:py-4">

<h2 className='text-[1.1vmax] font-semibold max-sm:font-bold'>TOTAL  COURSE</h2>
<h3 className='text-[1.7vmax] font-bold mt-1'>28</h3>
<div className="barline h-[1.1vh] w-[8vw] bg-slate-400 rounded-full mt-2 max-sm:h-[0.7vh] max-sm:w-[9vw]">
<div className="filldiv  h-full w-[5vw] bg-white rounded-full"></div>
<h6 className='text-[1vmax] mt-2 font-semibold max-sm:text-[1.2vmax]'> 60% increase in <br />20 Days</h6>

</div>
</div>

</div>


<div className="feescollection flex h-[32vh] w-[17vw] bg-[rgb(255,22,22)] rounded-lg max-sm:h-[19vh] max-sm:w-[35vw]">

<div className="circlediv h-full w-[40%] flex items-center justify-center ">

    <div className="circle h-[11vh] w-[5vw] rounded-full bg-white flex items-center justify-center max-sm:h-[4vh] max-sm:w-[6vw]">
    <LiaDollarSignSolid className='text-[2.1vmax] ' />
    </div>
</div>

<div className="contentdiv  h-full w-[60%] text-white py-7 px-2 max-sm:py-4">

<h2 className='text-[1.1vmax] font-semibold max-sm:font-bold'>FEES  COLLECTION</h2>
<h3 className='text-[1.7vmax] font-bold mt-1'>1290$</h3>
<div className="barline h-[1.1vh] w-[8vw] bg-slate-400 rounded-full mt-2 max-sm:h-[0.7vh] max-sm:w-[9vw]">
<div className="filldiv  h-full w-[3vw] bg-white rounded-full"></div>
<h6 className='text-[1vmax] mt-2 font-semibold max-sm:text-[1.2vmax]'> 35% increase in <br />20 Days</h6>

</div>
</div>


</div>


</div>


<div className="graphdiv  w-full flex items-center justify-between  px-7 py-7 bg-[rgb(243,243,243)] max-sm:flex-col max-sm:gap-y-5">

<div className="barchart h-[85vh] max-sm:h-[60vh] w-[36vw] max-sm:w-[70vw] bg-white rounded-lg max-sm:-ml-0">

<div className="universityname h-[10vh] w-full  flex items-center justify-start">
<h1 className='text-[1.4vmax] ml-8 font-semibold max-sm:text-[2vmax] max-sm:font-bold'>University Survey</h1>
</div>
<hr />

 
  <div className="chart  h-[70vh] max-sm:h-[45vh] w-[36vw] max-sm:w-[67vw] mt-4 ">
  <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="rgb(19,103,200)" />
                </BarChart>
            </ResponsiveContainer>

         
  </div>

 
</div>


<div className="DonughtChart h-[85vh] max-sm:h-[55vh] w-[17vw] max-sm:w-[70vw] bg-white rounded-lg">

<div className="universitybar h-[10vh] w-full  flex items-center justify-start">
<h1 className='text-[1.4vmax] ml-8 font-semibold max-sm:text-[2vmax] max-sm:font-bold'>Donught Chart</h1>
</div>
<hr />


<PieChart width={215} height={250} className='max-sm:ml-4'>
  <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={80} fill="rgb(19,103,200)" />
</PieChart>
 

</div>


<div className="universitychart h-[85vh] max-sm:h-[55vh] max-sm:w-[70vw] w-[17vw] bg-white rounded-lg">

<div className="universitybar h-[10vh] w-full  flex items-center justify-start">
<h1 className='text-[1.4vmax] ml-8 font-semibold max-sm:text-[2vmax] max-sm:font-bold'>University Survey</h1>
</div>
<hr />

<RadialBarChart 
  width={230} 
  height={250} 
  innerRadius="10%" 
  outerRadius="80%" 
  data={data02} 
  startAngle={180} 
  endAngle={0}
  
>
  <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv'/>
  {/* <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" /> */}
  <Tooltip />
</RadialBarChart>
 

</div>



</div>



<div className="listdiv w-full  bg-[rgb(243,243,243)]  px-7 py-7 max-sm:px-0 bg-red-200">

<div className="listname h-[10vh] max-sm:h-[5vh] w-full  flex items-center justify-start bg-white rounded-lg ">
<h1 className='text-[1.4vmax] ml-8 font-semibold'>New Student List</h1>
</div>
<hr />

<table border="1" className='h-[60vh] w-full max-sm:w-0  bg-white mt-4 rounded-lg'>
  <thead>
    <tr>
      <th className='font-semibold'>No.</th>
      <th className='font-semibold'>Name</th>
      <th className='font-semibold'>Assigned Professor</th>
      <th className='font-semibold'>Date Of Admit</th>
      <th className='font-semibold'>Status</th>
      <th className='font-semibold'>Subject</th>
      <th className='font-semibold'>Fees</th>
      <th className='font-semibold'>Edit</th>

    </tr>
  </thead>
  <tbody>
    <tr className='text-center text-slate-600 text-[1.1vmax] font-semibold'>
      <td>01</td>
      <td>Jack Ronan</td>
      <td>Airi Satou</td>
      <td>02 jan 2024</td>
      <td>Checkin</td>
      <td>	Commerce</td>
      <td>120$</td>
      <td>
        <div className="btndiv h-[5vh] w-[4vw]  flex items-center justify-center ml-14 gap-1  ">
<MdDelete className='bg-[rgb(106,115,250)] rounded-sm h-[4vh] w-[2vw] text-white' /> <MdModeEdit className='bg-[rgb(255,22,22)] rounded-sm h-[4vh] w-[2vw] text-white' />
        </div>
      </td>
      
    </tr>

    <tr className='text-center text-slate-600 text-[1.1vmax] font-semibold'>
    <td>02</td>
      <td>Jimmy Morris</td>
      <td>Angelica Ramos</td>
      <td>02 jan 2024</td>
      <td>Pending</td>
      <td>Mechanical</td>
      <td>205$</td>
      <td>
      <div className="btndiv h-[5vh] w-[4vw]  flex items-center justify-center ml-14 gap-1">
<MdDelete className='bg-[rgb(106,115,250)] rounded-sm h-[4vh] w-[2vw] text-white' />  <MdModeEdit className='bg-[rgb(255,22,22)] rounded-sm h-[4vh] w-[2vw] text-white' />
        </div>
      </td>

    </tr>

    <tr className='text-center text-slate-600 text-[1.1vmax] font-semibold'>
    <td>03</td>
      <td>Nashid Martines</td>
      <td>Ashton Cox</td>
      <td>04 jan 2024</td>
      <td>Canceled</td>
      <td>Science</td>
      <td>180$</td>
      <td>
      <div className="btndiv h-[5vh] w-[4vw]  flex items-center justify-center ml-14 gap-1">
<MdDelete className='bg-[rgb(106,115,250)] rounded-sm h-[4vh] w-[2vw] text-white' /> <MdModeEdit className='bg-[rgb(255,22,22)] rounded-sm h-[4vh] w-[2vw] text-white' />
        </div>
      </td>

    </tr>

    <tr className='text-center text-slate-600 text-[1.1vmax] font-semibold'>
    <td>04</td>
      <td>Roman Aurora</td>
      <td>Cara Stevens</td>
      <td>05 jan 2024</td>
      <td>Process</td>
      <td>Arts</td>
      <td>200$</td>
      <td>
      <div className="btndiv h-[5vh] w-[4vw]  flex items-center justify-center ml-14 gap-1">
<MdDelete className='bg-[rgb(106,115,250)] rounded-sm h-[4vh] w-[2vw] text-white' /> <MdModeEdit className='bg-[rgb(255,22,22)] rounded-sm h-[4vh] w-[2vw] text-white' />
        </div>
      </td>

    </tr>

    <tr className='text-center text-slate-600 text-[1.1vmax] font-semibold'>
    <td>05</td>
      <td>Samantha</td>
      <td>	Bruno Nash</td>
      <td>06 jan 2024</td>
      <td>Checkin</td>
      <td>Maths</td>
      <td>210$</td>
      <td>
      <div className="btndiv h-[5vh] w-[5vw]  flex items-center justify-center ml-14 gap-1  ">
<MdDelete className='bg-[rgb(106,115,250)]  rounded-sm text-white h-[4vh] w-[2vw] '  /> <MdModeEdit className='bg-[rgb(255,22,22)] rounded-sm h-[4vh] w-[2vw] text-white' />
        </div>
      </td>

    </tr>
  </tbody>
</table>








</div>




</div>

</div>


</div>



</>

  )
}

export default Dashboard