import React from 'react';
import HomeProject from './HomeProject';

const HomeProjects = () => {
    return (
        <section class="text-gray-600 body-font">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mt-8 text-gray-700">Projects</h1>
            <div class="container pb-24 pt-20 mx-auto">
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <HomeProject />
                    <HomeProject />
                    <HomeProject />
                </div>
            </div>
        </section>
    );
};

export default HomeProjects;