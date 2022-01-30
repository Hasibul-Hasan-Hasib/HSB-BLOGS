import React from 'react';
import Blog from '../../components/Blog/Blog';
import useBlogsData from '../../FakeData/useBlogsData'

const Blogs = () => {

    const {blogs} = useBlogsData();

    return (
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="-my-8 divide-y-2 divide-gray-100">
                    {blogs.map(blog=> <Blog key={blog.blogId} blog={blog}/>)}
                </div>
            </div>
        </section>
    );
};

export default Blogs;