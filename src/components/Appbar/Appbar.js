import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/HSB Blogs-logos.png';

const Appbar = () => {
    return (
        <div>
            <header class="text-gray-600 body-font">
                <div class="container mx-auto py-10 flex flex-wrap flex-col md:flex-row items-center">
                    <Link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img className='w-32 md:w-48 lg:w-56' src={logo} alt="" />
                    </Link>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/home" class="mr-5 hover:text-gray-900">Home</Link>
                        <Link to="/blogs" class="mr-5 hover:text-gray-900">Blogs</Link>
                        <Link to="/contact" class="mr-5 hover:text-gray-900">Contact</Link>
                        <Link to="/about" class="mr-5 hover:text-gray-900">About</Link>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Appbar;