import React from 'react';
import websiteIcon from '../assets/logo2.png';
import { Link } from 'react-router-dom';
const Logo = () => (
  <div className="logo flex items-center space-x-2 text-lg font-bold text-gray-800">
    <img src={websiteIcon} alt="Website Icon" className="h-20 w-20 rounded-full" />

  </div>
);



const Navbar = () => (
  <div className="navbar flex justify-between items-center py-2 px-4 bg-white shadow-md">
    <Logo />
    <div className="links flex space-x-6">
      <Link to="/Home" className="nav-link text-gray-600 hover:text-gray-900">Home</Link>
      <Link to="/Products" className="nav-link text-gray-600 hover:text-gray-900">Products</Link>
      <Link to="/News" className="nav-link text-gray-600 hover:text-gray-900">News</Link>
     
    </div>
  </div>
);

export default Navbar;

