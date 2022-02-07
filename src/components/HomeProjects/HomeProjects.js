import React from 'react';
import HomeProject from './HomeProject';
import useProjectsData from '../../FakeData/useProjectsData'


const HomeProjects = () => {

    const { projects } = useProjectsData();
    const homeProjects = projects.slice(0,3)


    return (
        <section class="text-gray-600 body-font">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mt-8 text-gray-700">Projects</h1>
            <div class="container pb-24 pt-20 mx-auto">
                <div class="flex flex-wrap -mb-10 -mt-4">
                    {
                        homeProjects.map(project => <HomeProject key={project.projectId} project={project}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeProjects;