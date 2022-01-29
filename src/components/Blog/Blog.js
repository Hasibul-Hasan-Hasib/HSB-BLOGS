import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">Blog Category</span>
                <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
            </div>
            <div class="md:flex-grow">
                <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded mx-auto" alt="hero" src="https://dummyimage.com/720x600" />
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Lorem ipsum dolor sit amet.</h2>
                <p class="leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure accusamus accusantium obcaecati tempore odit fugit dicta quibusdam optio nihil magnam.</p>
                <Link to="" class="text-indigo-500 inline-flex items-center mt-4">See Details
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Blog;