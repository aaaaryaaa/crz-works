import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function AviewAppl(){
    const navigate=useNavigate();
  const {state}=useLocation()
  const formData=state.app;
  const return1=state.return1;
  const [ph_no,SetPhone]=useState(localStorage.getItem('ph_no'))
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10 text-black">
      <div className="bg-blue-50 p-8 shadow-lg lg:w-2/5 w-[90%]">
        <h1 className="text-xl mb-6 text-center">Application</h1>
        {formData.reasonRejection!='null' && 
            <div className='mb-[3rem] '>
            <h1 className="text-xl mb-6 text-center font-semibold">Note: This Application has been rejected Once. The user has made changes and resubmitted it .</h1>
            <label className='text-xl font-semibold'>Reason For Rejection: {formData.reasonRejection}</label>
            
            </div>
        }
        <form className=''>
          <div className="mb-4">
            <label className="block mb-2">Name of Applicant/Proponent</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              className={`w-full p-2 border border-gray-300  bg-yellow-200 text-black`}
            />
           
          </div>

          <div className="mb-4">
            <label className="block mb-2">Email id</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className={`w-full p-2 border border-gray-300  bg-yellow-200 text-black`}
            />
           
          </div>

          <div className="mb-4">
            <label className="block mb-2">Address</label>
            <textarea
              name="address"
              value={formData.addr}
              rows="3"
              className={`w-full p-2 border border-gray-300  bg-yellow-200 text-black`}
            />

          </div>

          <div className="mb-4">
            <label className="block mb-2">Survey No.</label>
            <input
              type="text"
              name="surveyNo"
              value={formData.sur_num}
              className={`w-full p-2 border border-gray-300  bg-yellow-200 text-black`}
            />

          </div>

          <div className="mb-4">
            <label className="block mb-2">Taluk</label>
            <input
                type="text"
              name="taluk"
              value={formData.taluk}
              className={`w-full p-2 border border-gray-300  bg-yellow-200 text-black`}
            />
           
          </div>

          <div className="mb-4">
            <label className="block mb-2">Village</label>
            <input
            type="text"
              name="village"
              value={formData.village}
              className={`w-full p-2 border border-gray-300  bg-yellow-200 text-black`}
            />
       
          </div>

          <div className="mb-4">
            <label className="block mb-2">Type</label>
            <input
            type="text"
              name="type"
              value={formData.form_type}
              className={`w-full p-2 border border-gray-300  bg-yellow-200 text-black`}
            />
            
          </div>

          <div className="mb-4" >
            <a href={formData.su1} target='_blank' >
            <label className="block mb-2">Click to View and Download Form-1</label>
            <input
              type="text"
              name="form1"
              value={formData.pi1}
              className={`w-full p-2 border border-gray-300  bg-yellow-200 text-black cursor-pointer hover:bg-blue-400`}
            />
            </a>
           
          </div>

          <div className="mb-4">
          <a href={formData.su1} target='_blank' >
            <label className="block mb-2"> Click to View and Download RTC</label>
            <input
                type="text"
              value={formData.pi2}
              name="rtc"
              className={`w-full p-2 border border-gray-300  bg-yellow-200 text-black cursor-pointer hover:bg-blue-400`}
            />
            </a>
          </div>

          <div className="mb-4">
          <a href={formData.su1} target='_blank' >
            <label className="block mb-2">Click to View and Download survey sketch</label>
            <input
             type="text"
              name="ss"
              value={formData.pi3}
              className={`w-full p-2 border border-gray-300  bg-yellow-200 text-black cursor-pointer hover:bg-blue-400`}
            />
            </a>
          </div>

          <div className="mb-4">
          <a href={formData.su1} target='_blank' >
            <label className="block mb-2"> Click to View and Download Challan </label>
            <input
              type="text"
              name="chalan"
              value={formData.pi4}
              className={`w-full p-2 borderborder-gray-300  bg-yellow-200 text-black cursor-pointer hover:bg-blue-400`}
            />
            </a>
          </div>

          

          <div className="text-center flex justify-between  mt-[3rem]">
          <button  className=" text-white py-2 px-7 rounded  bg-green-500 hover:scale-105 hover:bg-green-400" onClick={()=>navigate(`/${return1}`)}>
              Accept
            </button>
            <button  className="bg-red-500 text-white py-2 px-7 rounded hover:scale-105 hover:bg-red-400" onClick={()=>navigate(`/${return1}`)}>
              Reject
            </button>
            <button  className="bg-blue-500 text-white py-2 px-7 rounded hover:scale-105 hover:bg-blue-700" onClick={()=>navigate(`/${return1}`)}>
              Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );

}
export default AviewAppl;