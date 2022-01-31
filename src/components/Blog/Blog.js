import React from 'react';
import image from '../../Assets/Images/logo.svg';


const Blog = (props) => {

    const { blogImg, blogHeading, blogContent, category, date } = props.blog;

    return (
        <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="font-semibold title-font text-gray-700">{category}</span>
                <span class="mt-1 text-gray-500 text-sm">{date}</span>
            </div>
            <div class="md:flex-grow">
                {(() => {
                    if (blogImg) {
                        return (
                            <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded mx-auto" alt="hero" src={`https://raw.githubusercontent.com/Hasibul-Hasan-Hasib/HSB-BLOGS/main/src/Assets/Images/${blogImg}`} />
                        )
                    }
                })()}
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{blogHeading}</h2>
                <p class="leading-relaxed">{blogContent}</p>
            </div>
        </div>
    );
};

export default Blog;