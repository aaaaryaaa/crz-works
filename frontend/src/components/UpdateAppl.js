import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

export default function UpdateAppl() {
  const navigate=useNavigate();
  const [ph_no,SetPhone]=useState(localStorage.getItem('ph_no'));
  const [isLoading, setIsLoading] = useState(false);
  const {state}=useLocation();
  const form=state;
  console.log(form);
  const [formData, setFormData] = useState({
    name: form.name,
    ph_no:ph_no,
    email: form.email,
    address: form.addr,
    surveyNo: form.sur_num,
    taluk: form.taluk,
    village: form.village,
    type: form.form_type,
    form1: '',
    pi1:'',
    su1:'',
    rtc: '',
    pi2:'',
    su2:'',
    ss: '',
    pi3:'',
    su3:'',
    chalan:'',
    pi4:'',
    su4:'',
    reasonRejection:form.reasonRejection,
    

    chalan:'',
    agree: false,
  });
  const villageOptions = {
    Brahmavara: [
      'Baikadi', 'Handadi', 'Haradi', 'Havanje', 'Kumragodu', 'Matapadi',
      'Neelavara', 'Uppuru', 'Varamballi'
    ],
    Bynduru: [
      "Bijuru", "Bynduru", "Hadavu", "Heranjalu", "Kambadakone", "Kergalu",
      "Kirimanjeshwara", "Maravanthe", "Nada", "Nandanavana", "Navunda",
      "Senapura", "Paduvari", "Shiruru", "Taggarse", "Uppunda", "Yadthare"
    ],
    Kapu: [
      "Bada", "Palimaru", "Hejamadi", "Innanje", "Kote", "Kurkalu", "Mattu",
      "Moodabettu", "Muluru", "Nadsalu", "Padu", "Pangala", "Thenka",
      "Uliyaragoli", "Yenagudde"
    ],
    Kota: [
      "Balkudru", "Gundmi", "Hanehalli", "Herur", "Hosala", "Irodi",
      "Kacchuru", "Kodi", "Kotathattu", "Manuru", "Moodahadu", "Pandeshwara",
      "Perampalli"
    ],
    Kundapura: [
      "Angalli", "Basruru", "Beejadi", "Balkuru", "Gopadi", "Gulwadi", "Hangaluru",
      "Koni", "Koteshwara", "Kumbhashi", "Kundapura", "Vaderahobli", "Thekkatte"
    ],
    Udupi: [
      "Ambalpady", "Anjaru", "Athradi", "Badanidiyuru", "Bellampalli", "Herga", "Kadekar",
      "Kidiuru", "Kodavuru", "Kukkehalli", "Kuthpadi", "Manipura", "Mooduthonse",
      "Putturu", "Paduthonse", "Shivalli", "Thenkanidiyuru", "Udyavara"
    ],
    Vandse: [
      "Gangolli", "Gujjadi", "Hakladi", "Hattiangadi",
      "Hemmadi", "Kattabelthuru", "Hosadu", "Talluru", "Trasi", "Uppinakudru"
    ],
  };
  function getImage1(e){
    e.preventDefault();
    const uploadedImage=e.target.files[0];
    if(uploadedImage){
        setFormData({
            ...formData,
            form1:uploadedImage
        });
        

    }

}
function getImage2(e){
  e.preventDefault();
  const uploadedImage=e.target.files[0];
  if(uploadedImage){
      setFormData({
          ...formData,
          rtc:uploadedImage
      });
      

  }

}
function getImage3(e){
  e.preventDefault();
  const uploadedImage=e.target.files[0];
  if(uploadedImage){
      setFormData({
          ...formData,
          ss:uploadedImage
      });
      

  }

}
function getImage4(e){
  e.preventDefault();
  const uploadedImage=e.target.files[0];
  if(uploadedImage){
      setFormData({
          ...formData,
          chalan:uploadedImage
      });
      

  }

}


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name of Applicant/Proponent is required';
    if (!formData.email) errors.email = 'Email id is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.surveyNo) errors.surveyNo = 'Survey No. is required';
    if (!formData.taluk) errors.taluk = 'Taluk is required';
    if (!formData.village) errors.village = 'Village is required';
    if (!formData.type) errors.type = 'Type is required';
    if (!formData.form1) errors.uploadForm = 'Upload form - 1 is required';
    if (!formData.rtc) errors.uploadRTC = 'Upload RTC is required';
    if (!formData.ss) errors.uploadSurveySketch = 'Upload survey sketch is required';
    if (!formData.chalan) errors.challan = 'Challan for Rs.200/- is required';
    if (!formData.agree) errors.agree = 'You must agree that the documents are true to the best of your knowledge and belief';

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      const formData2=new FormData();
        formData2.append("form1",formData.form1);
        formData2.append("ph_no",formData.ph_no);
        
      
        
      const response1=await axios.post('/api/form/upload/form1',formData2);
      
      if(response1.status==200){
        //setFormData({...formData,pi1:`${response1.data.public_id}`})
        formData.pi1=response1.data.public_id;
        formData.su1=response1.data.secure_url;
        //setFormData({...formData,su1:response1.data.secure_url})
        const formData3=new FormData();
        formData3.append("rtc",formData.rtc);
        formData3.append("ph_no",formData.ph_no);
      const response2=await axios.post('/api/form/upload/rtc',formData3);
      if(response2.status==200){
        formData.pi2=response2.data.public_id;
        formData.su2=response2.data.secure_url;
      const formData4=new FormData();
        formData4.append("ss",formData.ss);
        formData4.append("ph_no",formData.ph_no);
      
      

      const response3=await axios.post('/api/form/upload/ss',formData4);
      if(response3.status==200){
        formData.pi3=response3.data.public_id;
        formData.su3=response3.data.secure_url;
      const formData5=new FormData();
        formData5.append("chalan",formData.chalan);
        formData5.append("ph_no",formData.ph_no);
      
      
    
      const response4=await axios.post('/api/form/upload/chalan',formData5);
      if(response4.status==200){
        formData.pi4=response4.data.public_id;
        formData.su4=response4.data.secure_url;
      
      
      const response5=await axios.post('/api/form/submit',formData);
      if(response5.status==200){toast.success(response5.data.message);navigate('/');}
      else toast.error(response5.data.message);

      
      }}}}
      
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10 text-black">
      <div className="bg-blue-50 p-8 shadow-lg lg:w-2/5 w-[90%]">
        <h1 className="text-xl mb-6 text-center">Update Application</h1>
        <h1 className='text-xl mb-6 text-center break-words font-semibold bg-red-300 p-2'>Reason for Rejection:{form.reasonRejection}</h1>
        <form onSubmit={handleSubmit} className=''>
          <div className="mb-4">
            <label className="block mb-2">Name of Applicant/Proponent</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'}  bg-yellow-200 text-black`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Email id</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'}  bg-yellow-200 text-black`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className={`w-full p-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'}  bg-yellow-200 text-black`}
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Survey No.</label>
            <input
              type="text"
              name="surveyNo"
              value={formData.surveyNo}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.surveyNo ? 'border-red-500' : 'border-gray-300'}  bg-yellow-200 text-black`}
            />
            {errors.surveyNo && <p className="text-red-500 text-sm">{errors.surveyNo}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Taluk</label>
            <select
              name="taluk"
              value={formData.taluk}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.taluk ? 'border-red-500' : 'border-gray-300'}  bg-yellow-200 text-black`}
            >
            <option value="">select Taluk</option>
            {Object.keys(villageOptions).map((taluk) => (
              <option key={taluk} value={taluk}>{taluk}</option>))}
            </select>
            {errors.taluk && <p className="text-red-500 text-sm">{errors.taluk}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Village</label>
            <select
              name="village"
              value={formData.village}
              onChange={handleChange} 
              className={`w-full p-2 border ${errors.village ? 'border-red-500' : 'border-gray-300'}  bg-yellow-200 text-black`}
            >
            <option value="">selectVillage</option>
            {(villageOptions[formData.taluk] || []).map((village) => (
              <option key={village} value={village}>{village}</option>
            ))}
            </select>
            {errors.village && <p className="text-red-500 text-sm">{errors.village}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.type ? 'border-red-500' : 'border-gray-300'}  bg-yellow-200 text-black`}
            >
              <option value="">Select Type</option>
              <option value="Residential Conversion">Residential Conversion</option>
              <option value="Commercial Conversion">Commercial Conversion</option>
              <option value="Residential Construction">Residential Construction</option>
              <option value="Commercial/government Projects">Commercial/government Projects</option>
            </select>
            {errors.type && <p className="text-red-500 text-sm">{errors.type}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Upload form - 1</label>
            <input
              type="file"
              name="form1"
              onChange={getImage1}
              className={`w-full p-2 border ${errors.uploadForm ? 'border-red-500' : 'border-gray-300'}  bg-yellow-200 text-black`}
            />
            {errors.uploadForm && <p className="text-red-500 text-sm">{errors.uploadForm}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Upload RTC</label>
            <input
              type="file"
              name="rtc"
              onChange={getImage2}
              className={`w-full p-2 border ${errors.uploadRTC ? 'border-red-500' : 'border-gray-300'}  bg-yellow-200 text-black`}
            />
            {errors.uploadRTC && <p className="text-red-500 text-sm">{errors.uploadRTC}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Upload survey sketch</label>
            <input
              type="file"
              name="ss"
              onChange={getImage3}
              className={`w-full p-2 border ${errors.uploadSurveySketch ? 'border-red-500' : 'border-gray-300'}  bg-yellow-200 text-black`}
            />
            {errors.uploadSurveySketch && <p className="text-red-500 text-sm">{errors.uploadSurveySketch}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Challan for Rs.200/-</label>
            <input
              type="file"
              name="chalan"
              onChange={getImage4}
              className={`w-full p-2 border ${errors.challan ? 'border-red-500' : 'border-gray-300'}  bg-yellow-200 text-black`}
            />
            {errors.challan && <p className="text-red-500 text-sm">{errors.challan}</p>}
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className={`mr-2 ${errors.agree ? 'border-red-500' : 'border-gray-300'}  bg-yellow-200 text-black`}
              />
              Documents submitted herein are true to the best of my knowledge and belief
            </label>
            {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}
          </div>

          <div className="text-center">
            {/* <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              ReSubmit
            </button> */}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              disabled={isLoading}
            >
              {isLoading ? (
                <ClipLoader size={20} color={"#ffffff"} loading={isLoading} />
              ) : (
                <>Re-Submit</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
