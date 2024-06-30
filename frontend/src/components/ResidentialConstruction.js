import React, { useEffect, useState } from 'react';

const applications = [
    { id: 1, title: 'App 1', status: 'pending' },
    { id: 2, title: 'App 2', status: 'rejected' },
    { id: 3, title: 'App 3', status: 'accepted' },
    { id: 4, title: 'App 4', status: 'pending' },
];

export default function ResidentialConstruction (){
    const [filter, setFilter] = useState('pending');
    const [filteredApplications, setFilteredApplications] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            const filteredApps = applications.filter(app => app.status === filter);
            setFilteredApplications(filteredApps);
        };

        fetchData();
    }, [filter]);

    return (
        <div>
            <h1 className='w-full m-5 text-3xl font-bold'>Residential Construction</h1>
            <div className="flex h-screen">
                <div className="w-1/4 bg-gray-200 shadow-md p-4">
                    <div className="text-xl font-semibold mb-4">Filter Applications</div>
                    <button
                        className={`w-full py-2 mb-2 rounded ${filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                        onClick={() => setFilter('pending')}
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
                            <li key={app.id} className="bg-white p-4 mb-2 rounded shadow">
                                {app.title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
