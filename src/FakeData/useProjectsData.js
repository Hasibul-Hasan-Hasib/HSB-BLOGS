import { useEffect, useState } from 'react';

const useProjectsData = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('./projectData.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    return { projects };
};

export default useProjectsData;