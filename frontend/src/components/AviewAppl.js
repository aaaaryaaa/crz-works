import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
function AviewAppl(){
    const navigate=useNavigate();
    const {state}=useLocation()
  const formData=state.app;
  const return1=state.return1;
    const [stat,SetStat]=useState('null');
    const [errors, setErrors] = useState({});
    const [formD, setFormD] = useState({
      form_id:formData.form_id,
      ph_no:formData.ph_no,
      clearancectf:''
    });
    const [rejForm,SetRejForm]=useState({
      form_id:formData.form_id,
      reasonRejection:''
    })
  
    const handleChange = (e) => {
      const { name, value, type, files, checked } = e.target;
      
        SetRejForm({ ...rejForm, [name]: value });
      
    };
  const handleClick1=(e)=>{
    e.preventDefault();
    SetStat('acc');
  }
  const handleClick2=(e)=>{
    e.preventDefault();
    SetStat('rej');
  }
  function getImage1(e){
    e.preventDefault();
    const uploadedImage=e.target.files[0];
    if(uploadedImage){
        setFormD({
            ...formD,
            clearancectf:uploadedImage
        });
        

    }

}
const handleSubmit = async(e) => {
  e.preventDefault();
  if (formD.clearancectf!='') {
    const formData2=new FormData();
      formData2.append("clearancectf",formD.clearancectf);
      formData2.append("ph_no",formD.ph_no);
      formData2.append("form_id",formD.form_id);
      
    
      
    const response1=await axios.post('/api/form/accept',formData2);
    
    if(response1.status==200){
      toast.success("accepted form!!");
      navigate('/admin');
      }
    
  }
  else{
    toast.error("please upload the certificate");
  }
};
const handleSubmit2 = async(e) => {
  e.preventDefault();
  if (rejForm.reasonRejection!='') {
    
      
    
      
    const response1=await axios.post('/api/form/reject',rejForm);
    
    if(response1.status==200){
      toast.success("rejected form!!");
      navigate('/admin');
      }
    
  }
  else{
    toast.error("please upload the certificate");
  }
};


  
 
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10 text-black">
      <div className="bg-blue-50 p-8 shadow-lg lg:w-2/5 w-[90%]">
        <h1 className="text-xl mb-6 text-center">Application</h1>
        {formData.reasonRejection!='null' && formData.status=='null' && 
            <div className='mb-[3rem] '>
            <h1 className="text-xl mb-6 text-center font-semibold">Note: This Application has been rejected Once. The user has made changes and resubmitted it .</h1>
            
            
            </div>
        }
        {formData.reasonRejection!='null' && <div className='text-xl font-semibold mb-[3rem] bg-red-400 p-2'>Reason For Rejection: {formData.reasonRejection}</div>}
        <div className=''>
        { formData.status=='accepted'&& <div className="mb-4 ">
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
          <div className="mb-4 mt-[2rem]">
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
          <a href={formData.su2} target='_blank' >
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
          <a href={formData.su3} target='_blank' >
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
          <a href={formData.su4} target='_blank' >
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
          {formData.status=='null' && <button  className=" text-white py-2 px-7 rounded  bg-green-500 hover:scale-105 hover:bg-green-400" onClick={(e)=>handleClick1(e)}>
              Accept
            </button>}
            {formData.status=='null' && <button  className="bg-red-500 text-white py-2 px-7 rounded hover:scale-105 hover:bg-red-400" onClick={(e)=>handleClick2(e)}>
              Reject
            </button>}
            <button  className="bg-blue-500 text-white py-2 px-7 rounded hover:scale-105 hover:bg-blue-700" onClick={()=>navigate(`/${return1}`)}>
              Go Back
            </button>
          </div>
          {stat=='acc' && <div className="text-center flex justify-center items-center  mt-[3rem]">
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Upload Clearance Certificate</label>
            <input
              type="file"
              name="clearancectf"
              onChange={getImage1}
              className={`w-full p-2 border ${errors.clearancectf  ? 'border-red-500' : 'border-gray-300'}  bg-yellow-200 text-black`}
            />
            {errors.clearancectf  && <p className="text-red-500 text-sm">{errors.clearancectf }</p>}
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              Accept Form
            </button>
          </div>
          
          </form>
          </div>}
          {stat=='rej' && <div className="text-center flex justify-center items-center  mt-[3rem]">
            <form onSubmit={handleSubmit2}>
            <div className="mb-4 w-[25rem]">
            <label className="block mb-2">Reason For Rejection</label>
            <textarea
              name="reasonRejection"
              value={formD.reasonRejection}
              onChange={handleChange}
              rows="6"
              className={`w-full p-2 border ${errors.reasonRejection ? 'border-red-500' : 'border-gray-300'}  bg-yellow-200 text-black`}
            />
         
          </div>
          <div className="text-center">
            <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">
              Reject Form
            </button>
          </div>
          
          </form>
            </div>}
        </div>
      </div>
    </div>
  );

}
export default AviewAppl;