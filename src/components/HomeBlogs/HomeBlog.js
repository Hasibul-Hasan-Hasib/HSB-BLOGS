import React from 'react';
import { Link } from 'react-router-dom';

const HomeBlog = (props) => {

    const { blogHeading, blogContent, category, date } = props.blog;

    return (
        // <div class="p-12 md:w-1/2 flex flex-col items-start">
        //     <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{category}</span>
        //     <span class="mt-1 text-gray-500 text-sm">{date}</span>
        //     <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{blogHeading}</h2>
        //     <p class="leading-relaxed mb-8">{blogContent}</p>
        //     <div class="flex items-center justify-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
        //         <Link to="" class="text-indigo-500 inline-flex items-center">Learn More
        //             <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
        //                 <path d="M5 12h14"></path>
        //                 <path d="M12 5l7 7-7 7"></path>
        //             </svg>
        //         </Link>
        //     </div>
        // </div>
        <div class="p-4 lg:w-1/2">
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <div class="flex justify-between">
                    <span class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">{category}</span>
                    <span class="mt-1 text-gray-500 text-sm">{date}</span>
                </div>
                <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{blogHeading}</h1>
                <p class="leading-relaxed mb-3">{blogContent}</p>
                <Link to="/blogs" class="text-indigo-500 inline-flex items-center">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default HomeBlog;