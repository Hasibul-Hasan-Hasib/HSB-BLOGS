import React from 'react';

const ProjectL = (props) => {

    const { projectHeading, projectContent, projectImg, liveSite, github } = props.project;

    return (
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img class="object-cover object-center rounded" alt="hero" src={`https://raw.githubusercontent.com/Hasibul-Hasan-Hasib/HSB-BLOGS/main/src/Assets/Images/${projectImg}`} />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{projectHeading}
                </h1>
                <p class="mb-8 leading-relaxed">{projectContent}</p>
                <div class="flex justify-center">
                    <a href={`${liveSite}`} target="_blank" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" rel="noreferrer">Live Site</a>
                    <a href={`${github}`} target="_blank" class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" rel="noreferrer">Github</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectL;