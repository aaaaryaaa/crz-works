import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function PrevAppl() {
  const navigate=useNavigate();
  const [ph_no,setPh_no]=useState(localStorage.getItem('ph_no'));
  const [applications,SetApplications]=useState([]);
  const renderApplications = (status, headerColor, itemColor, title) => {
    return (
      <div className="mb-7 lg:ml-[20%] lg:mr-[20%] text-black">
        <div className={`p-4 m-5 ${headerColor}`}>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
        </div>
        {applications
          .filter(application => application.status === status)
          .map(application => (
            <div key={application.form_id} className={`p-4 mx-5 my-2 flex lg:flex-row flex-col lg:justify-between justify-center ${itemColor}`}>
              <span>{application.form_id}</span>
              <span>Type: {application.form_type}</span>
              <span  className="text-red-500 cursor-pointer hover:text-blue-500" onClick={()=>{if(status=='rejected')navigate('/updateappl',{state:application});else navigate('/viewappl',{state:application})}}>
                View
              </span>
            </div>
          ))}
      </div>
    );
  };
  const func=async()=>{
    console.log(ph_no);
    const response=await axios.post('/api/form/userformsnull',{ph_no});
    SetApplications(response.data.forms);

  }
  useEffect(()=>{
    func();
    console.log(applications);
  },[])
  useEffect(()=>{
    setPh_no(localStorage.getItem('ph_no'));
  },[localStorage.getItem('ph_no')])

  return (
    <div className="p-4 min-h-screen">
      {renderApplications('accepted', 'bg-green-400', 'bg-green-200', 'Accepted Applications')}
      {renderApplications('rejected', 'bg-red-400', 'bg-red-200', 'Rejected Applications')}
      {renderApplications('null', 'bg-yellow-400', 'bg-yellow-200', 'Pending Applications')}
    </div>
  );
}
