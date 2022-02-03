import React from 'react';
import ProjectL from '../../components/Project/ProjectL';
import ProjectR from '../../components/Project/ProjectR';
import useProjectsData from '../../FakeData/useProjectsData';


const Projects = () => {

    const { projects } = useProjectsData();

    return (
        <section class="text-gray-600 body-font divide-y-2 divide-gray-100">
            {
                projects.map(project => <div>{(() => {
                    if (project.projectId%2!==0) {
                        return (
                            <ProjectL key={project.projectId} project={project} />
                        )
                    }
                    else{
                        return (
                            <ProjectR key={project.projectId} project={project}/>
                        )
                    }
                })()}</div>)
            }
        </section>
    );
};


export default Projects;