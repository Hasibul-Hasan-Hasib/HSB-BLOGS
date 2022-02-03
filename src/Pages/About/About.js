import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../Assets/Images/1.png'

const About = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img class="z-20 lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={photo} />
                    <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Small Talk About Me</h1>
                        <p class="mb-8 leading-relaxed">I am a junior MERN stack web developer. I made this blog site to showcase my progress to become a senior web developer and UX designer. In this blog site i will post updates about my projects, researches, work progress and experiences, and other things that I would like to share with everyone. I hope you like my blog site. thank you for visiting.</p>
                        <div class="flex justify-center">
                            <Link to="/blogs" class="mx-2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Blogs</Link>
                            <Link to="/projects" class="mx-2 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Projects</Link>
                            <a href="https://github.com/Hasibul-Hasan-Hasib" target="_black" class="mx-2 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Github</a>
                            <Link to="/contact" class="mx-2 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Contact</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;