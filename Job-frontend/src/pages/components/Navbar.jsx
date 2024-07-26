import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import Login from './Login';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const handleMenuToggler = () => {
        setMenu(!menu);
    }
    return (
        <>
            <header className='max-w-screen-4xl container mx-auto xl:px-24 px-4 mx-2 my-5'>
                <nav className='flex justify-between items-center'>
                    <a href='/' className="flex items-center gap-2 text-3xl text-metal hover:text-secondary">
                        Job Portal
                    </a>
                    <ul className='hidden md:flex justify-center items-center gap-6 text-xl'>
                        {/* <li><a className='hover:text-secondary' href='/browse-jobs'>Browse jobs</a></li> */}
                        <li><a className='hover:text-secondary' href='/my-jobs'>My Jobs</a></li>
                        <li><a className='hover:text-secondary' href='/post-jobs'>Post a job</a></li>
                    </ul>
                    <div className="text-base text-secondary font-3xl hidden lg:block">
                        {/* <a to='/login' className='mx-2 my-5 py-2 px-5 border rounded'>Log In</a> */}
                        <Login />
                        <a to='/signup' className='mx-2 my-5 py-2 px-5 border rounded bg-secondary text-white'>Sign Up</a>
                    </div>
                    <div className="md:hidden block">
                        <button onClick={handleMenuToggler}>
                            {
                                menu ? <FaXmark className='text-3xl text-metal' /> : <FaBarsStaggered className='text-3xl text-metal' />
                            }
                        </button>
                    </div>
                </nav>


                <div className={`px-4 bg-bermuda py-5 rounded-2xl ${menu ? "" : "hidden"}`}>

                    <ul className='my-10 text-xl'>
                        <li><a href='/browse-jobs'>Browse jobs</a></li>
                        <li><a href='/my-jobs'>My Jobs</a></li>
                        <li><a href='/post-jobs'>Post a job</a></li>
                    </ul>
                    <div className="text-base text-secondary font-3xl">
                        <a to='/login' className='mx-2 my-5 py-2 px-5 border rounded'>Log In</a>
                        <a to='/signup' className='mx-2 my-5 py-2 px-5 border rounded bg-secondary text-white'>Sign Up</a>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Navbar