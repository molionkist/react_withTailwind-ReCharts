import React, { useState } from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { GiCrossMark } from "react-icons/gi";

const Navbar = () => {
    const [open, setOpen] = useState([false])
    return (
        <nav>
            <div onClick={() => setOpen(!open)} className='w-6 h-6'>
                {open ? <GiCrossMark /> : <MdOutlineMenu></MdOutlineMenu>}
            </div>
            <ul className={`md: flex absolute duration-500 ease-in bg-yellow-300 w-full ${open ? 'top-6' : 'top-[-120px]'}`}>
                <li className=' mr-8'><a href="/Home">Home</a></li>
                <li className=' mr-8'><a href="/About us">about us</a></li>
                <li className=' mr-8'><a href="/ Your Chart"></a>Guideline </li>
                <li className=' mr-8'><a href="/Create Chart"></a>Create Chart</li>

            </ul>



        </nav >
    );
};

export default Navbar;