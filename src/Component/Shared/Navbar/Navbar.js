import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'
import {BiUserCircle} from 'react-icons/bi'
import {CgMenuGridR} from 'react-icons/cg'

const Navbar = () => {
    return (
        <nav className='h-14 flex items-center justify-between px-6 py-5'>
            {/* -------------- website name ---------------- */}
            <h2 className='uppercase text-xl font-bold space-x-2 tracking-widest'>
                <span className='bg-green-600 px-5 py-1 text-white'>Travel</span>
                <span className='px-5 border-y-4 border-green-600 text-green-600'>Lover</span> 
            </h2>
            {/* -------------- small device icons ------------------- */}
            <div className='flex space-x-2 md:hidden block'>
                <BiUserCircle className='text-xl'/>
                <CgMenuGridR className='text-xl'/>
            </div>
            {/* --------------- large device route ------------------ */}
            <ul className='flex space-x-5 text-base text-green-600 font-bold uppercase'>
                <Link to='/home' className='route'>Home</Link>
                <Link to='/service' className='route'>Service</Link>
                <Link to='/reviews' className='route'>Reviews</Link>
                <Link to='/about' className='route'>About</Link>
                <Link to='/contact' className='route'>Contact</Link>
            </ul>
            {/* -------------- log in route ----------------- */}
            <div>
                <Link to='/login' className='text-base text-white hover:text-green-600 font-bold uppercase bg-green-600 hover:bg-transparent border-2 border-green-600 rounded-full px-6 py-[1px] duration-300'>Log In</Link>
            </div>
        </nav>
    );
};

export default Navbar;