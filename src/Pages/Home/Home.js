import React from 'react';
import HomeBlogs from '../../components/HomeBlogs/HomeBlogs';
import HomeProjects from '../../components/HomeProjects/HomeProjects';
import TopBanner from '../../components/Top Banner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner/>
            <HomeBlogs/>
            <HomeProjects/>
        </div>
    );
};

export default Home;