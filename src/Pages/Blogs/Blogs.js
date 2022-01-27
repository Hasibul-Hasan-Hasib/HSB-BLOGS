import React from 'react';
import Blog from '../../components/Blog/Blog';

const Blogs = () => {
    return (
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="-my-8 divide-y-2 divide-gray-100">
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                </div>
            </div>
        </section>
    );
};

export default Blogs;