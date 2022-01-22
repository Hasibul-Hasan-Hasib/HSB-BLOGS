import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/HSB-Blogs-Logo.png';

const Appbar = () => {
    return (
        <div>
            <div>
                <header className="text-gray-600 body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <img src={logo} className="w-48 md:w-48 lg:w-56" alt="" />
                        </Link>
                        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                            <Link to="/home" className="mr-5 hover:text-gray-900">Home</Link>
                            <Link to="/blogs" className="mr-5 hover:text-gray-900">Blogs</Link>
                            <Link to="/contact" className="mr-5 hover:text-gray-900 hover:animate-pulse">Contact</Link>
                            <Link to="/about" className="mr-5 hover:text-gray-900 hover:animate-bounce">About</Link>
                        </nav>
                        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Appbar;