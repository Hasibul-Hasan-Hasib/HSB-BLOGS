import React from 'react';
import { Link } from 'react-router-dom';

const HomeProject = (props) => {

    const { projectHeading, projectContent, projectImg } = props.project;

    return (
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-contain object-center h-full w-full" src={`https://raw.githubusercontent.com/Hasibul-Hasan-Hasib/HSB-BLOGS/main/src/Assets/Images/${projectImg}`} />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">{projectHeading}</h2>
            <p class="text-base leading-relaxed mt-2">{projectContent.slice(0,150)}</p>
            <Link to="/projects" class="text-indigo-500 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </Link>
        </div>
    );
};

export default HomeProject;