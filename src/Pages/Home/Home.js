import React from 'react';
import HomeBlogs from '../../components/HomeBlogs/HomeBlogs';
import HomeTestimonial from '../../components/HomeTestimonial/HomeTestimonial';
import TopBanner from '../../components/Top Banner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner/>
            <HomeBlogs/>
            <HomeTestimonial/>
        </div>
    );
};

export default Home;