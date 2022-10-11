import React from 'react';
import ContextApi from '../ContextApi/ContextApi';
import ReactRouter from '../ReactRouter/ReactRouter';

const Blog = () => {
    return (
        <div className='mt-28 mb-10'>
            <ReactRouter/>
            <ContextApi/>
        </div>
    );
};

export default Blog;