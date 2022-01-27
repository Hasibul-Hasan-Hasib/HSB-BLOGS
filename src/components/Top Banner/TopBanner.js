import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../Assets/Images/Content (1).gif'

const TopBanner = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi There!!
                            <br class="hidden lg:inline-block"/> Welcome to HSB Blogs
                        </h1>
                        <p class="mb-8 leading-relaxed">Looking to learn about web development and UX design? You can find latest blog and updates of my projects here. Enjoy your time here.</p>
                        <div class="flex justify-center">
                            <Link to="/blogs" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Blogs</Link>
                            <Link to="/projects" class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Projects</Link>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src={bannerImage}/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TopBanner;