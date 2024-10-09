import React, {useState, useEffect, useRef} from 'react'
import Logo from '../assets/logo.png'
import { FaShoppingCart} from "react-icons/fa"
import { MdLogin } from "react-icons/md";
import { useSelector } from 'react-redux';
import { NavLink }from 'react-router-dom'

const NavBar = () => {
  const count = useSelector((state)=> state.cart.length)

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navMenuRef = useRef(null); // Ref for the mobile menu
  const navToggleRef = useRef(null); // Ref for the hamburger button

  // Toggle the mobile menu
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // const toggleNavBar = () => {
  //   let nav_menu = document.getElementById('nav-menu')
  //   nav_menu.classList.toggle('hidden')
  // }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navMenuRef.current && 
        !navMenuRef.current.contains(event.target) &&
        navToggleRef.current && 
        !navToggleRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); // Close the menu if clicked outside
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <>
    <nav className="bg-gray-200 w-full top-0">
      <div className='flex justify-between items-center p-4'>
      <div className="sm:hidden">
          <button ref={navToggleRef}
            onClick={handleToggleMenu} className="text-black focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="27" viewBox="0 0 24 24">
<path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"></path>
</svg>
          </button>
        </div>
        <div ref={navMenuRef}
        className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden fixed top-12 text-black`}>
          <NavLink to="/" className="block border border-b-gray-400 bg-gray-300/80 hover:text-red-800 p-2">Home</NavLink>
          <NavLink to="/products" className="block border border-b-gray-400 bg-gray-300/80 hover:text-red-800 p-2">Products</NavLink>
          <NavLink to="/about" className="block border border-b-gray-400 bg-gray-300/80 hover:text-red-800 p-2">About</NavLink>
          <NavLink to="/contact" className="block bg-gray-300/80 hover:text-red-800 p-2">Contact</NavLink>
        </div>
        <div className="flex gap-4">
            <NavLink to="" className="font-extrabold text-3xl outline-none">    
              <img className="h-9 sm:h-11 px-2" src={Logo}></img>
            </NavLink>
        </div>
        <div className="hidden sm:flex space-x-6">
            <NavLink to="/" className="hover:scale-110 outline-none text-md font-mono font-bold"
            style={({ isActive }) => {
              return {  
                fontWeight: isActive ? "900" : "normal",
                color: isActive ? "maroon" : "black",
              };
            }}>Home</NavLink>
            <NavLink to="/products" className="hover:scale-110 outline-none text-md font-mono"
            style={({ isActive }) => {
              return {  
                fontWeight: isActive ? "bolder" : "normal",
                color: isActive ? "maroon" : "black",
              };
            }}>Products</NavLink>
            <NavLink to="/about" className="hover:scale-110 outline-none text-md font-mono"
            style={({ isActive }) => {
              return {  
                fontWeight: isActive ? "900" : "normal",
                color: isActive ? "maroon" : "black",
              };
            }}>About</NavLink>
            <NavLink to="/contact" className="hover:scale-110 outline-none text-md font-mono"
            style={({ isActive }) => {
              return {  
                fontWeight: isActive ? "900" : "normal",
                color: isActive ? "maroon" : "black", 
              };
            }}>Contact</NavLink>  
        {/* </div> */}
        </div>
        
        <div className="flex gap-2">
            <NavLink to="#" className="outline-none hover:scale-110 rounded-md border border-black/20 px-3 py-1.5  flex items-center gap-1 text-sm font-medium"><MdLogin/>
              <p className='hidden sm:inline'>Login</p>
            </NavLink>
            <NavLink to="/cart" className="outline-none hover:scale-110 rounded-md border border-black/20 px-3 py-1.5  flex items-center gap-1 text-sm font-medium">
            <FaShoppingCart/><p className='hidden sm:inline'>Cart</p> ({count})</NavLink>
        </div>
        
      </div>
    </nav>
    </>
  )
}

export default NavBar
