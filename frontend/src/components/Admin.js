import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const navigate = useNavigate();

  return (
    <div className="my-9 flex flex-col items-center justify-center text-black">
      <h1 className="text-3xl font-bold mb-8">Logged in as Admin</h1>
      <button
        className="bg-white w-2/3 border border-gray-300 py-3 px-6 m-2 text-lg shadow-lg hover:shadow-xl transition duration-300"
        onClick={() => navigate('/resiConversion')}
      >
        Residential Conversion
      </button>
      <button
        className="bg-white w-2/3 border border-gray-300 py-3 px-6 m-2 text-lg shadow-lg hover:shadow-xl transition duration-300"
        onClick={() => navigate('/resiConstruction')}
      >
        Residential Construction
      </button>
      <button
        className="bg-white w-2/3 border border-gray-300 py-3 px-6 m-2 text-lg shadow-lg hover:shadow-xl transition duration-300"
        onClick={() => navigate('/commConversion')}
      >
        Commercial Conversion
      </button>
      <button
        className="bg-white w-2/3 border border-gray-300 py-3 px-6 m-2 text-lg shadow-lg hover:shadow-xl transition duration-300"
        onClick={() => navigate('/commConstruction')}
      >
        Commercial Construction
      </button>
    </div>
  );
}
