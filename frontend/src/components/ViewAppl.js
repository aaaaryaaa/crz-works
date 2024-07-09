import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
export default function ViewAppl() {
  const navigate=useNavigate();
  const {state}=useLocation()
  const formData=state;
  const [ph_no,SetPhone]=useState(localStorage.getItem('ph_no'))
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10 text-black">
      <div className="bg-blue-50 p-8 shadow-lg lg:w-2/5 w-[90%]">
        <h1 className="text-xl mb-6 text-center">Application</h1>
        <form className=''>
        { formData.status=='accepted'&& <div className="mb-4 mt-[3rem]">
          <a href={formData.clearance} target='_blank' >
            <label className="block mb-2 font-semibold text-xl"> Click to View and Download Clearance Certificate </label>
            <input
              type="text"
              name="clearancectf"
              value={formData.clearancepi}
              className={`w-full p-2 borderborder-gray-300  bg-yellow-200 text-black cursor-pointer hover:bg-blue-400`}
            />
            </a>
          </div>}
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

          <div className="mb-4">
            <label className="block mb-2">Upload form - 1</label>
            <input
              type="text"
              name="form1"
              value={formData.pi1}
              className={`w-full p-2 border border-gray-300  bg-yellow-200 text-black`}
            />
           
          </div>

          <div className="mb-4">
            <label className="block mb-2">Upload RTC</label>
            <input
                type="text"
              value={formData.pi2}
              name="rtc"
              className={`w-full p-2 border border-gray-300  bg-yellow-200 text-black`}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Upload survey sketch</label>
            <input
             type="text"
              name="ss"
              value={formData.pi3}
              className={`w-full p-2 border border-gray-300  bg-yellow-200 text-black`}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Challan for Rs.200/-</label>
            <input
              type="text"
              name="chalan"
              value={formData.pi4}
              className={`w-full p-2 borderborder-gray-300  bg-yellow-200 text-black`}
            />
          </div>
         

          

          <div className="text-center">
            <button  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" onClick={()=>navigate('/prevappl')}>
              Go Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
