import React from 'react';
import ProjectL from '../../components/Project/ProjectL';
import ProjectR from '../../components/Project/ProjectR';


const Projects = () => {
    return (
        <section class="text-gray-600 body-font">
            <ProjectL/>
            <ProjectR/>
            <ProjectL/>
            <ProjectR/>
        </section>
    );
};


export default Projects;