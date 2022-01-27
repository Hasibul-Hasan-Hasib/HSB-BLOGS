import React from 'react';
import HomeBlog from './HomeBlog';

const HomeBlogs = () => {
    return (
        <div>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-12">
                        <HomeBlog/>
                        <HomeBlog/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeBlogs;