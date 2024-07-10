import React, { useState } from 'react';
import usericon from '../assets/usericon.svg';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
    const [name, setName] = useState('');
    const [ph_no, setph_no] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate=useNavigate();

    const handleOTP = async () => {
        if (!name || !ph_no) {
            setErrors({
                name: !name ? 'Name is required' : '',
                ph_no: !ph_no ? 'ph_no number is required' : ''
            });
            return;
        }

        try {
            const response = await fetch('/api/user/getotp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, ph_no })
            });

            if (!response.ok) {
                throw new Error('Failed to send OTP');
            }
            
            toast.success("OTP sent successfully");
            setOtpSent(true);
            setErrors({});
            console.log('OTP sent successfully');
        } catch (error) {
            console.error('Error sending OTP:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!otp) {
            setErrors({
                otp: 'OTP is required'
            });
            return;
        }

        try {
            const response = await axios.post('/api/user/login', {
                name,ph_no,otp
            });

            if (!response.data) {
                throw new Error('Failed to log in');
            }
             const token  = response.data.token;
             const name1=response.data.name;
             const ph_no1=response.data.ph_no;
             const role=response.data.role;
             localStorage.setItem('token', token);
             localStorage.setItem('name', name1);
             localStorage.setItem('ph_no', ph_no1);
             localStorage.setItem('role',role);
            
            
            console.log('Logged in successfully');
            toast.success('Logged in successfully');
            navigate('/');
        } catch (error) {
            console.error('Error logging in:', error);
            setErrors({
                otp: 'Invalid OTP'
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center sm:m-5 text-black">
            <div className="lg:bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                <img src={usericon} alt="user" className='w-fit ml-auto mr-auto h-[6rem]' />
                <h2 className='text-lg font-bold mb-6 text-gray-800'>An OTP will be sent for Sign In</h2>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className={`w-full px-4 py-2 border bg-gray-200 rounded-lg focus:outline-none focus:ring-2 ${errors.name ? 'border-red-600 focus:ring-red-600' : 'focus:ring-blue-600'}`}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your Name"
                            required
                        />
                        {errors.name && <p className="text-red-600 mt-2">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-black mb-2" htmlFor="ph_no">Phone No.</label>
                        <div className='flex'>
                            <input
                                type="text"
                                id="ph_no"
                                className={`w-full px-4 py-2 border bg-gray-200 rounded-lg focus:outline-none focus:ring-2 ${errors.ph_no ? 'border-red-600 focus:ring-red-600' : 'focus:ring-blue-600'}`}
                                value={ph_no}
                                onChange={(e) => setph_no(e.target.value)}
                                placeholder="Enter your ph_no Number"
                                required
                            />
                            <button
                                type="button"
                                className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 whitespace-nowrap ml-2'
                                onClick={handleOTP}
                            >
                                Send OTP
                            </button>
                        </div>
                        {errors.ph_no && <p className="text-red-600 mt-2">{errors.ph_no}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="otp">Enter OTP</label>
                        <input
                            type="text"
                            id="otp"
                            className={`w-full px-4 py-2 border bg-gray-200 rounded-lg focus:outline-none focus:ring-2 ${errors.otp ? 'border-red-600 focus:ring-red-600' : 'focus:ring-blue-600'}`}
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            placeholder="Enter OTP"
                            required
                            disabled={!otpSent}
                        />
                        {errors.otp && <p className="text-red-600 mt-2">{errors.otp}</p>}
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            disabled={!otpSent || !otp}
                        >
                            Sign In
                        </button>
                        <button
                            type="button"
                            className="text-blue-600 hover:underline"
                            onClick={handleOTP}
                        >
                            Resend Code?
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
