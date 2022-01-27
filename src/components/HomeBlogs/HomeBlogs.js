import React from 'react';
import HomeBlog from './HomeBlog';

const HomeBlogs = () => {
    return (
        <div>
            <section class="text-gray-600 body-font overflow-hidden">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mt-8 text-gray-700">Latest Blogs</h1>
                <div class="container px-5 pb-24 pt-20 mx-auto">
                    <div class="flex flex-wrap -m-12">
                        <HomeBlog />
                        <HomeBlog />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeBlogs;