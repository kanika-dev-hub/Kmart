import React from 'react'
import Logo from '../assets/logo.png'
import { FaUserPlus, FaShoppingCart} from "react-icons/fa"
import { MdLogin } from "react-icons/md";
import { useSelector } from 'react-redux';
import { NavLink }from 'react-router-dom'

const NavBar = () => {
  const count = useSelector((state)=> state.cart.length)
  return (
    <>
    <nav className="bg-gray-200 w-full top-0">
      <div className='flex justify-between items-center p-4'>
        <div className="flex gap-4">
            <NavLink to="" className="font-extrabold text-3xl outline-none">    
              <img className="h-11 px-2" src={Logo}></img>
            </NavLink>
        </div>
        <div className="flex gap-6">
            <NavLink to="/" className="outline-none text-md font-mono font-bold"
            style={({ isActive }) => {
              return {  
                fontWeight: isActive ? "900" : "normal",
                color: isActive ? "maroon" : "black",
              };
            }}>Home</NavLink>
            <NavLink to="/products" className="outline-none text-md font-mono"
            style={({ isActive }) => {
              return {  
                fontWeight: isActive ? "bolder" : "normal",
                color: isActive ? "maroon" : "black",
              };
            }}>Products</NavLink>
            <NavLink to="/about" className="outline-none text-md font-mono"
            style={({ isActive }) => {
              return {  
                fontWeight: isActive ? "900" : "normal",
                color: isActive ? "maroon" : "black",
              };
            }}>About</NavLink>
            <NavLink to="/contact" className="outline-none text-md font-mono"
            style={({ isActive }) => {
              return {  
                fontWeight: isActive ? "900" : "normal",
                color: isActive ? "maroon" : "black", 
              };
            }}>Contact</NavLink>  
        </div>
        <div className="flex gap-2">
            <NavLink to="#" className="outline-none hover:scale-110 rounded-md border border-black/20 px-3 py-1.5  flex items-center gap-1 text-sm font-medium"><MdLogin/>Login</NavLink>
            <NavLink to="#" className="outline-none hover:scale-110 rounded-md border border-black/20 px-3 py-1.5  flex items-center gap-1 text-sm font-medium"><FaUserPlus/>Register</NavLink>
            <NavLink to="/cart" className="outline-none hover:scale-110 rounded-md border border-black/20 px-3 py-1.5  flex items-center gap-1 text-sm font-medium"><FaShoppingCart/>Cart ({count})</NavLink>
        </div>
      </div>
    </nav>
    </>
  )
}

export default NavBar
