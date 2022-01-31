import React from 'react';
import HomeBlog from './HomeBlog';
import useBlogsData from '../../FakeData/useBlogsData'

const HomeBlogs = () => {

    const {blogs} = useBlogsData();
    const homeBlogs = blogs.slice(0,2)
    console.log(homeBlogs);

    return (
        <div>
            <section class="text-gray-600 body-font overflow-hidden">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mt-8 text-gray-700">Latest Blogs</h1>
                <div class="container px-5 pb-24 pt-20 mx-auto">
                    <div class="flex flex-wrap -m-12">
                        {homeBlogs.map(blog=><HomeBlog key={blog.blogId} blog={blog}/>)}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeBlogs;