import React from 'react'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    // <div classNameName='w-full my-10 bg-gray-300 relative bottom-0'>
    //   this is my footer
    // </div>


<footer className="bg-white rounded-lg shadow dark:bg-gray-900 mt-10">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
        <div className="flex sm:items-center justify-between">
            <NavLink to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={Logo} className="h-5 sm:h-8" alt="Kmart Logo" /> 
            </NavLink>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <NavLink to="/" className="hover:underline me-4 md:me-6">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="hover:underline me-4 md:me-6">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="hover:underline">Contact</NavLink>
                </li>
            </ul>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <div className="text-sm flex justify-center text-gray-500 dark:text-gray-400">© 2024 
          KMART. All Rights Reserved.
        </div>
    </div>
</footer>


  )
}

export default Footer