import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import crossmark from '../assets/crossmark.svg';
import logo from '../assets/govtlogo.png';
import hamburgericon from '../assets/hamburgericon.svg';
import toast from 'react-hot-toast';
const Navbar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [logged, setLogged] = useState(localStorage.getItem('token'));
    const [role, setRole] = useState(localStorage.getItem('role'));
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('ph_no');
        localStorage.removeItem('role');
        localStorage.clear();
        navigate('/');
        toast.success("logged out");
    };

    const handleLogin = () => {
        navigate('/login');
    }

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleForm = () => {
        navigate('/impforms');
    };

    const handlePrevAppl = () => {
        navigate('/prevappl');
    };

    const handleNewAppl = () => {
        navigate('/newappl');
    };

    const handleViewAppl = () => {
        navigate('/viewappl');
    }

    const handleUpdateAppl = () => {
        navigate('/updateappl');
    }

    const handleAbout = () => {
        navigate('/about');
    };

    const handleAdmin = () => {
        navigate('/admin');
    }

    const handleGoHome = () => {
        navigate('/');
    };

    useEffect(() => {
        setLogged(localStorage.getItem('token'));
        //setRole('ADMIN');
        setRole(localStorage.getItem('role'));
    }, [localStorage.getItem('token'), localStorage.getItem('role')]);

    return (
        <div>
            <nav className="p-4 w-full bg-white shadow-lg">
                <div className="container mx-auto flex justify-between items-center">
                    <div className='lg:flex flex-col w-full'>
                        <div className='lg:py-3'>
                            <a
                                href="/"
                                className="flex items-center space-x-3 rtl:space-x-reverse"
                            >
                                <div className='flex flex-row lg:absolute'>
                                    <img src={logo} className="lg:h-16 h-4" alt="LOGO" />
                                    <p className='lg:py-5 px-1 text-black lg:text-lg text-[0.7rem] font-semibold'>{t('udupiDistrict')}</p>
                                </div>
                                <span className="lg:block hidden lg:text-center lg:w-full lg:text-4xl text-lg font-bold text-black whitespace-nowrap">
                                    {t('coastalRegulationZone')}
                                </span>
                            </a>
                        </div>
                        <div className="flex items-center lg:pt-5 pt-2">
                            <div className="hidden md:flex space-x-10">
                                {role!=='ADMIN' &&(
                                    <>
                                    <button onClick={handleGoHome} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">{t('home')}</button>
                                <button onClick={handleAbout} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">{t('aboutUs')}</button>
                                    </>
                                )}
                                {role == 'USER' && (
                                    <>
                                        <button onClick={handleNewAppl} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">{t('newApplication')}</button>
                                        <button onClick={handlePrevAppl} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">{t('pendingPreviousApplication')}</button>
                                        {/* <button onClick={handleViewAppl} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">{t('viewApplication')}</button>
                                        <button onClick={handleUpdateAppl} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">{t('updateApplication')}</button> */}
                                        <button onClick={handleForm} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">{t('forms')}</button>
                                    </>
                                        )}
                                {role=='ADMIN' &&(
                                    <>
                                        <button onClick={handleAdmin} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">Home</button>
                                        <button onClick={() => navigate('/resiConversion')} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">Residential Conversion</button>
                                        <button onClick={() => navigate('/resiConstruction')} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">Residential Construction</button>
                                        <button onClick={() => navigate('/commConversion')} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">Commercial Conversion</button>
                                        <button onClick={() => navigate('/commConstruction')} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">Commercial/government Projects</button>
                                    </>
                                )}
                            </div>
                            <div className="md:hidden flex">
                                <span className="lg:hidden block lg:text-center lg:w-full lg:text-4xl text-sm font-bold text-black whitespace-nowrap py-1 relative top-[0.5rem]">
                                    {t('coastalRegulationZone')}
                                </span>
                                <button
                                    onClick={handleToggle}
                                    className="text-black focus:outline-none"
                                >
                                    {!isOpen ? (
                                        <img src={hamburgericon} alt='ham' className='h-10 px-2' />
                                    ) : (
                                        <div className='h-10 px-2' />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    {logged ? (
                        <div className="text-white bg-blue-600  rounded-lg relative top-[-1.5rem]">
                            <button onClick={handleLogout} className="lg:text-lg text-[0.5rem] p-2 font-extraboldcursor-pointer whitespace-nowrap">{t('signOut')}</button>
                        </div>
                    ) : (
                        <div className="text-white bg-blue-600 rounded-lg relative top-[-1.5rem]">
                            <button onClick={handleLogin} className="lg:text-lg text-[0.5rem] p-2 font-extrabold cursor-pointer whitespace-nowrap">{t('signIn')}</button>
                        </div>
                    )}
                </div>
                {isOpen && (
                    <div
                        className="md:hidden absolute z-[50] top-36 left-0 right-0 mynav bg-white space-y-4 p-4 text-black flex flex-col shadow-lg text-start"
                        ref={dropdownRef}
                    >
                        <button onClick={handleToggle}><img src={crossmark} alt='cross' className='h-10 px-2' /></button>
                        {role!=='ADMIN' &&(
                            <>
                                <button onClick={handleGoHome} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">{t('home')}</button>
                        <button onClick={handleAbout} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">{t('aboutUs')}</button>
                            </>
                        )}
                        {role === 'USER' && (
                            <>
                                <button onClick={handleNewAppl} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">{t('newApplication')}</button>
                                <button onClick={handlePrevAppl} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">{t('pendingPreviousApplication')}</button>
                                {/* <button onClick={handleViewAppl} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">{t('viewApplication')}</button>
                                        <button onClick={handleUpdateAppl} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">{t('updateApplication')}</button> */}
                                <button onClick={handleForm} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">{t('forms')}</button>
                            </>
                )}
                            {role === 'ADMIN'&&(
                            <>
                                <button onClick={handleAdmin} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">Home</button>
                                <button onClick={() => navigate('/resiConversion')} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">Residential Conversion</button>
                                <button onClick={() => navigate('/resiConstruction')} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">Residential Construction</button>
                                <button onClick={() => navigate('/commConversion')} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">Commercial Conversion</button>
                                <button onClick={() => navigate('/commConstruction')} className="text-black cursor-pointer hover:text-gray-700 font-extrabold">Commercial Construction</button>
                            </>
                        )}
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
