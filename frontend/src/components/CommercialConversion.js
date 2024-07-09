import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const applications1 = [
    { id: 1, title: 'App 1', status: 'pending' },
    { id: 2, title: 'App 2', status: 'rejected' },
    { id: 3, title: 'App 3', status: 'accepted' },
    { id: 4, title: 'App 4', status: 'rejected' },
];
const a=10;
export default function CommercialConversion() {
    const navigate = useNavigate()
    const [filter, setFilter] = useState('null');
    const [filteredApplications, setFilteredApplications] = useState([]);
    const [applications,SetApplications]=useState([]);
    useEffect(() => {
        const fetchData = () => {
            const filteredApps = applications.filter(app => app.status === filter);
            setFilteredApplications(filteredApps);
        };

        fetchData();
    }, [filter,applications]);
    const func=async()=>{
        const response=await axios.post('/api/form/adminformsrej',{a});
        console.log(response);
        SetApplications(response.data.forms);
        
    
      }
      useEffect(()=>{
        func();
        
      },[])

    return (
        <div className='text-black'>
            <h1 className='w-full m-5 text-3xl font-bold'>Commercial Conversion</h1>
            <div className="flex h-screen">
                <div className="w-1/4 bg-gray-200 shadow-md p-4">
                    <div className="text-xl font-semibold mb-4">Filter Applications</div>
                    <button
                        className={`w-full py-2 mb-2 rounded ${filter === 'null' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => setFilter('null')}
                    >
                        Pending Applications
                    </button>
                    <button
                        className={`w-full py-2 mb-2 rounded ${filter === 'rejected' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => setFilter('rejected')}
                    >
                        Rejected Applications
                    </button>
                    <button
                        className={`w-full py-2 rounded ${filter === 'accepted' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => setFilter('accepted')}
                    >
                        Accepted Applications
                    </button>
                </div>

                <div className="w-3/4 bg-gray-100 p-4">
                    <h1 className="text-2xl font-bold mb-4">Applications</h1>
                    <ul>
                        {filteredApplications.map(app => (
                            <li key={app.form_id} className="bg-white p-4 mb-2 rounded shadow">
                                <div className='p-5 bg-gray-100 cursor-pointer' onClick={()=>navigate('/adminviewappl',{state:{app,return1:'commConversion'}})}>
                                FormId: {app.form_id} -----   Sender: {app.name}---- Phone: {app.ph_no}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
