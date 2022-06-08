import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { FaAdjust } from "react-icons/fa";


import { Search } from './Search';

export const Navbar = ({darkTheme, setDarkTheme}) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b border-gray-700 border-gray-200">
        <div className="flex justify-between items-center space-x-5 w-screen">
            <Link to="/">            
              <img className="h-9 w9" src={logo} alt="logo"/>          
                            
             </Link>
             <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-1 py-1 hover:shadow-lg">
             {darkTheme ? <FaAdjust/> : <FaAdjust/>}
             </button>             
            </div>
            <Search />
    </div>
  )
}
